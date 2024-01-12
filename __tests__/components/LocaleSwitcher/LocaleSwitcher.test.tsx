import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: () => jest.fn(),

  }),
  usePathname: () => ({
    match: jest.fn()
  })
  }));

describe("LocaleSwitcher", () => {
  test(" Should render locale switcher", () => {
    const text: string = "lt";

    render(<LocaleSwitcher />);

    const node = screen.getByText(text);

    expect(node).toBeInTheDocument();
  });
});
