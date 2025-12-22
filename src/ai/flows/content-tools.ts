'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Text Enhancer
const EnhanceTextInputSchema = z.object({
  text: z.string().describe('The text to enhance.'),
  mode: z.enum(['grammar', 'improve', 'rewrite']).describe('The enhancement mode.'),
});
export type EnhanceTextInput = z.infer<typeof EnhanceTextInputSchema>;

const EnhanceTextOutputSchema = z.object({
  result: z.string().describe('The enhanced text.'),
});
export type EnhanceTextOutput = z.infer<typeof EnhanceTextOutputSchema>;

export async function enhanceText(input: EnhanceTextInput): Promise<EnhanceTextOutput> {
  return enhanceTextFlow(input);
}

const enhanceTextFlow = ai.defineFlow(
  {
    name: 'enhanceTextFlow',
    inputSchema: EnhanceTextInputSchema,
    outputSchema: EnhanceTextOutputSchema,
  },
  async ({ text, mode }) => {
    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are a text enhancement AI. Your task is to ${mode} the following text.
- If the mode is 'grammar', correct any grammatical errors, spelling mistakes, and punctuation.
- If the mode is 'improve', enhance the clarity, flow, and vocabulary of the text while preserving the original meaning.
- If the mode is 'rewrite', rewrite the entire text to make it sound more professional and compelling.

Return only the resulting text.

Text:
"""
${text}
"""

Result:`,
      output: {
        schema: z.object({ result: z.string() })
      }
    });

    return output ?? { result: '' };
  }
);


// Email Writer
const GenerateEmailInputSchema = z.object({
    context: z.string().describe("The purpose or context of the email."),
    tone: z.enum(['professional', 'casual', 'formal']).describe("The tone of the email."),
    details: z.string().optional().describe("Any additional details to include."),
});
export type GenerateEmailInput = z.infer<typeof GenerateEmailInputSchema>;

const GenerateEmailOutputSchema = z.object({
    result: z.string().describe("The generated email content."),
});
export type GenerateEmailOutput = z.infer<typeof GenerateEmailOutputSchema>;

export async function generateEmail(input: GenerateEmailInput): Promise<GenerateEmailOutput> {
    return generateEmailFlow(input);
}

const generateEmailFlow = ai.defineFlow(
  {
    name: 'generateEmailFlow',
    inputSchema: GenerateEmailInputSchema,
    outputSchema: GenerateEmailOutputSchema,
  },
  async ({ context, tone, details }) => {
    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are an expert email writing assistant. Write a complete email based on the following requirements. The email should include a subject line and a body.

- Purpose/Context: ${context}
- Tone: ${tone}
${details ? `- Additional Details to include: ${details}` : ''}

Format the output clearly, starting with "Subject:".

Generated Email:`,
      output: {
        schema: z.object({ result: z.string() })
      }
    });
    return output ?? { result: '' };
  }
);


// Blog Post Generator
const GenerateBlogPostInputSchema = z.object({
    topic: z.string().describe("The topic of the blog post."),
    length: z.enum(['short', 'medium', 'long']).describe("The desired length of the blog post."),
});
export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

const GenerateBlogPostOutputSchema = z.object({
    result: z.string().describe("The generated blog post content."),
});
export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;

export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
    return generateBlogPostFlow(input);
}

