const { Command } = require('@sapphire/framework');
const movieSchema = require('../../lib/schemas/movie-schema.js');

module.exports = class BotCommand extends Command {
	constructor(context) {
		super(context, {
			name: 'submission',
			aliases: ['add'],
			description: 'Submit an movie night idea.',
			preconditions:[{ name: 'Cooldown', context: {
				delay: 30000,
			} }],
		});
	}

	async messageRun(message, args) {
		const title = await args.rest('string');
		const newEntry = new movieSchema({
			title: title
		}); newEntry.save().then(this.container.client.logger.info('[+] Saved new movie to database'));


		if (message != null) {
			message.delete();
		}
	}
};
