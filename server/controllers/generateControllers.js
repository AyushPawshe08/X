import { generateTweetFromLLM } from "../services/aiService.js";

export async function testGenerateHandler(req, res) {
  try {
    const { topic } = req.body;

    if (!topic || topic.trim() === "") {
      return res.status(400).json({ error: "Topic is required" });
    }

    // Pass topic directly — NOT a custom prompt
    const tweet = await generateTweetFromLLM(topic);

    console.log("generateTweetFromLLM returned:", tweet);

    return res.json({ tweet });
  } catch (err) {
    console.error("Controller error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
