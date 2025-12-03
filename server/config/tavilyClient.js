import { TavilyClient } from "tavily";
import dotenv from "dotenv";

dotenv.config();

export const tavilyConnection = () =>{
    apiKey : process.env.TAVILY_API_KEY
}
