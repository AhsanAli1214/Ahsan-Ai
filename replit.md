# Ahsan AI Hub

## Overview
Ahsan AI Hub is an AI-powered companion application built with Next.js 14. It provides various AI tools and features including text rewriting, code explanation, idea generation, and question solving.

## Project Structure
- `src/app/` - Next.js App Router pages
  - `(app)/` - Main application routes (home, about, contact, content-tools, etc.)
- `src/components/` - React components
  - `layout/` - Layout components (header, sidebar, navigation)
  - `ui/` - Reusable UI components (shadcn/ui)
  - `recommendations/` - AI chat interface
- `src/ai/` - AI/Genkit flows and configuration
  - `flows/` - Individual AI tool implementations
  - `genkit.ts` - Genkit configuration with Google AI
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions and constants

## Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **UI Components**: shadcn/ui (Radix UI primitives)
- **AI Integration**: Google Genkit with Gemini 2.5 Flash
- **State Management**: React Context
- **Forms**: React Hook Form with Zod validation

## Development
- **Package Manager**: pnpm
- **Port**: 5000 (development)
- **Command**: `pnpm run dev`

## Environment Variables
The application uses Google AI through Genkit. Ensure the following environment variables are configured:
- `GOOGLE_GENAI_API_KEY` - Required for AI features

## Deployment
Configured for Replit Autoscale deployment:
- Build: `pnpm run build`
- Start: `pnpm run start`
