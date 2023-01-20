import "./App.css";
import { IntervalForm } from "./components/IntervalForm";
import { TickersDashboard } from "./components/TickersDashboard";
import { Header } from "./components/Header";
import GetData from "./services/getTickersData";


function App() {
	return (
		<div className="App">
			<Header/>
			<TickersDashboard />
			<IntervalForm/>
			<GetData />
			
		</div>
	);
}

export default App;
