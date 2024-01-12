import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "@/uiKit/Button/Button";
import { IconButton } from "@/uiKit/IconButton/IconButton";
import { Icon } from "@/uiKit/Icon/Icon";

describe("Component: IconButton ", () => {
  it("Should render properly", () => {
    render(<IconButton>Click</IconButton>);

    const node = screen.getByText("Click");

    expect(node).toBeInTheDocument();
  });
  it("Should apply styles", () => {
    const styles = { padding: 0 };

    render(<IconButton sx={styles}>Click</IconButton>);

    const node = screen.getByText("Click");

    expect(node).toHaveStyle("padding: 0");
  });
  it("Should render the icon inside", () => {
    const color = "secondary";

    render(<IconButton color={color}><Icon name='phone'/></IconButton>);

    const node = screen.getByTestId("phoneIcon");

    expect(node).toBeInTheDocument();
  });
  it("It should display a text after clicked", () => {
    const mockFn = jest.fn();

    render(<IconButton onClick={mockFn}>Click</IconButton>);

    const node = screen.getByText("Click");

    fireEvent.click(node);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
