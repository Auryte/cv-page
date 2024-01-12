import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Modal } from '@/uiKit/Modal/Modal';

describe('Component: Modal.', () => {
  it('Should render properly.', () => {
    const text: string = 'Test text';

    render(<Modal isOpen={true}><p>{text}</p></Modal>);

    const node = screen.getByText(text);

    expect(node).toBeInTheDocument();
  });
});
