import React from 'react';
import { render } from '@testing-library/react';
import ContentType from '../ContentType';

describe('ContentType', () => {
  it('should render the ContentType component', () => {
    const { container } = render(<ContentType />);
    expect(container).toMatchSnapshot();
  });
  it('should render the ContentType component with the correct title', () => {
    const { getByText } = render(<ContentType title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });
});