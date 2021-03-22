import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Alert } from 'antd';
import { resetScore, updateHighScore } from '../../actions/score';

const Wrapper = styled.div`
  display: flex; 
  justify-content: space-around; 
  align-items: center; 
  margin: 30px;
`;
const ScoreSpan = styled.span`
  margin-right: 30px;
`;
const StyledAlert = styled(Alert)`
  position: fixed;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  z-index: 100;
`;

function Score() {
  const dispatch = useDispatch();
  const { score, highScore, finish, newRecord } = useSelector((state) => state.score);
  const { tetris } = useSelector((state) => state.board);

  useEffect(() => {
    const existScore = parseInt(localStorage.getItem('tetrisScore') || 0);
    if (highScore <= existScore) {
      dispatch(updateHighScore(existScore));
    }
  }, [localStorage]);

  const handleRestart = useCallback(() => {
    tetris.resume();
    dispatch(resetScore());
  }, [tetris]);

  return (
    <>
      <Wrapper>
        <div>
          <ScoreSpan>Score : {score}</ScoreSpan>
          <ScoreSpan>HighScore : {highScore}</ScoreSpan>
        </div>
        <button onClick={handleRestart}>Restart</button>
      </Wrapper>
      {finish && newRecord && <StyledAlert message="최고기록을 갱신했습니다!" type="success" />}
      {finish && !newRecord && <StyledAlert message="게임이 종료되었습니다." type="info" />}
    </>
  );
}

export default Score;
