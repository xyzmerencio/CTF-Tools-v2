import net from 'net'

function portScan(ip) {
    if (!ip) {
        console.log("PortScan zeroUm");
        console.log("Uso: node portscan.js <IP>");
    } else {
        const topPorts = [80, 443, 53, 21, 22, 25, 110, 143, 3389, 3306, 8080, 587, 995, 993, 1723, 123, 161, 162, 69, 389, 636, 546, 547, 179, 445, 137, 138, 139, 989, 990, 1194, 1701, 4500, 514, 515, 161, 162, 69, 67, 68, 514, 123, 137, 138, 139, 389, 636, 989, 990, 123, 500, 4500, 1701, 554, 5000, 5060, 5061, 69, 67, 68, 67, 68, 123, 161, 162, 53, 161, 162, 69, 123, 427, 123, 69, 37, 427, 161, 162, 69, 427, 67, 68, 37, 53, 135, 69, 53, 67, 68, 53, 67, 68, 427, 68, 137];

        topPorts.forEach(port => {
            const socket = new net.Socket();
            socket.setTimeout(2000);

            socket.on('connect', () => {
                console.log(`Porta ${port} Aberta`);
                socket.destroy();
            });

            socket.on('timeout', () => {
                console.log(`Porta ${port} Fechada`);
                socket.destroy();
            });

            socket.on('error', () => {
                console.log(`Porta ${port} Fechada`);
                socket.destroy();
            });

            socket.connect(port, ip);
        });
    }
}

const ip = process.argv[2];
portScan(ip);
