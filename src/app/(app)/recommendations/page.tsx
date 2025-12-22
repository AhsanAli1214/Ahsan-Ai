import { AppHeader } from '@/components/layout/AppHeader';
import { RecommendationEngine } from '@/components/recommendations/RecommendationEngine';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Recommendations | AI Hub Express',
  description: 'Get personalized AI tool recommendations based on your needs.',
};

export default function RecommendationsPage() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Get Recommendations" />
      <div className="flex-1 overflow-y-auto p-4 md:p-0">
        <RecommendationEngine />
      </div>
    </div>
  );
}
