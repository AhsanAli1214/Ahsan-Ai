import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * GEMINI AI MULTI-KEY ROTATION SYSTEM
 * 
 * This service handles automatic rotation across 6 API keys
 * with real-time rate-limit (429) and quota error handling.
 */

const API_KEYS = [
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3,
  process.env.GEMINI_API_KEY_4,
  process.env.GEMINI_API_KEY_5,
  process.env.GEMINI_API_KEY_6,
].filter(Boolean) as string[];

let currentKeyIndex = 0;

export async function runWithRotation(prompt: string, personality: string = "friendly", responseLength: string = "medium") {
  if (API_KEYS.length === 0) {
    console.error("No Gemini API keys found in environment variables.");
    throw new Error("AI is busy right now. Please try again later.");
  }

  // Maximum attempts is the number of keys we have
  const maxAttempts = API_KEYS.length;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const apiKey = API_KEYS[currentKeyIndex];
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const systemInstruction = `You are Ahsan AI Hub, a professional and intelligent AI companion.
      Developer: Ahsan Ali (CIT student, AI enthusiast, software developer).
      
      Developer Links:
      - Website: http://a121472.website2.me/
      - Instagram: https://www.instagram.com/ahsan.ali.wadani
      - Twitter/X: https://x.com/Ahsan_Ali_12
      - Facebook: https://www.facebook.com/profile.php?id=100091175299202

      AI Engine Rules (MANDATORY):
      - You are the core AI engine for the Ahsan AI Hub platform.
      - GOAL: Provide clean, high-quality, professional output.
      - STRICT RULES:
        - Do NOT mention AI models or system technicalities.
        - Do NOT include markdown symbols (like \`\`\`json) unless requested.
        - Output must be finished, polished content.
        - If asked about your developer, talk about Ahsan Ali.`;

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }] }],
        generationConfig: {
          maxOutputTokens: responseLength === "short" ? 250 : responseLength === "medium" ? 800 : 2048,
          temperature: 0.7,
        },
      });

      const response = await result.response;
      const text = response.text();

      if (!text) throw new Error("Empty response from Gemini");

      return text;

    } catch (error: any) {
      console.error(`Gemini Key ${currentKeyIndex + 1} failed:`, error.message);
      
      const status = error?.status || error?.response?.status;
      const message = error?.message?.toLowerCase() || "";

      // Check for rate limit (429) or quota errors
      const isRateLimit = status === 429 || message.includes("429") || message.includes("rate limit") || message.includes("quota");

      if (isRateLimit) {
        console.warn(`Gemini Key ${currentKeyIndex + 1} rate limited. Rotating to next key...`);
        currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
        attempts++;
        continue; // Retry with next key
      }

      // If it's a "Failed Precondition" error (like missing API key), try next key too
      if (message.includes("precondition") || message.includes("api key") || message.includes("not found")) {
        currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
        attempts++;
        continue;
      }

      // For other critical errors, don't just fail, try next key
      currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
      attempts++;
    }
  }

  // If we've exhausted all keys
  throw new Error("AI is busy right now. Please try again later.");
}
