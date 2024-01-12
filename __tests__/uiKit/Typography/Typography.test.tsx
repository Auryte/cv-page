import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Typography } from "@/uiKit/Typography/Typography";

describe("Component: Typography.", () => {
  it("Should render properly.", () => {
    const text: string = "Test text";

    render(<Typography>{text}</Typography>);

    const node = screen.getByText(text);

    expect(node).toBeInTheDocument();
  });

  it("Should change the color and the background-color", () => {
    const text: string = "Test text";

    const styles = {
      color: "red",
      backgroundColor: "blue",
    };

    render(<Typography sx={styles}>{text}</Typography>);

    const node = screen.getByText(text);
    expect(node).toHaveStyle(`color: red; background-color: blue;`);
  });

  it("should render the children prop correctly", () => {
    const { getByText } = render(
      <Typography>
        <span>Hello World</span>
      </Typography>
    );
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
