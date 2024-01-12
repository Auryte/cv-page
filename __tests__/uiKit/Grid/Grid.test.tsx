import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Grid } from "@/uiKit/Grid/Grid";

describe("Component: Grid.", () => {
  it("Should render properly.", () => {
    const testText = "test-text";

    render(<Grid container>{testText}</Grid>);

    const node = screen.getByText(testText);

    expect(node).toBeInTheDocument();
  });
  it("Should render child Grid components properly", () => {
    const testText = "test-text";
    render(
      <Grid container>
        <Grid>{testText}</Grid>
      </Grid>
    );
    const node = screen.getByText(testText);

    expect(node).toBeInTheDocument();
  });
  it("should render with correct spacing", () => {
    const spacing = 10;
    const pxFactor = 8;
    const spacingToPx = spacing * pxFactor;
    const testText = "test-text";

    render(
      <Grid container spacing={spacing}>
        <Grid item>{testText}</Grid>
      </Grid>
    );
    const node = screen.getByText(testText);

    expect(node).toHaveStyle(`padding-top: ${spacingToPx}px`);
    expect(node).toHaveStyle(`padding-left: ${spacingToPx}px`);
  });
  it("Should render the correct styles with sx property", () => {
    const styles = { color: "red", backgroundColor: "blue" };

    const { container } = render(
      <Grid sx={styles}>
        <div>Test</div>
      </Grid>
    );

    const node = container.firstChild;

    expect(node).toHaveStyle("color: red");
    expect(node).toHaveStyle("background-color: blue");
  });
  it("Should not wrap items when wrap property is set to nowrap", () => {
    const testText = "test-text";

    render(
      <Grid container wrap="nowrap">
        {testText}
      </Grid>
    );

    const node = screen.getByText(testText);

    expect(node).toHaveStyle("flex-wrap: nowrap");
  });
});
