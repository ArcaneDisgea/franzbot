exports.answer = async client => ({
	title: `TITLE`,
	description: `DESC`,
	color: client.config.EMBED_NORMAL_COLOR,
	footer: {
		"text": client.config.FRANZBOT_VERSION,
	},
});

exports.info = {
	name: "template",
	category: "debug",
	aliases: ["testy"],
};
