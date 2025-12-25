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

export async function enhanceTextAction(input: any): Promise<ContentToolResult> {
  try {
    const prompt = `Tool: Text Enhancer
Goal: Enhance text with mode ${input.mode}
Tone: ${input.tone}
Audience: ${input.audience}
Language: ${input.language}
Content: ${input.text}`;
    const result = await runWithRotation(prompt, input.tone, "medium");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error enhancing text:', error);
    return { success: false, error: 'Failed to enhance text.' };
  }
}

export async function generateEmailAction(input: any): Promise<ContentToolResult> {
  try {
    const prompt = `Tool: Email Writer
Goal: Generate email
Tone: ${input.tone}
Audience: ${input.audience}
Language: ${input.language}
Context: ${input.context}
Details: ${input.details || 'None'}`;
    const result = await runWithRotation(prompt, input.tone, "medium");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating email:', error);
    return { success: false, error: 'Failed to generate email.' };
  }
}

export async function generateBlogPostAction(input: any): Promise<ContentToolResult> {
  try {
    const prompt = `Tool: Blog Generator
Goal: Generate ${input.length} blog post
Tone: ${input.tone}
Audience: ${input.audience}
Language: ${input.language}
Topic: ${input.topic}`;
    const result = await runWithRotation(prompt, input.tone, "explained");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating blog post:', error);
    return { success: false, error: 'Failed to generate blog post.' };
  }
}

export async function generateSocialMediaPostAction(input: any): Promise<ContentToolResult> {
    try {
        const prompt = `Tool: Social Media Post
Goal: Generate ${input.platform} post
Tone: ${input.tone}
Audience: ${input.audience}
Language: ${input.language}
Topic: ${input.topic}`;
        const result = await runWithRotation(prompt, input.tone, "short");
        return { success: true, data: result };
    } catch (error) {
        console.error('Error generating social media post:', error);
        return { success: false, error: 'Failed to generate social media post.' };
    }
}

export async function assistResumeAction(input: any): Promise<ContentToolResult> {
    try {
        const prompt = `Tool: Resume Assistant
Goal: Improve ${input.section}
Tone: ${input.tone}
Audience: ${input.audience}
Language: ${input.language}
Details: ${input.details}`;
        const result = await runWithRotation(prompt, input.tone, "medium");
        return { success: true, data: result };
    } catch (error) {
        console.error('Error assisting with resume:', error);
        return { success: false, error: 'Failed to assist with resume.' };
    }
}
export async function generateStoryAction(input: any): Promise<ContentToolResult> {
    try {
        const prompt = `Tool: Creative Story Writer
Goal: Generate story
Tone: ${input.tone}
Audience: ${input.audience}
Language: ${input.language}
Prompt: ${input.prompt}`;
        const result = await runWithRotation(prompt, input.tone, "explained");
        return { success: true, data: result };
    } catch (error) {
        console.error('Error generating story:', error);
        return { success: false, error: 'Failed to generate story.' };
    }
}

export async function generateStudyMaterialAction(input: any): Promise<ContentToolResult> {
  try {
    const prompt = `Tool: Study Assistant
Goal: Generate ${input.type}
Tone: ${input.tone || 'professional'}
Audience: ${input.audience || 'General'}
Language: ${input.language || 'English'}
Topic: ${input.topic}`;
    const result = await runWithRotation(prompt, input.tone || 'professional', "explained");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating study material:', error);
    return { success: false, error: 'Failed to generate study material.' };
  }
}

export async function explainProgrammingAction(input: any): Promise<ContentToolResult> {
  try {
    const prompt = `Tool: Code Explainer
Goal: Explain ${input.programmingLanguage || ''} code
Tone: ${input.tone || 'professional'}
Audience: ${input.audience || 'General'}
Language: ${input.language || 'English'}
Code: ${input.code}`;
    const result = await runWithRotation(prompt, input.tone || 'professional', "explained");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error explaining code:', error);
    return { success: false, error: 'Failed to explain code.' };
  }
}

export async function solveMathAction(input: any): Promise<ContentToolResult> {
  try {
    const prompt = `Tool: Math Solver
Goal: Solve math problem
Tone: ${input.tone || 'professional'}
Audience: ${input.audience || 'General'}
Language: ${input.language || 'English'}
Problem: ${input.problem}`;
    const result = await runWithRotation(prompt, input.tone || 'professional', "explained");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error solving math:', error);
    return { success: false, error: 'Failed to solve math problem.' };
  }
}

export async function translateTextAction(input: any): Promise<ContentToolResult> {
  try {
    const prompt = `Tool: Translator
Goal: Translate to ${input.targetLanguage}
Tone: ${input.tone || 'professional'}
Audience: ${input.audience || 'General'}
Language: ${input.language || 'English'}
Text: ${input.text}`;
    const result = await runWithRotation(prompt, input.tone || 'professional', "medium");
    return { success: true, data: result };
  } catch (error) {
    console.error('Error translating text:', error);
    return { success: false, error: 'Failed to translate text.' };
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
