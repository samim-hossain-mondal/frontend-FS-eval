import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from '../PageNotFound';

describe('PageNotFound', () => {
  it('should render successfully', () => {
    const { container } = render(<PageNotFound />);
    expect(container).toMatchSnapshot();
  });
});