import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { Image } from '@/components/Image/Image';

describe('Component: Image', () => {
  const testSrc = '/test-src.jpg';
  const testAlt = 'test-alt';
  const testWidth = 200;
  const testHeight = 200;

  it('Should render properly', () => {
    render(
      <Image
        src={testSrc}
        alt={testAlt}
        width={testWidth}
        height={testHeight}
      />,
    );
    const imageElement = screen.getByAltText(testAlt);
    expect(imageElement).toBeInTheDocument();
  });

  it('Should have the correct alt attribute', () => {
    render(
      <Image
        src={testSrc}
        alt={testAlt}
        width={testWidth}
        height={testHeight}
      />,
    );
    const imageElement = screen.getByAltText(testAlt);
    expect(imageElement).toHaveAttribute('alt', testAlt);
  });

  it('Should apply loading attribute when provided', () => {
    render(
      <Image
        src={testSrc}
        alt={testAlt}
        width={testWidth}
        height={testHeight}
        loading='lazy'
      />,
    );
    const imageElement = screen.getByAltText(testAlt);
    expect(imageElement).toHaveAttribute('loading', 'lazy');
  });

  it('Should forward additional props', () => {
    const testClassName = 'test-className';
    render(
      <Image
        src={testSrc}
        alt={testAlt}
        width={testWidth}
        height={testHeight}
        className={testClassName}
      />,
    );
    const imageElement = screen.getByAltText(testAlt);
    expect(imageElement).toHaveClass(testClassName);
  });

  it('Should set the correct width and height', () => {
    render(
      <Image
        src={testSrc}
        alt={testAlt}
        width={testWidth}
        height={testHeight}
      />,
    );
    const imageElement = screen.getByAltText(testAlt);

    // This will only work if you're not using the 'layout' prop with a value other than 'intrinsic'
    // Because 'layout' prop with 'fill', 'responsive', and 'fixed' values would affect dimensions
    expect(imageElement).toHaveAttribute('width', `${testWidth}`);
    expect(imageElement).toHaveAttribute('height', `${testHeight}`);
  });

  it('Should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <Image
        src={testSrc}
        alt={testAlt}
        width={testWidth}
        height={testHeight}
        onClick={mockOnClick}
      />,
    );
    const imageElement = screen.getByAltText(testAlt);

    fireEvent.click(imageElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
