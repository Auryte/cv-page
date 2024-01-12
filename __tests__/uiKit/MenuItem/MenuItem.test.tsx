import { MenuItem } from "@/uiKit/MenuItem/MenuItem";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

describe("Component: MenuItem", () => {
    const randomText = "randomText";
    it("Should render properly", () => {
        render(<MenuItem>{randomText}</MenuItem>);
        expect(screen.getByText(randomText)).toBeInTheDocument();
    })
})