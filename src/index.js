const { prefix, discordToken } = require('./config.json');
const { SapphireClient, LogLevel } = require('@sapphire/framework');

const client = new SapphireClient({
	defaultPrefix: prefix,
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Info,
	},
});

client.mongoose = require('./lib/mongodb.js');
client.mongoose.init();

client.on('ready', async () => {
	client.logger.info('[+] Bot online and connected to API.');
});

client.login(discordToken);