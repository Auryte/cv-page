import { Menu } from "@/uiKit/Menu/Menu";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

describe("Component: Menu", () => {
    const randomText = "randomText";
    it("Should render properly", () => {
        const anchorEl = document.createElement('button');
        render(<Menu open anchorEl={anchorEl}>{randomText}</Menu>);
        expect(screen.getByText(randomText)).toBeInTheDocument()
    })
})