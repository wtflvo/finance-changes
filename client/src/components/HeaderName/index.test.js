import { render, screen, fireEvent } from "@testing-library/react";

import { HeaderName } from ".";

import React from "react";

describe("<HeaderName>", () => {
	it("should render component", () => {
		render(<HeaderName columnName={"Header"} />);
		const element = screen.getByText(/Header/i);
		expect(element).toBeInTheDocument();
	});
});
