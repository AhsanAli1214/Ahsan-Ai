import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Code, Image as ImageIcon, PenSquare, Zap } from 'lucide-react';
import type React from 'react';

export type ToolCategory = 'Content Creation' | 'Image Generation' | 'Productivity' | 'Development';

export type AiTool = {
  id: string;
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  longDescription: string;
  usage: string;
  link: string;
  imageId: string;
};

export const categories: { name: ToolCategory; icon: React.ComponentType<{ className?: string }> }[] = [
  { name: 'Content Creation', icon: PenSquare },
  { name: 'Image Generation', icon: ImageIcon },
  { name: 'Productivity', icon: Zap },
  { name: 'Development', icon: Code },
];

export const tools: AiTool[] = [
  {
    id: '1',
    slug: 'writer-ai',
    name: 'Writer AI',
    category: 'Content Creation',
    description: 'Generate high-quality articles, blog posts, and marketing copy in seconds.',
    longDescription: 'Writer AI is a powerful content generation tool that leverages advanced language models to help you create compelling written content. Whether you need a blog post, a social media update, or website copy, Writer AI can provide a polished draft in a fraction of the time.',
    usage: 'Simply provide a topic or a brief outline, and Writer AI will generate a full-length article. You can then edit and refine the output to match your brand\'s voice.',
    link: '#',
    imageId: 'tool-writer-ai',
  },
  {
    id: '2',
    slug: 'artisan-ai',
    name: 'Artisan AI',
    category: 'Image Generation',
    description: 'Create stunning, unique images and artwork from simple text prompts.',
    longDescription: 'Artisan AI transforms your textual ideas into visual masterpieces. Using state-of-the-art diffusion models, it can generate a wide variety of styles, from photorealistic images to abstract art. It\'s perfect for artists, designers, and marketers.',
    usage: 'Describe the image you want to create in the text prompt. Be as descriptive as possible, including style, color, and composition, to get the best results.',
    link: '#',
    imageId: 'tool-artisan-ai',
  },
  {
    id: '3',
    slug: 'code-buddy',
    name: 'Code Buddy',
    category: 'Development',
    description: 'Your AI pair programmer for faster, more efficient coding and debugging.',
    longDescription: 'Code Buddy integrates with your favorite IDE to provide real-time code suggestions, bug detection, and even entire function generation. It understands context and helps you write cleaner, more maintainable code.',
    usage: 'Install the Code Buddy plugin for your IDE. Start typing, and it will offer autocompletions. You can also highlight code to ask for explanations, refactoring, or debugging help.',
    link: '#',
    imageId: 'tool-code-buddy',
  },
  {
    id: '4',
    slug: 'taskmaster-ai',
    name: 'TaskMaster AI',
    category: 'Productivity',
    description: 'Organize your life and work with an intelligent to-do list and project manager.',
    longDescription: 'TaskMaster AI goes beyond a simple to-do list. It helps you prioritize tasks, estimate completion times, and break down large projects into manageable steps. It learns your work habits to provide personalized productivity recommendations.',
    usage: 'Add your tasks and projects. Let TaskMaster AI organize them by priority and due date. Check your daily summary for a clear plan of what to work on next.',
    link: '#',
    imageId: 'tool-taskmaster',
  },
  {
    id: '5',
    slug: 'story-weaver',
    name: 'Story Weaver',
    category: 'Content Creation',
    description: 'Collaborate with an AI to write compelling stories, scripts, and narratives.',
    longDescription: 'Story Weaver is a creative partner for writers. It can help you brainstorm plot points, develop characters, and overcome writer\'s block by suggesting what could happen next in your story.',
    usage: 'Start writing your story. When you get stuck, ask Story Weaver for ideas, character descriptions, or dialogue options. You are always in control of the narrative.',
    link: '#',
    imageId: 'tool-story-weaver',
  },
  {
    id: '6',
    slug: 'pixel-perfect',
    name: 'Pixel Perfect',
    category: 'Image Generation',
    description: 'Upscale and enhance low-resolution images without losing quality.',
    longDescription: 'Pixel Perfect uses AI to intelligently add detail to your images, allowing you to increase their resolution for print or high-quality digital display. It effectively removes noise and sharpens details for a clean result.',
    usage: 'Upload your low-resolution image. Choose the desired upscaling factor (e.g., 2x, 4x). The AI will process the image and provide a high-resolution version for download.',
    link: '#',
    imageId: 'tool-pixel-perfect',
  },
  {
    id: '7',
    slug: 'dev-deploy',
    name: 'DevDeploy AI',
    category: 'Development',
    description: 'Automate your CI/CD pipeline and deployments with smart AI analysis.',
    longDescription: 'DevDeploy AI analyzes your codebase and suggests optimal build configurations and deployment strategies. It can predict potential integration issues before they happen, saving you time and resources.',
    usage: 'Connect DevDeploy AI to your Git repository. It will automatically analyze new pull requests and provide feedback on your CI configuration file.',
    link: '#',
    imageId: 'tool-dev-deploy',
  },
  {
    id: '8',
    slug: 'focus-flow',
    name: 'Focus Flow',
    category: 'Productivity',
    description: 'Eliminate distractions and optimize your work sessions with an AI coach.',
    longDescription: 'Focus Flow helps you enter a state of deep work. It can block distracting websites, manage notifications, and play focus-enhancing soundscapes. It also tracks your work patterns and provides insights on how to improve your focus over time.',
    usage: 'Start a focus session and define your goal for that session. Focus Flow will create a protected environment for you to work in. Review your session analytics afterwards.',
    link: '#',
    imageId: 'tool-focus-flow',
  },
];

export const getToolBySlug = (slug: string): AiTool | undefined => {
  return tools.find((tool) => tool.slug === slug);
};

export const getToolImage = (tool: AiTool): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === tool.imageId);
};
