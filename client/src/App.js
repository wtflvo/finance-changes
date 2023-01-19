import "./App.css";
import { IntervalBtn } from "./components/IntervalForm";
import { TickersDashboard } from "./components/TickersDashboard";

import GetData from "./services/getTickersData";

function App() {
	return (
		<div className="App">
			<TickersDashboard />
			<IntervalBtn/>
			<GetData />
			
		</div>
	);
}

export default App;
