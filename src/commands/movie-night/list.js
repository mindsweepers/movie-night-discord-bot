const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const { Command } = require('@sapphire/framework');
const movieSchema = require('../../lib/schemas/movie-schema.js');

module.exports = class BotCommand extends Command {
	constructor(context) {
		super(context, {
			name: 'list',
			aliases: ['list'],
			description: 'List all the current movie submissions.',
			preconditions:[{ name: 'Cooldown', context: {
				delay: 30000,
			} }],
		});
	}

	async messageRun(message, args) {
		var str = "";
		var filter = { };

		// Fetch
		const movies = await movieSchema.find(filter);
		movies.forEach(movie => {
			str += movie.title + "\n";
		});
		
		// Display The List
		const embed = new MessageEmbed()
		.setTitle('List Of Movie Submissions')
		.addFields(
			{
				name: 'Sorted by Queue Order',
				value: str,
				inline: true
			}
		)
		message.channel.send({ embeds: [embed] });
	}
};
