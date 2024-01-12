import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "@/uiKit/Button/Button";

describe("Button component", () => {
  it("Should render properly", () => {
    render(<Button>Click</Button>);

    const node = screen.getByText("Click");

    expect(node).toBeInTheDocument();
  });
  it("Should apply styles", () => {
    const styles = { padding: 0 };

    render(<Button sx={styles}>Click</Button>);

    const node = screen.getByText("Click");

    expect(node).toHaveStyle("padding: 0");
  });
  it("Should render the correct variant", () => {
    const variant = "contained";

    render(<Button variant={variant}>Click</Button>);

    const node = screen.getByText("Click");

    expect(node).toHaveClass("MuiButton-contained");
  });
  it("Should contain startIcon and endIcon", () => {
    const testStartIconText = 'test-span-1'
    const testEndIconText = 'test-span-2'
    const StartIcon = () => <span>{testStartIconText}</span>;
    const EndIcon = () => <span>{testEndIconText}</span>;

    render(
      <Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
        Click
      </Button>
    );

    const startIconNode = screen.getByText(testStartIconText);
    const endIconNode = screen.getByText(testEndIconText);

    expect(startIconNode).toBeInTheDocument();
    expect(endIconNode).toBeInTheDocument();
  });
  it("It should display a text after clicked", () => {
    const mockFn = jest.fn();

    render(<Button onClick={mockFn}>Click</Button>);

    const node = screen.getByText("Click");

    fireEvent.click(node);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
