const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "https://sc-media.netlify.app/"
	: [""];

module.exports = { clientURL };
