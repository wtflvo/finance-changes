"use strict";
const express = require("express");
const http = require("http");
const io = require("socket.io");
const cors = require("cors");

let FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
	"APPL", // Apple
	"GOOGL", // Alphabet
	"MSFT", // Microsoft
	"AMZN", // Amazon
	"FB", // Facebook
	"TSLA", // Tesla
];

function randomValue(min = 0, max = 1, precision = 0) {
	const random = Math.random() * (max - min) + min;
	return random.toFixed(precision);
}

function utcDate() {
	const now = new Date();
	return new Date(
		now.getUTCFullYear(),
		now.getUTCMonth(),
		now.getUTCDate(),
		now.getUTCHours(),
		now.getUTCMinutes(),
		now.getUTCSeconds()
	);
}

function getQuotes(socket) {
	const quotes = tickers.map((ticker) => ({
		ticker,
		exchange: "NASDAQ",
		price: randomValue(100, 300, 2),
		change: randomValue(0, 200, 2),
		change_percent: randomValue(0, 1, 2),
		dividend: randomValue(0, 1, 2),
		yield: randomValue(0, 2, 2),
		last_trade_time: utcDate(),
	}));

	quotes.push({ interval: FETCH_INTERVAL });

	socket.emit("ticker", quotes);
}

function trackTickers(socket) {
	// run the first time immediately
	getQuotes(socket);

	// every N seconds
	const timer = setInterval(function () {
		getQuotes(socket);
	}, FETCH_INTERVAL);

	socket.on("disconnect", function () {
		clearInterval(timer);
	});
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
	cors: {
		origin: "*",
	},
});

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});
// const contacts = [];
// app.get('/api/contacts', (req, res) => {
//   res.json(contacts);
// });
// app.post('/api/contacts', (req, res) => {
//   const contact = req.body;
//   contacts.push(contact);
//   res.status(201).json(contact);
// });

socketServer.on("connection", (socket) => {
	socket.on("start", () => {
		trackTickers(socket);
	});
	socket.on("data", (data) => {
		if (data === "1000") {
			FETCH_INTERVAL = 1000;
			console.log(`1000`);
		} else if (data === "10000") {
			FETCH_INTERVAL = 10000;
			console.log(`10000`);
		} else {
			FETCH_INTERVAL = 5000;
			console.log(`5000`);
		}
	});
});
// io.on("connection", function (socket) {
// 	console.log("client connected");

// 	socket.on("data", function (data) {
// 		FETCH_INTERVAL = 1000;
// 		console.log(`data received is '${data}'`);
// 	});
// });

// socket.on("data", (data) => {
// 	FETCH_INTERVAL = 1000;
// 	console.log(`${data}`);
// });

// socketServer.on("1000", (socket) => {
// 	socket.on("1000", () => (FETCH_INTERVAL = 1000));
// });

server.listen(PORT, () => {
	console.log(`Streaming service is running on http://localhost:${PORT}`);
});
