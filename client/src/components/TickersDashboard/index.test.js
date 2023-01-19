import { render, screen, fireEvent } from "@testing-library/react";

import { TickersDashboard } from ".";

import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("<TickersDashboard /> spec", () => {
	it("renders the component", () => {
		const container = render(
			<Provider store={store}>
				<TickersDashboard />
			</Provider>
		);
		expect(container).toBeTruthy();

		//  expect(getByText("HELLO")).toBeTruthy();
	});
	it("assert there is 1 header row", () => {
		render(
			<Provider store={store}>
				<TickersDashboard />
			</Provider>
		);
		expect(document.querySelectorAll(".header-row-container").length).toBe(1);
	});
	it("assert there are 7 rows at all", () => {
		render(
			<Provider store={store}>
				<TickersDashboard />
			</Provider>
		);
		expect(document.querySelectorAll(".ticker-row").length).toBe(7);
	});
	it("render 30 different data cells", () => {
		render(
			<Provider store={store}>
				<TickersDashboard />
			</Provider>
		);
		expect(document.querySelectorAll(".diff-data").length).toBe(30);
	});
});
