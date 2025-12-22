'use server';

/**
 * @fileOverview This file defines a Genkit flow for recommending AI tools based on user preferences.
 *
 * The flow takes user interests and past activity as input and recommends relevant AI tools.
 * @param {RecommendToolsBasedOnUserPreferencesInput} input - The input to the flow.
 * @returns {Promise<RecommendToolsBasedOnUserPreferencesOutput>} - A promise that resolves with the AI tool recommendations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendToolsBasedOnUserPreferencesInputSchema = z.object({
  interests: z
    .string()
    .describe('A description of the user interests in AI tools.'),
  pastActivity: z
    .string()
    .describe('A description of the user\'s past activity.'),
});
export type RecommendToolsBasedOnUserPreferencesInput = z.infer<typeof RecommendToolsBasedOnUserPreferencesInputSchema>;

const RecommendToolsBasedOnUserPreferencesOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('The AI tool recommendations, listed with descriptions.'),
});
export type RecommendToolsBasedOnUserPreferencesOutput = z.infer<typeof RecommendToolsBasedOnUserPreferencesOutputSchema>;

export async function getRecommendToolsBasedOnUserPreferences(
  input: RecommendToolsBasedOnUserPreferencesInput
): Promise<RecommendToolsBasedOnUserPreferencesOutput> {
  return recommendToolsBasedOnUserPreferencesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendToolsBasedOnUserPreferencesPrompt',
  input: {schema: RecommendToolsBasedOnUserPreferencesInputSchema},
  output: {schema: RecommendToolsBasedOnUserPreferencesOutputSchema},
  prompt: `You are an expert AI tool recommender.\n\n  Based on the user\'s stated interests and past activity, provide a list of AI tools that would be most relevant and useful to them.\n\n  User Interests: {{{interests}}}\n  Past Activity: {{{pastActivity}}}\n\n  Recommendations:\n  `,
});

const recommendToolsBasedOnUserPreferencesFlow = ai.defineFlow(
  {
    name: 'recommendToolsBasedOnUserPreferencesFlow',
    inputSchema: RecommendToolsBasedOnUserPreferencesInputSchema,
    outputSchema: RecommendToolsBasedOnUserPreferencesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
