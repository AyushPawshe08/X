import Groq from "groq-sdk/index.mjs";
import dotenv from "dotenv";
dotenv.config();

export const groqConnection = new Groq({
    apiKey : process.env.GROQ_API_KEY,
    debug: true
})
