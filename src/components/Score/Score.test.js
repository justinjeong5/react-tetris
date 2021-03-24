/* eslint-disable */
import { render, screen } from '../../utils/test';
import Score from './index';

test('<Score />', () => {
  render(<Score />);
  expect(screen.getByText(/highscore/i)).toBeInTheDocument();
  expect(screen.getByText(/restart/i)).toBeInTheDocument();
});
