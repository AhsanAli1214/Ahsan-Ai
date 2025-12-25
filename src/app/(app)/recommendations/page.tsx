import { AppHeader } from '@/components/layout/AppHeader';
import { ChatInterface } from '@/components/recommendations/ChatInterface';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chat | Ahsan Ai Hub',
  description: 'Get personalized AI tool recommendations through a conversation with our AI.',
};

export default async function RecommendationsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const initialPrompt = params?.initialPrompt || '';

  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-background via-background to-background/95">
      <AppHeader title="AI Chat" />
      <div className="flex-1 overflow-hidden">
        <ChatInterface
          initialPrompt={
            Array.isArray(initialPrompt) ? initialPrompt[0] : initialPrompt
          }
        />
      </div>
    </div>
  );
}
