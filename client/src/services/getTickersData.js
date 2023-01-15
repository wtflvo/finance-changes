import { io } from "socket.io-client";
import { tickersChangeAsync } from "../features/tickers/tickersSlice";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const socket = io("http://localhost:4000");
// console.log(socket.id); // undefined
function modifyData(data) {
	return data.map((tickerObj) => {
		for (let elem in tickerObj) {
			elem = Number(elem);
		}
		return tickerObj;
	});
}

function GetData() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const dispatch = useDispatch();

	useEffect(() => {
		socket.on("connect", () => {
			setIsConnected(true);
			socket.emit("start");
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});

		socket.on("ticker", async (data) => {
			let tickersData = [];
			tickersData = modifyData(data);

			dispatch(tickersChangeAsync({ prices: tickersData, case: "all" }));

			console.log(data, "arg1");
		});

		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("ticker");
		};
	}, []);

	return (
		<div>
			<p>Connected: {"" + isConnected}</p>
		</div>
	);
}

export default GetData;


// const dispatch = useDispatch();
// const selectPrev = useSelector(selectPrevTicker);
// const selectCur = useSelector(selectCurTicker);

// [
//     {
//         "ticker": "AAPL",
//         "exchange": "NASDAQ",
//         "price": "292.71",
//         "change": "58.90",
//         "change_percent": "0.48",
//         "dividend": "0.62",
//         "yield": "1.91",
//         "last_trade_time": "2023-01-13T09:39:33.000Z"
//     },
//     {
//         "ticker": "GOOGL",
//         "exchange": "NASDAQ",
//         "price": "153.28",
//         "change": "139.58",
//         "change_percent": "0.02",
//         "dividend": "0.25",
//         "yield": "0.17",
//         "last_trade_time": "2023-01-13T09:39:33.000Z"
//     },
//     {
//         "ticker": "MSFT",
//         "exchange": "NASDAQ",
//         "price": "119.26",
//         "change": "167.87",
//         "change_percent": "0.84",
//         "dividend": "0.96",
//         "yield": "1.10",
//         "last_trade_time": "2023-01-13T09:39:33.000Z"
//     },
//     {
//         "ticker": "AMZN",
//         "exchange": "NASDAQ",
//         "price": "183.83",
//         "change": "29.93",
//         "change_percent": "0.67",
//         "dividend": "0.23",
//         "yield": "0.00",
//         "last_trade_time": "2023-01-13T09:39:33.000Z"
//     },
//     {
//         "ticker": "FB",
//         "exchange": "NASDAQ",
//         "price": "289.42",
//         "change": "135.99",
//         "change_percent": "0.84",
//         "dividend": "0.25",
//         "yield": "1.16",
//         "last_trade_time": "2023-01-13T09:39:33.000Z"
//     },
//     {
//         "ticker": "TSLA",
//         "exchange": "NASDAQ",
//         "price": "181.70",
//         "change": "113.30",
//         "change_percent": "0.29",
//         "dividend": "0.60",
//         "yield": "0.77",
//         "last_trade_time": "2023-01-13T09:39:33.000Z"
//     }
// ]
