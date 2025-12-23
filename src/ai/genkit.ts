import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Ensure API key is configured from environment
if (!process.env.GOOGLE_GENAI_API_KEY && !process.env.GEMINI_API_KEY) {
  console.warn('Warning: GOOGLE_GENAI_API_KEY or GEMINI_API_KEY not configured');
}

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
