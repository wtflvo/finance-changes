import "./App.css";
import { IntervalForm } from "./components/IntervalForm";
import { TickersDashboard } from "./components/TickersDashboard";
import { Header } from "./components/Header";
import GetData from "./services/getTickersData";

import { WatchingGroup } from "./components/WatchingGroup";


function App() {
	return (
		<div className="App">
			<Header/>
			<WatchingGroup/>
			<TickersDashboard />
			<IntervalForm/>
			
			<GetData />
			
		</div>
	);
}

export default App;
