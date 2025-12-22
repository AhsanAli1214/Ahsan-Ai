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
  searchParams?: {
    initialPrompt?: string;
  };
}) {
  // This delay ensures Next.js treats the component as fully dynamic, resolving the searchParams access error.
  await new Promise(resolve => setTimeout(resolve, 0));
  const initialPrompt = searchParams?.initialPrompt;

  return (
    <div className="flex h-full flex-col">
      <AppHeader title="AI Chat" />
      <div className="flex-1 overflow-hidden">
        <ChatInterface initialPrompt={initialPrompt} />
      </div>
    </div>
  );
}
