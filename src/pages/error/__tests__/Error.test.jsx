import React from 'react';
import { render } from '@testing-library/react';
import Error from '../Error';

describe('Error', () => {
  it('should render successfully', () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });
});