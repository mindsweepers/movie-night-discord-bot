const { Listener } = require('@sapphire/framework');
const userSchema = require('../lib/schemas/user-schema.js');

module.exports = class messageSend extends Listener {
	constructor(context) {
		super(context, {
			once: false,
			event: 'messageCreate',
		});
	}

	async run(message) {
		const existCheck = await userSchema.findById(message.author.id);
		// eslint-disable-next-line no-empty
		if (existCheck != null) {
		}
		else {
			const newEntry = new userSchema({
				_id: message.author.id,
				username: message.author.username
			}); newEntry.save().then(this.container.client.logger.info('[+] Saved new entry to database'));
		}
	}
};