const http = require('http');

const dataLengkap = [
    { 
        circuit :'Losail',
        location : 'Qatar',
        Winner:{
            firstName : 'Andrea',
            lastName  : 'Dovizioso',
            country   : 'Italy',
        }
    },
    { 
        circuit :'Autodromo',
        location : 'Argentine',
        Winner:{
            firstName : 'Cal',
            lastName  : 'Cruthchlow',
            country   : 'UK',
        }
    },
    { 
        circuit :'De Jerez',
        location : 'Spain',
        Winner:{
            firstName : 'Valentino',
            lastName  : 'Rossi',
            country   : 'Italy',
        }
    },
    { 
        circuit :'Mugello',
        location : 'Italy',
        Winner:{
            firstName : 'Andrea',
            lastName  : 'Davizioso',
            country   : 'Italy',
        }
    },
];

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        // Menampilkan data secara lengkap
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(dataLengkap));
    } else if (url === '/country') {
        // Menampilkan data berdasarkan pengelompokan negara
        const dataByCountry = dataLengkap.reduce((acc, race) => {
            const { Winner: { country } } = race;
            if (!acc[country]) {
                acc[country] = [];
            }
            acc[country].push(race);
            return acc;
        }, {});
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(dataByCountry));
    } else if (url === '/name') {
        // Menampilkan data berdasarkan pengelompokan nama pemenang
        const dataByName = dataLengkap.reduce((acc, race) => {
            const { Winner: { firstName, lastName } } = race;
            const fullName = `${firstName} ${lastName}`;
            if (!acc[fullName]) {
                acc[fullName] = [];
            }
            acc[fullName].push(race);
            return acc;
        }, {});
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(dataByName));
    } else {
        // Bad Request untuk URL lainnya
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request');
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
