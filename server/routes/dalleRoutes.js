import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

router.route("/").get((req, res) => {
	res.send("Hello from DALL-E routes!");
});

router.route("/").post(async (req, res) => {
	try {
		const { prompt } = req.body;

		const aiResponse = await openai.images.generate({
			prompt,
			n: 1,
			size: "1024x1024",
			response_format: "b64_json",
		});

		const image = aiResponse.data[0].b64_json;

		res.status(200).json({ photo: image });
	} catch (error) {
		if (error instanceof OpenAI.APIError) {
			console.error(error.status); // e.g. 401
			console.error(error.message); // e.g. The authentication token you passed was invalid...
			console.error(error.code); // e.g. 'invalid_api_key'
			console.error(error.type); // e.g. 'invalid_request_error'
		} else {
			// Non-API error
			console.log(error);
		}
	}
});
export default router;
