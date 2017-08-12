const options = {
    models: './models/**.js',
    adapter: require('k7-sequelize'),
    connectionOptions: {
        database: 'imp',
        username: 'postgres',
        password: 'postgres',
        options: {
        host: '127.0.0.1',
        port: '5432',
        dialect: 'postgres',
        logging: false
        }
    },
    optionsFixtures: {
        path: './data/fixtures/*.json'
    }
};
const k7 = require('k7')(options);

async function migrations () {
    await k7.migration('down')
    await k7.migration('up')
    await k7.seed('down');
    await k7.seed('up');
    await k7.fixtures();
}


migrations();