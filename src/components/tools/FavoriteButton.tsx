'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function FavoriteButton({ toolId }: { toolId: string }) {
  const { user, favorites, toggleFavorite } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <Button
        size="lg"
        variant="outline"
        className="w-full"
        onClick={() => router.push('/login')}
      >
        <Heart className="mr-2 h-4 w-4" />
        Add to Favorites
      </Button>
    );
  }

  const isFavorited = favorites.includes(toolId);

  return (
    <Button
      size="lg"
      variant="outline"
      className="w-full"
      onClick={() => toggleFavorite(toolId)}
    >
      <Heart
        className={cn('mr-2 h-4 w-4 transition-colors', isFavorited && 'fill-destructive text-destructive')}
      />
      {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
    </Button>
  );
}
