import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

test("renders header", () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const linkElement = screen.getByText("Tickers");
	expect(linkElement).toBeTruthy();
});

test("renders one tickers-info-container", () => {
	render(<Provider store={store}>
    <App />
  </Provider>);
	const linkElement = document.querySelectorAll(".tickers-info-container");
	expect((linkElement).length).toBe(1);
});

test("renders interval form", () => {
	render(<Provider store={store}>
    <App />
  </Provider>);
	const linkElement = document.querySelectorAll(".interval-form");
	expect((linkElement).length).toBe(1);
});
