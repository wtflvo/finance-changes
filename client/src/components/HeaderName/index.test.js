import { render, screen } from "@testing-library/react";

import { HeaderName } from ".";

import React from "react";

describe("<HeaderName>", () => {
	it("should render single header cell", () => {
		render(<HeaderName columnName={"Header"} />);
		
		expect(screen.getByText("Header")).toBeInTheDocument();
	});
});