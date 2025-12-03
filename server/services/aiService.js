import { groqConnection } from "../config/aiClient.js";
import { researchTopic } from "./researchService.js";

export async function generateTweetFromLLM(topic) {
  try {
    const context = await researchTopic(topic);

    const systemPrompt = `
You are an accuracy-critical assistant.

HARD RULES:
- You MUST use ONLY the factual information found in "Context".
- If the context does NOT contain an answer, reply: "No reliable data found".
- NEVER guess or invent information.
- NEVER use outdated facts.
- NEVER use your own memory.
- You only produce text based on provided context.
`;

    const userPrompt = `
Context:
${context}

Write a short engaging tweet about: "${topic}" based ONLY on the context above.
`;

    const response = await groqConnection.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 150,
      temperature: 0.4  // lower temp = less hallucination
    });

    return response.choices[0].message.content;
  } catch (err) {
    console.error("LLM error:", err);
    return "❗ AI model failed. Try again later.";
  }
}
