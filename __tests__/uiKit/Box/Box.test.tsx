import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Box } from "@/uiKit/Box/Box";

describe("Component: Box.", () => {
  const randomText = "randomText";

  it("Should render properly.", () => {
    render(<Box>{randomText}</Box>);
    const node = screen.getByText(randomText);
    expect(node).toBeInTheDocument();
  });

  it("Should apply the correct styles with sx property", () => {
    const styles = { padding: '10px', backgroundColor: 'red' };
    render(<Box sx={styles}>{randomText}</Box>);
    const node = screen.getByText(randomText);
    expect(node).toHaveStyle('padding: 10px');
    expect(node).toHaveStyle('backgroundColor: red');
  });

  it("Should render the correct HTML element passed from the component property", () => {
    const { container } = render(<Box component='h2'>{randomText}</Box>);
    const node = container.querySelector('h2');
    expect(node).toBeInTheDocument();
  });

  it("Should not render 'h2' - HTMLHeadingElement if it is not passed from the component property", () => {
    const { container } = render(<Box>{randomText}</Box>);
    const node = container.querySelector('h2');
    expect(node).not.toBeInTheDocument();
  });
});
