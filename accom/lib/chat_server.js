var socketio = require('socket.io'),
	io,
	guestNumber = 1,
	nickNames = [],
	namesUsed = [],
	currentRoom = {};

exports.listen = function (server) {
	// 启动socket
	io = socketio.listen(server);
	io.set('log level', 1);
	// 连接
	io.sockets.on('connection', function (socket) {
		gusetNumber = assignGuestName(socket, guestNumber,
			nickNames, namesUsed);
		// 加入聊天室
		joinRoom(socket, 'Lobby');
		// 聊天室创建和变更
		handleMessageBroadcasting(socket, nickNames);
		handleNameChangeAttempts(socket, nickNames, namesUsed);
		handleRoomJoining(socket);
		// 聊天室列表
		socket.on('rooms', function () {
			socket.emit('rooms', io.sockets.manager.rooms);
		});
		// 断开聊天室
		handleClientDisconnection(socket, nickNames, namesUsed);
	});
};
