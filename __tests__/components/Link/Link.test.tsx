import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Link } from '@/components/Link/Link';

describe('Component: Link', () => {
  it('Should render properly', () => {
    const testText = 'test-text';
    const testHref = 'test-href';

    render(<Link href={testHref}>{testText}</Link>);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toBeInTheDocument();
  });

  it('Should have the correct href attribute', () => {
    const testText = 'test-text';
    const testHref = 'test-href';

    render(<Link href={testHref}>{testText}</Link>);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', testHref);
  });

  it('Should render the correct children', () => {
    const testText = 'test-text';
    const testHref = 'test-href';

    render(<Link href={testHref}>{testText}</Link>);

    const linkElement = screen.getByText(testText);

    expect(linkElement).toBeInTheDocument();
  });

  it('Should have the correct "as" attribute when provided', () => {
    const testText = 'test-text';
    const testHref = 'test-href';
    const testAs = 'test-as';

    render(
      <Link
        as={testAs}
        href={testHref}
      >
        {testText}
      </Link>,
    );

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', testAs);
  });

  it('Should call onClick when clicked', () => {
    const testText = 'test-text';
    const testHref = 'test-href';
    const mockOnClick = jest.fn();

    render(
      <Link
        onClick={mockOnClick}
        href={testHref}
      >
        {testText}
      </Link>,
    );

    const linkElement = screen.getByRole('link');
    fireEvent.click(linkElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('Should call onMouseEnter when mouse enters', () => {
    const testText = 'test-text';
    const testHref = 'test-href';
    const mockOnMouseEnter = jest.fn();

    render(
      <Link
        onMouseEnter={mockOnMouseEnter}
        href={testHref}
      >
        {testText}
      </Link>,
    );

    const linkElement = screen.getByRole('link');
    fireEvent.mouseEnter(linkElement);

    expect(mockOnMouseEnter).toHaveBeenCalledTimes(1);
  });

  it('Should call onTouchStart when touch starts', () => {
    const testText = 'test-text';
    const testHref = 'test-href';
    const mockOnTouchStart = jest.fn();

    render(
      <Link
        onTouchStart={mockOnTouchStart}
        href={testHref}
      >
        {testText}
      </Link>,
    );

    const linkElement = screen.getByRole('link');
    fireEvent.touchStart(linkElement);

    expect(mockOnTouchStart).toHaveBeenCalledTimes(1);
  });
});
