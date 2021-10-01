exports.answer = async client => ({
	title: `XL Requires these redistributables`,
	description: `Please make sure you've installed DirectX, .Net 4.8, and VS2015-2019 packages. More info `
		+ `[HERE](https://goatcorp.github.io/faq/xl_troubleshooting#q-how-can-i-fix-crashes-on-startup)`,
	color: client.config.EMBED_NORMAL_COLOR,
	footer: {
		"text": client.config.FRANZBOT_VERSION,
	},
});

exports.info = {
	name: "test",
	category: "help",
	aliases: [
		"redists",
		"runtime",
		"runtimes",
		"redistributable",
		"redistributables",
		"vcredist",
		"dotnet",
		"dotnet48",
		"net48",
		"net4.8",
		".net4.8",
	],
};
