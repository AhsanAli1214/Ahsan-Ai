'use server';

import {
  getPersonalizedToolRecommendations,
  type PersonalizedToolRecommendationsInput,
  type PersonalizedToolRecommendationsOutput,
} from '@/ai/flows/personalized-tool-recommendations';

type ActionResult = 
  | { success: true; data: PersonalizedToolRecommendationsOutput }
  | { success: false; error: string };

export async function getRecommendationsAction(input: PersonalizedToolRecommendationsInput): Promise<ActionResult> {
  try {
    const recommendations = await getPersonalizedToolRecommendations(input);
    return { success: true, data: recommendations };
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
