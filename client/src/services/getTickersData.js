import { io } from "socket.io-client";
import { tickersChangeAsync } from "../redux/tickersSlice";

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
			socket.emit("1000");
		});

		socket.on("disconnect", () => {
			setIsConnected(false);
		});

		socket.on("ticker", (data) => {
			let tickersData = [];
			tickersData = modifyData(data);

			dispatch(tickersChangeAsync({ prices: tickersData, case: "all" }));
			socket.emit("1000");
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
