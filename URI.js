const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "http://localhost:3003"
	: ["https://sc-media.netlify.app/", "https://fb-clone-frontend.vercel.app"];

module.exports = { clientURL };
