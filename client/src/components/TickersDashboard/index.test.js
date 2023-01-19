import { render, screen, fireEvent } from "@testing-library/react";

import TickersDashboard from ".";

import React from "react";

describe("<TickersDashboard /> spec", () => {
	it("renders the component", () => {
		const container = render(<TickersDashboard />);
		 expect(container.firstChild).not.toMatchSnapshot();
	});
	it("assert there is 1 header row", () => {
		expect(document.querySelectorAll(".header-row").length).toBe(1);
	});
	it("assert there are 7 rows at all", () => {
		expect(document.querySelectorAll(".ticker-row").length).toBe(7);
	});
	it("assert each data cell is changing", () => {
		expect(document.querySelector(".diff-data").innerHTML).toBe("--");
	});
	
});


