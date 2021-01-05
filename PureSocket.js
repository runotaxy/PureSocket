class PureSocket {
	constructor(){
		console.log("[ PureSocket.js ] : init..");
	}

	connect(socket_address){
		if( typeof PS_Socket == "undefined" ){
			window.PS_Socket = new WebSocket(socket_address);
			PS_Socket.onopen = ()=>{ this.connection_message(); }
		}else{
			console.log("[ PureSocket.js ] : Socket is already declared");
		}
	}

	connection_message(){
		console.log("[ PureSocket.js ] : Connected to the socket..");
	}

	listen(signal, callback){
		PS_Socket.onmessage = function(data){
      // run callBack function
			callback(data);
		}
	}
}
