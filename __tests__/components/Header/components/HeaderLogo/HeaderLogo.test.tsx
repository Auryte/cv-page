import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeaderLogo from '@/components/Header/components/HeaderLogo/HeaderLogo';
import type * as ReactDom from 'react-dom';

jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}));

describe('Component: HeaderLogo.', () => {
  
  it('Should render HeaderLogo component.', () => {
    render(<HeaderLogo />);
    expect(screen.getByTestId('logoIcon')).toBeInTheDocument();
  });

  it('Should have link which redirects to home page.', () => {
    render(<HeaderLogo />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  });  
});
