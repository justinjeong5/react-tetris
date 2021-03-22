import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
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

function Score() {
  const dispatch = useDispatch();
  const { score, highScore } = useSelector((state) => state.score);
  const { tetris } = useSelector((state) => state.board);

  useEffect(() => {
    const existScore = parseInt(localStorage.getItem('tetrisScore'));
    if (highScore < existScore) {
      dispatch(updateHighScore(existScore));
    }
  }, []);

  const handleRestart = useCallback(() => {
    tetris.resume();
    dispatch(resetScore());
  }, [tetris]);

  return (
    <Wrapper>
      <div>
        <ScoreSpan>Score : {score}</ScoreSpan>
        <ScoreSpan>HighScore : {highScore}</ScoreSpan>
      </div>
      <button onClick={handleRestart}>Restart</button>
    </Wrapper>
  );
}

export default Score;
