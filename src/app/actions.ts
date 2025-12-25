'use server';

import {
  getPersonalizedToolRecommendations,
  type PersonalizedToolRecommendationsInput,
  type PersonalizedToolRecommendationsOutput,
} from '@/ai/flows/personalized-tool-recommendations';
import {
  enhanceText,
  generateEmail,
  generateBlogPost,
  generateStudyMaterial,
  explainProgramming,
  solveMath,
  translateText,
  generateSocialMediaPost,
  assistResume,
  generateStory,
  type EnhanceTextInput,
  type GenerateEmailInput,
  type GenerateBlogPostInput,
  type GenerateStudyMaterialInput,
  type ExplainProgrammingInput,
  type SolveMathInput,
  type TranslateTextInput,
  type GenerateSocialMediaPostInput,
  type AssistResumeInput,
  type GenerateStoryInput,
} from '@/ai/flows/content-tools';
import { textToSpeech, type TextToSpeechInput } from '@/ai/flows/tts';

import { runWithRotation } from '@/ai/gemini-rotation';

// Personalized Recommendations Action
type RecommendationsActionResult =
  | { success: true; data: { recommendations: string } }
  | { success: false; error: string };

export async function getRecommendationsAction(
  input: PersonalizedToolRecommendationsInput
): Promise<RecommendationsActionResult> {
  try {
    const recommendations = await runWithRotation(
      input.interests,
      input.personality,
      input.responseLength
    );
    return { success: true, data: { recommendations } };
  } catch (error: any) {
    console.error('Error getting recommendations:', error);
    return { 
      success: false, 
      error: error.message || 'AI is busy right now. Please try again later.' 
    };
  }
}

// Content Tools Actions
type ContentToolResult = { success: true; data: string } | { success: false; error: string };

export async function enhanceTextAction(input: EnhanceTextInput): Promise<ContentToolResult> {
  try {
    const result = await runWithRotation(`Enhance this text: ${input.text}`, "professional", "medium");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error enhancing text:', error);
    return { success: false, error: 'Failed to enhance text.' };
  }
}

export async function generateEmailAction(input: GenerateEmailInput): Promise<ContentToolResult> {
  try {
    const prompt = `Generate a ${input.tone} email based on this context: ${input.context}. Additional details: ${input.details || 'None'}`;
    const result = await runWithRotation(prompt, "professional", "medium");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating email:', error);
    return { success: false, error: 'Failed to generate email.' };
  }
}

export async function generateBlogPostAction(input: GenerateBlogPostInput): Promise<ContentToolResult> {
  try {
    const prompt = `Generate a ${input.length} blog post about: ${input.topic}`;
    const result = await runWithRotation(prompt, "creative", "explained");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating blog post:', error);
    return { success: false, error: 'Failed to generate blog post.' };
  }
}

export async function generateSocialMediaPostAction(input: GenerateSocialMediaPostInput): Promise<ContentToolResult> {
    try {
        const prompt = `Generate a ${input.platform} post about: ${input.topic}`;
        const result = await runWithRotation(prompt, "creative", "short");
        return { success: true, data: result };
    } catch (error) {
        console.error('Error generating social media post:', error);
        return { success: false, error: 'Failed to generate social media post.' };
    }
}

export async function assistResumeAction(input: AssistResumeInput): Promise<ContentToolResult> {
    try {
        const prompt = `Improve this resume ${input.section}: ${input.details}`;
        const result = await runWithRotation(prompt, "professional", "medium");
        return { success: true, data: result };
    } catch (error) {
        console.error('Error assisting with resume:', error);
        return { success: false, error: 'Failed to assist with resume.' };
    }
}
export async function generateStoryAction(input: GenerateStoryInput): Promise<ContentToolResult> {
    try {
        const prompt = `Write a story about: ${input.prompt}`;
        const result = await runWithRotation(prompt, "creative", "explained");
        return { success: true, data: result };
    } catch (error) {
        console.error('Error generating story:', error);
        return { success: false, error: 'Failed to generate story.' };
    }
}

// Text-to-Speech Action
type TextToSpeechResult = { success: true; data: string } | { success: false; error: string };

export async function textToSpeechAction(input: TextToSpeechInput): Promise<TextToSpeechResult> {
  try {
    const { audio } = await textToSpeech(input);
    return { success: true, data: audio };
  } catch (error) {
    console.error('Error in textToSpeechAction:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during text-to-speech conversion.';
    return { success: false, error: errorMessage };
  }
}
