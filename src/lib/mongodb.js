const mongoose = require('mongoose');
const { mongoUrl } = require('../config.json');

module.exports = {
	init: () => {
		const dbOptions = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			autoIndex: false,
			poolSize: 5,
			connectTimeoutMS: 10000,
			family: 4,
		};

		mongoose.connect(mongoUrl, dbOptions);
		mongoose.set('useFindAndModify', false);
		mongoose.Promise = global.Promise;

		mongoose.connection.on('connected', () => {
			console.log('[+] Connected to mongoDB');
		});

		mongoose.connection.on('err', err => {
			console.error(`[-] mongoDB connection error: \n${err.stack}`);
		});

		mongoose.connection.on('disconnected', () => {
			console.warn('[-] Lost connection to mongoDB]');
		});
	},
};