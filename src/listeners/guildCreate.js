const { Listener } = require('@sapphire/framework');
const userSchema = require('../lib/schemas/user-schema.js');

module.exports = class joinEvent extends Listener {
	constructor(context) {
		super(context, {
			once: false,
			event: 'guildCreate',
		});
	}

	async run(guild) {
		guild.members.fetch().then(members => {
			members.forEach(async member => {
				const existCheck = await userSchema.findById(member.id);
				if (existCheck != null) {
					this.container.client.logger.warn('[-] Something that already exists tried to be saved to the database');
					return;
				}
				else {
					const newEntry = new userSchema({
						_id: member.id,
						username: member.user.username
					}); newEntry.save().then(this.container.client.logger.info('[+] Saved new entry to database'));
				}
			});
		});
	}
};