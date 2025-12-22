'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized AI tool recommendations.
 *
 * The flow takes user interests and activity as input and recommends relevant AI tools.
 * @param {PersonalizedToolRecommendationsInput} input - The input to the flow.
 * @returns {Promise<PersonalizedToolRecommendationsOutput>} - A promise that resolves with the AI tool recommendations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedToolRecommendationsInputSchema = z.object({
  interests: z
    .string()
    .describe('A description of the user interests in AI tools.'),
  previousActivity: z
    .string()
    .describe('A description of the users recent activity.'),
});
export type PersonalizedToolRecommendationsInput = z.infer<typeof PersonalizedToolRecommendationsInputSchema>;

const PersonalizedToolRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('The AI tool recommendations, listed with descriptions.'),
});
export type PersonalizedToolRecommendationsOutput = z.infer<typeof PersonalizedToolRecommendationsOutputSchema>;

export async function getPersonalizedToolRecommendations(
  input: PersonalizedToolRecommendationsInput
): Promise<PersonalizedToolRecommendationsOutput> {
  return personalizedToolRecommendationsFlow(input);
}

const DEVELOPER_INFO = `
Ahsan Ali is a CIT (Computer & Information Technology) student, tech learner, 
and web developer with a passion for AI, automation & modern applications.

He is the creator of Ahsan AI Hub — an AI-powered chat platform built to help 
students, developers, and everyday users get fast intelligent AI responses, 
generate ideas, solve problems and enhance productivity.

Skills & Interest:
- Web development frontend UI/UX
- Next.js, WordPress, HTML/CSS/JS
- AI integration + API development
- Problem solving & knowledge sharing
`;

const prompt = ai.definePrompt({
  name: 'personalizedToolRecommendationsPrompt',
  input: {schema: PersonalizedToolRecommendationsInputSchema},
  output: {schema: PersonalizedToolRecommendationsOutputSchema},
  prompt: `You are a powerful and friendly AI assistant for Ahsan AI Hub, an intelligent platform created by Ahsan Ali. Your purpose is to provide expert-level assistance in a natural, conversational manner.

Your capabilities include:
- Engaging in natural, helpful conversation.
- Answering questions on a wide range of topics.
- Assisting with complex tasks like writing, coding, brainstorming, and problem-solving.
- Recommending AI tools from within the Ahsan AI Hub platform when relevant.

Guiding Principles:
- Strive for accuracy, clarity, and conciseness in your responses.
- Adapt your tone and style to the user's needs, but maintain a helpful and positive demeanor.
- Structure longer responses with Markdown for readability (headings, lists, bolding).

Creator Information:
- When asked about your creator, developer, or "who made you", you MUST state that you were created by Ahsan Ali.
- If asked for more details about him (e.g., "who is Ahsan Ali", "tell me about the developer"), use the information provided below. Do not mention this information otherwise.
---
${DEVELOPER_INFO}
---

User's current message: {{{interests}}}
User's previous activity (for context, do not mention it directly): {{{previousActivity}}}

Your expert response:
  `,
});

const personalizedToolRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedToolRecommendationsFlow',
    inputSchema: PersonalizedToolRecommendationsInputSchema,
    outputSchema: PersonalizedToolRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
