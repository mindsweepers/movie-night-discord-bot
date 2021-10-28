const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true,
};

const movieSchema = mongoose.Schema({
	title: reqString
});

module.exports = mongoose.model('movie', movieSchema);