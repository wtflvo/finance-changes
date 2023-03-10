import { io } from "socket.io-client";
import { tickersChangeAsync } from "../redux/slices/tickersSlice";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const socket = io("http://localhost:4000");

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

		socket.on("ticker", (data) => {
			let tickersData = [];
			tickersData = modifyData(data);

			dispatch(tickersChangeAsync(tickersData));
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
