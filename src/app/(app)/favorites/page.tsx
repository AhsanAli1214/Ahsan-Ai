'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { tools } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FavoritesPage() {
  const { user, favorites } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && user === null) {
      router.push('/login');
    }
  }, [user, router, isClient]);

  if (!isClient || !user) {
    // You can show a loading spinner here
    return (
      <div className="flex h-full flex-col">
        <AppHeader title="My Favorites" />
        <div className="flex flex-1 items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const favoriteTools = tools.filter(tool => favorites.includes(tool.id));

  return (
    <div className="flex h-full flex-col">
      <AppHeader title="My Favorites" />
      <div className="flex-1 overflow-y-auto">
        {favoriteTools.length > 0 ? (
          <ToolGrid allTools={favoriteTools} query="" category="" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-semibold">No Favorites Yet</h2>
            <p className="text-muted-foreground">
              You haven't added any tools to your favorites.
            </p>
            <Button asChild>
              <Link href="/">Browse Tools</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
