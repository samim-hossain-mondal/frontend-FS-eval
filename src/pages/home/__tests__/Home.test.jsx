import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  it('should render the Home component', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});