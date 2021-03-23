import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { resetScore, updateHighScore } from '../../actions/score';

const Wrapper = styled.div`
  display: flex; 
  justify-content: space-around; 
  align-items: center; 
  margin: 30px;
  height: 40px;
`;
const ScoreSpan = styled.span`
  margin-right: 30px;
`;
const Alert = styled.div`
  position: fixed;
  top: calc(40% + 70px);
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: white;
  z-index: 100;
  background-color: CornflowerBlue;
  padding: 10px 0px;
`;

function Score() {
  const dispatch = useDispatch();
  const { score, highScore, newRecord, finish } = useSelector((state) => state.score);
  const { tetris } = useSelector((state) => state.board);

  useEffect(() => {
    const existScore = parseInt(localStorage.getItem('tetrisScore') || 0);
    dispatch(updateHighScore(existScore));
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
      {finish && newRecord && <Alert>최고기록을 갱신했습니다!</Alert>}
      {finish && !newRecord && <Alert>게임이 종료되었습니다.</Alert>}
    </>
  );
}

export default Score;
