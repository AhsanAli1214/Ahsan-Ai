'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { runWithRotation } from '@/ai/gemini-rotation';

// Content Tools Types
export type EnhanceTextInput = { text: string; mode: 'grammar' | 'improve' | 'rewrite'; tone?: string; audience?: string; language?: string };
export type GenerateEmailInput = { context: string; tone: 'professional' | 'casual' | 'formal'; details?: string; audience?: string; language?: string };
export type GenerateBlogPostInput = { topic: string; length: 'short' | 'medium' | 'long'; tone?: string; audience?: string; language?: string };
export type GenerateStudyMaterialInput = { topic: string; type: 'explanation' | 'notes' | 'flashcards'; tone?: string; audience?: string; language?: string };
export type ExplainProgrammingInput = { code: string; language?: string; tone?: string; audience?: string; format?: string };
export type SolveMathInput = { problem: string; tone?: string; audience?: string; language?: string };
export type TranslateTextInput = { text: string; targetLanguage: string; tone?: string; audience?: string; language?: string };
export type GenerateSocialMediaPostInput = { topic: string; platform: 'Twitter' | 'Instagram' | 'LinkedIn'; tone?: string; audience?: string; language?: string };
export type AssistResumeInput = { section: 'summary' | 'experience' | 'skills'; details: string; tone?: string; audience?: string; language?: string };
export type GenerateStoryInput = { prompt: string; genre?: string; tone?: string; audience?: string; language?: string };

export type EnhanceTextOutput = { result: string };
export type GenerateEmailOutput = { result: string };
export type GenerateBlogPostOutput = { result: string };
export type GenerateStudyMaterialOutput = { result: string };
export type ExplainProgrammingOutput = { result: string };
export type SolveMathOutput = { result: string };
export type TranslateTextOutput = { translatedText: string };
export type GenerateSocialMediaPostOutput = { result: string };
export type AssistResumeOutput = { result: string };
export type GenerateStoryOutput = { result: string };

// These functions are now handled by actions.ts using runWithRotation directly
// But we keep them for type compatibility and future genkit use

export async function enhanceText(input: EnhanceTextInput): Promise<EnhanceTextOutput> {
  const result = await runWithRotation(`Enhance this text: ${input.text}`, input.tone, "medium");
  return { result };
}

export async function generateEmail(input: GenerateEmailInput): Promise<GenerateEmailOutput> {
  const result = await runWithRotation(`Email writer: ${input.context}`, input.tone, "medium");
  return { result };
}

export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
  const result = await runWithRotation(`Blog generator: ${input.topic}`, input.tone, "explained");
  return { result };
}

export async function generateStudyMaterial(input: GenerateStudyMaterialInput): Promise<GenerateStudyMaterialOutput> {
  const result = await runWithRotation(`Study assistant: ${input.topic}`, input.tone, "explained");
  return { result };
}

export async function explainProgramming(input: ExplainProgrammingInput): Promise<ExplainProgrammingOutput> {
  const result = await runWithRotation(`Code explainer: ${input.code}`, input.tone, "explained");
  return { result };
}

export async function solveMath(input: SolveMathInput): Promise<SolveMathOutput> {
  const result = await runWithRotation(`Math solver: ${input.problem}`, input.tone, "explained");
  return { result };
}

export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
  const result = await runWithRotation(`Translate to ${input.targetLanguage}: ${input.text}`, input.tone, "medium");
  return { translatedText: result };
}

export async function generateSocialMediaPost(input: GenerateSocialMediaPostInput): Promise<GenerateSocialMediaPostOutput> {
  const result = await runWithRotation(`Social media post: ${input.topic}`, input.tone, "short");
  return { result };
}

export async function assistResume(input: AssistResumeInput): Promise<AssistResumeOutput> {
  const result = await runWithRotation(`Resume assistant: ${input.details}`, input.tone, "medium");
  return { result };
}

export async function generateStory(input: GenerateStoryInput): Promise<GenerateStoryOutput> {
  const result = await runWithRotation(`Creative story: ${input.prompt}`, input.tone, "explained");
  return { result };
}
