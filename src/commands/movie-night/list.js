const { Command } = require('@sapphire/framework');
const movieSchema = require('../../lib/schemas/movie-schema.js');

module.exports = class BotCommand extends Command {
	constructor(context) {
		super(context, {
			name: 'list',
			aliases: [''],
			description: 'List all the current movie submissions.',
			preconditions:[{ name: 'Cooldown', context: {
				delay: 30000,
			} }],
		});
	}


	async messageRun(message, args) {
		


	}
};
