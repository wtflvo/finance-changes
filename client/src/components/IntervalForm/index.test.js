import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { IntervalForm } from ".";
import { Provider } from "react-redux";
import store from "../../redux/store";

afterEach(cleanup);

test("renders form", () => {
	render(
		<Provider store={store}>
			<IntervalForm />
		</Provider>
	);
	const linkElement = screen.getByText("Confirm & Refresh page");
	expect(linkElement).toBeInTheDocument();
});



test("Simulates selection", () => {
	const { getByTestId, getAllByTestId } = render(
		<Provider store={store}>
			<IntervalForm />
		</Provider>
	);

	
	

	
	let options = getAllByTestId("select-option");
	fireEvent.change(getByTestId("select"), { target: { value: 1000 } });

	expect(options[0].selected).toBeTruthy();
	expect(options[1].selected).toBeFalsy();
	
	
});

