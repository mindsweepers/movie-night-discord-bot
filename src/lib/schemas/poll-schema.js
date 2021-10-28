const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true,
};

const pollSchema = mongoose.Schema({
	title: reqString
});

module.exports = mongoose.model('poll', pollSchema);