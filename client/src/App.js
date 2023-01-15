import "./App.css";

// import { io } from "socket.io-client";

import GetData from "./services/getTickersData";

import { TickersInfoContainer } from "./components/tickers";

function App() {
	return (
		<div className="App">
			<TickersInfoContainer />
			<GetData />
		</div>
	);
}

export default App;
