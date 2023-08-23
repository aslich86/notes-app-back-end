const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['http://localhost:5000'], // Ganti dengan URL aplikasi klien Anda
        headers: ['Authorization'], // Jika Anda memerlukan header lain, tambahkan di sini
        credentials: true, // Jika Anda menggunakan cookies atau autentikasi dengan kredensial
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
