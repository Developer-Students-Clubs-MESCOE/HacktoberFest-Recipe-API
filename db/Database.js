import config from './config';

const mongoose = require('mongoose');

class Database {
	constructor() {
		console.log("Database Instance Created")
	}

	connect() {
		mongoose.connect(config.mongoURI, {
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true
		})
		mongoose.connection.once('open', () => {
			console.log('MongoDB Connected')
		}).on('error', (err) => {
			console.log('MongoDB Connection Error ' + err)
		})
	}

//	TODO: Add methods for insert, update, delete, read
}

module.exports = new Database();