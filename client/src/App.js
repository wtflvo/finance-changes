import "./App.css";
import { IntervalBtn } from "./components/IntervalForm";
import { TickersDashboard } from "./components/TickersDashboard";
import { Header } from "./components/Header";
import GetData from "./services/getTickersData";

function App() {
	return (
		<div className="App">
			<Header/>
			<TickersDashboard />
			<IntervalBtn/>
			<GetData />
			
		</div>
	);
}

export default App;
