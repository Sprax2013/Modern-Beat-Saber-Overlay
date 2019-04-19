function connect() {
    var IP = query.get('ip') || 'localhost';
    var PORT = query.get('port') || 6557;

    let statusElem = document.getElementById('status');
    statusElem.classList.remove('hidden');
    statusElem.innerHTML = 'Connecting...';

    try {
        var socket = new WebSocket(`ws://${IP}:${PORT}/socket`);

        socket.addEventListener('open', () => {
            console.log('WebSocket opened');

            statusElem.classList.add('hidden');
            statusElem.innerText = 'Connected!';
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

            statusElem.classList.remove('hidden');
            statusElem.innerText = 'Failed to connect to Beat Saber, retrying in 3 seconds';

            setTimeout(() => {
                statusElem.innerText = 'Failed to connect to Beat Saber, retrying in 2 seconds';

                setTimeout(() => {
                    statusElem.innerText = 'Failed to connect to Beat Saber, retrying in 1 second';

                    setTimeout(connect, 1000);
                }, 1000);
            }, 1000);
        });
    } catch (err) {
        console.error(err);

        let errElem = document.getElementById('error');
        errElem.innerHTML = lang.error;
        errElem.classList.remove('hidden');
    }
}

connect();