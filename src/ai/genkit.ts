import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Use Replit AI Integrations for Gemini API access
const apiKey = process.env.AI_INTEGRATIONS_GEMINI_API_KEY || process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY;
const baseUrl = process.env.AI_INTEGRATIONS_GEMINI_BASE_URL;

if (!apiKey) {
  console.warn('Warning: Gemini API key not configured. Please ensure AI_INTEGRATIONS_GEMINI_API_KEY is set.');
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey,
      ...(baseUrl && { baseUrl })
    })
  ],
  model: 'googleai/gemini-2.0-flash',
});
