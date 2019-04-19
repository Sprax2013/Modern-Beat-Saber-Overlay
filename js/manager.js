function connect() {
    var IP = query.get('ip') || 'localhost';
    var PORT = query.get('port') || 6557;

    var socket = new WebSocket(`ws://${IP}:${PORT}/socket`);

    socket.addEventListener('open', () => {
        console.log('WebSocket opened');
    });

    socket.addEventListener('message', (message) => {
        var data = JSON.parse(message.data);
        var event = events[data.event];

        if (event) {
            event(data.status, data.time);
        }
    });

    socket.addEventListener('close', () => {
        console.log('Failed to connect to Beat Saber, retrying in 3 seconds');
        setTimeout(connect, 3000);
    });
}

connect();