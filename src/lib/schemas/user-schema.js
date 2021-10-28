const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true,
};

const reqNumber = {
	type: 'Number',
	required: true,
};

const userSchema = mongoose.Schema({
	_id: reqString,
	username: reqString
});

module.exports = mongoose.model('user', userSchema);