const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async ({ topic, length }) => {
    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are an expert blog post generator. Write a well-structured, engaging, and SEO-friendly blog post.

Topic: "${topic}"
Length: ${length} (short: ~300 words, medium: ~700 words, long: ~1200 words)

The blog post should include:
1. A catchy and relevant title.
2. An introduction that hooks the reader.
3. A body with clear headings for different sections.
4. A concluding summary.

Format the output using Markdown.

Blog Post:`,
       output: {
        schema: z.object({ result: z.string() })
      }
    });
    return output ?? { result: '' };
  }
);

// Study Assistant
const GenerateStudyMaterialInputSchema = z.object({
    topic: z.string().describe("The topic to generate study materials for."),
    type: z.enum(['explanation', 'notes', 'flashcards']).describe("The type of study material to generate."),
});
export type GenerateStudyMaterialInput = z.infer<typeof GenerateStudyMaterialInputSchema>;

const GenerateStudyMaterialOutputSchema = z.object({
    result: z.string().describe("The generated study material."),
});
export type GenerateStudyMaterialOutput = z.infer<typeof GenerateStudyMaterialOutputSchema>;

export async function generateStudyMaterial(input: GenerateStudyMaterialInput): Promise<GenerateStudyMaterialOutput> {
    return generateStudyMaterialFlow(input);
}

const generateStudyMaterialFlow = ai.defineFlow(
  {
    name: 'generateStudyMaterialFlow',
    inputSchema: GenerateStudyMaterialInputSchema,
    outputSchema: GenerateStudyMaterialOutputSchema,
  },
  async ({ topic, type }) => {
    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are a helpful study assistant. Generate study material for the given topic and format.

Topic: "${topic}"
Format: "${type}"

- If 'explanation', provide a clear and comprehensive explanation of the topic.
- If 'notes', create structured, bulleted notes summarizing the key points.
- If 'flashcards', generate a list of questions and answers in the format "Q: [Question]\nA: [Answer]".

Study Material:`,
       output: {
        schema: z.object({ result: z.string() })
      }
    });
    return output ?? { result: '' };
  }
);


// Code Explainer
const ExplainProgrammingInputSchema = z.object({
    code: z.string().describe("The code snippet to explain."),
    language: z.string().optional().describe("The programming language of the code."),
});
export type ExplainProgrammingInput = z.infer<typeof ExplainProgrammingInputSchema>;

const ExplainProgrammingOutputSchema = z.object({
    result: z.string().describe("The explanation of the code."),
});
export type ExplainProgrammingOutput = z.infer<typeof ExplainProgrammingOutputSchema>;

export async function explainProgramming(input: ExplainProgrammingInput): Promise<ExplainProgrammingOutput> {
    return explainProgrammingFlow(input);
}

const explainProgrammingFlow = ai.defineFlow(
  {
    name: 'explainProgrammingFlow',
    inputSchema: ExplainProgrammingInputSchema,
    outputSchema: ExplainProgrammingOutputSchema,
  },
  async ({ code, language }) => {
    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are an expert code explainer. Provide a clear, line-by-line explanation of the following ${language || ''} code snippet. Explain the purpose, logic, and what each part of the code does.

Code:
\`\`\`${language || ''}
${code}
\`\`\`

Explanation:`,
       output: {
        schema: z.object({ result: z.string() })
      }
    });
    return output ?? { result: '' };
  }
);


// Math Solver
const SolveMathInputSchema = z.object({
    problem: z.string().describe("The math problem to solve."),
});
export type SolveMathInput = z.infer<typeof SolveMathInputSchema>;

const SolveMathOutputSchema = z.object({
    result: z.string().describe("The solution and explanation for the math problem."),
});
export type SolveMathOutput = z.infer<typeof SolveMathOutputSchema>;

export async function solveMath(input: SolveMathInput): Promise<SolveMathOutput> {
    return solveMathFlow(input);
}

const solveMathFlow = ai.defineFlow(
  {
    name: 'solveMathFlow',
    inputSchema: SolveMathInputSchema,
    outputSchema: SolveMathOutputSchema,
  },
  async ({ problem }) => {
    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `You are a math solver AI. Solve the following problem and provide a detailed, step-by-step explanation of how you arrived at the solution.

Problem: ${problem}

Solution:`,
       output: {
        schema: z.object({ result: z.string() })
      }
    });
    return output ?? { result: '' };
  }
);

// Image Generator
const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate an image from.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  image: z.string().describe('The generated image as a data URI.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  return generateImageFlow(input);
}

const generateImageFlow = ai.defineFlow(
  {
    name: 'generateImageFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async ({ prompt }) => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt,
    });
    const url = media.url;
    if (!url) {
      throw new Error('Image generation failed to return a URL.');
    }
    return { image: url };
  }
);
