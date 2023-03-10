import React from 'react';
import { render } from '@testing-library/react';

import Auth from '../Auth';

describe('Auth', () => {
  it('should render the Auth component', () => {
    const { container } = render(<Auth />);
    expect(container).toMatchSnapshot();
  });
});