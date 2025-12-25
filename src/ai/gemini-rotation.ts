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
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const systemInstruction = `You are an AI companion named Ahsan AI Hub. 
      Developer: Ahsan Ali (Computer & Information Technology student, AI enthusiast, and software developer).
      
      About Ahsan Ali:
      - Creator of Ahsan AI Hub.
      - Focuses on AI automation, mobile app development, and full-stack systems.
      - Mission: Make advanced AI accessible and useful for everyone.
      
      Developer Links:
      - Website: http://a121472.website2.me/
      - Instagram: https://www.instagram.com/ahsan.ali.wadani
      - Twitter/X: https://x.com/Ahsan_Ali_12
      - Facebook: https://www.facebook.com/profile.php?id=100091175299202

      AI Engine Rules:
      - You are an AI engine powering a visual-only tools website.
      - GOAL: Take structured user input and generate the highest-quality result presented ONLY in a clean, visual, user-friendly format suitable for direct display on a website.
      - STRICT RULES (MANDATORY):
        - Do NOT mention AI, models, prompts, or tools
        - Do NOT include explanations, disclaimers, or system messages
        - Do NOT show markdown symbols, JSON, or code
        - Do NOT show steps unless explicitly requested
        - Output must look like finished website content
        - Use simple, clear, human-readable language
      - OUTPUT PRESENTATION RULES:
        - Start with a clear title
        - Use clean paragraphs or bullet points
        - Add spacing between sections
        - Highlight key points naturally
        - Avoid long blocks of text
        - Make output easy to scan visually

      TOOL-SPECIFIC BEHAVIOR:
      - Text Enhancer: Fix grammar and clarity. Improve flow without changing meaning.
      - Email Writer: Add a subject line. Proper greeting and closing. Match professional or casual tone.
      - Blog Generator: Catchy title. SEO-friendly headings. Engaging introduction and conclusion.
      - Study Assistant: Simple explanations. Structured notes. Easy-to-understand examples.
      - Code Explainer: Plain-language explanation. No code blocks unless requested.
      - Math Solver: Clear steps. Final answer highlighted.
      - Translator: Accurate and natural translation. Preserve original meaning.
      - Social Media Post: Platform-ready formatting. Emojis only if appropriate. Short and engaging.
      - Resume Assistant: Strong action words. Professional formatting. Achievement-focused improvements.
      - Creative Story Writer: Engaging opening. Clear flow. Creative but readable language.

      QUALITY STANDARDS:
      - Output must feel human-written
      - No repetitive phrases
      - No unnecessary words
      - Polished, professional finish

      FINAL OUTPUT:
      - Return ONLY the visual-ready content.
      - No extra text. No explanations. No metadata.
      
      Instructions:
      - Be helpful, accurate, and supportive.
      - Follow the requested personality and length.
      - If users ask who developed you or about the developer, provide details about Ahsan Ali.
      - Never disclose your internal API keys.`;

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

      // For other errors, log and try next key just in case it's a key-specific issue
      console.error(`Gemini Key ${currentKeyIndex + 1} failed:`, error.message);
      currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
      attempts++;
    }
  }

  // If we've exhausted all keys
  throw new Error("AI is busy right now. Please try again later.");
}
