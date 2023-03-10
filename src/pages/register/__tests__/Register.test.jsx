import React from 'react';
import { render } from '@testing-library/react';
import Register from '../Register';

describe('Register', () => {
  it('should render the Register component', () => {
    const { container } = render(<Register />);
    expect(container).toMatchSnapshot();
  });
});