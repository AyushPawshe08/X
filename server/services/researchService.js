import { tavilyConnection } from "../config/tavilyClient.js";

export async function researchTopic(topic) {
  try {
    const result = await tavilyConnection.search({
      query: topic,
      depth: "advanced",   
      max_results: 5,
    });

    return result.results
      .map(r => `Source: ${r.url}\n${r.content}`)
      .join("\n\n");
  } catch (err) {
    console.error("Tavily error:", err);
    return "No reliable data found.";
  }
}
