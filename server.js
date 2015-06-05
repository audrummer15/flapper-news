#!/bin/env node
var net = require('net');

var server = net.createServer(function(socket) {
	var date = new Date();
	var dateTime = date.getFullYear() + '-' +
		('0' + (+date.getMonth() + 1)).slice(-2) + '-' +
		('0' + date.getDate()).slice(-2) + ' ' +
		date.getHours() + ':' +
		date.getMinutes() + '\n';
	socket.end(dateTime);
});

server.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080, process.env.OPENSHIFT_NODEJS_IP);
