import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import HomePageError from '@/app/[lang]/error';

describe('Home Page error.', () => {
  const error: Error = new Error('Test error message.');
  const reset: () => void = jest.fn();

  it('Should render error message.', () => {
    render(<HomePageError error={error} reset={reset} />);

    const node = screen.getByText(error.message);

    expect(node).toBeInTheDocument();
    expect(node).toHaveTextContent(error.message);
  });

  it('Should invoke reset function.', () => {
    render(<HomePageError error={error} reset={reset} />);

    const node = screen.getByRole('button');

    fireEvent.click(node);

    expect(reset).toHaveBeenCalledTimes(1);
  });
});
