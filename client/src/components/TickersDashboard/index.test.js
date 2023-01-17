import { render, screen, fireEvent } from "@testing-library/react";

import TickersDashboard from ".";

import React from "react";

describe("<TickersDashboard /> spec", () => {
	it("renders the component", () => {
		const container = render(<TickersDashboard />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("assert there are 6 regions", () => {
		expect(document.querySelectorAll(".map-region").length).toBe(6);
	});
	it("assert there are 12 region items", () => {
		expect(document.querySelectorAll(".region-item").length).toBe(12);
	});
	it("assert connect button renders the correct label", () => {
		expect(document.querySelector(".connect-btn").innerHTML).toBe("Connect");
	});
	it("assert the first item link to be /somelink", () => {
		const allAgent = document.querySelector(".region-item:first-child a");
		expect(allAgent.getAttribute("href")).toBe("/somelink?id=123&name=link");
	});
});

test("renders header row", () => {
	const linkElement = screen.getByText(/Companies/);
	expect(linkElement).toBeInTheDocument();
});
