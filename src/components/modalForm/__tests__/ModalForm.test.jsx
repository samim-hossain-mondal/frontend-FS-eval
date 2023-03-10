import React from 'react';
import { render } from '@testing-library/react';

import ModalForm from '../ModalForm';

describe('ModalForm', () => {
  it('should render the ModalForm component', () => {
    const { container } = render(<ModalForm />);
    expect(container).toMatchSnapshot();
  });
});