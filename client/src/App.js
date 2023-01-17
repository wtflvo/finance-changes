import "./App.css";
import { TickersDashboard } from "./components/TickersDashboard";

import GetData from "./services/getTickersData";

function App() {
	return (
		<div className="App">
			<TickersDashboard />
			<GetData />
		</div>
	);
}

export default App;
