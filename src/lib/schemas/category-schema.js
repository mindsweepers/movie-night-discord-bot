const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true,
};

const categorySchema = mongoose.Schema({
	title: reqString
});

module.exports = mongoose.model('category', categorySchema);