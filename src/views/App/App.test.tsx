import { render, screen } from 'test-utils';
import { App } from './App';

describe(`<App>`, () => {
  it('renders correctly', async () => {
    // when
    render(<App />);

    // then
    screen.getByRole('img', { name: /Brewery App Logo/i });
    screen.getByLabelText(/searcher/i);
    screen.getByRole('heading', { name: /Breweries/i, level: 2 });
  });
});
