import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../Modal';

describe('Modal', () => {
  it('should render the Modal component', () => {
    const { container } = render(<Modal />);
    expect(container).toMatchSnapshot();
  });
});