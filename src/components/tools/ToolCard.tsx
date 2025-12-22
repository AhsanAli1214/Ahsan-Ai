'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import type { AiTool } from '@/lib/data';
import { getToolImage } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ToolCard({ tool }: { tool: AiTool }) {
  const image = getToolImage(tool);
  const { user, favorites, toggleFavorite } = useAuth();

  const isFavorited = user ? favorites.includes(tool.id) : false;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (user) {
      toggleFavorite(tool.id);
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          {image && (
            <Link href={`/tools/${tool.slug}`} className="block h-full w-full">
              <Image
                src={image.imageUrl}
                alt={tool.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </Link>
          )}
          {user && (
            <Button
              size="icon"
              variant="secondary"
              className="absolute right-3 top-3 h-8 w-8 rounded-full bg-background/70 backdrop-blur-sm transition-colors hover:bg-background"
              onClick={handleFavoriteClick}
              aria-label="Favorite"
            >
              <Heart className={cn('h-4 w-4', isFavorited && 'fill-destructive text-destructive')} />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="flex items-start justify-between gap-2">
            <CardTitle className="font-headline text-lg">
              <Link href={`/tools/${tool.slug}`} className="hover:text-primary">{tool.name}</Link>
            </CardTitle>
            <Badge variant="outline" className="shrink-0">{tool.category}</Badge>
        </div>
        <CardDescription className="mt-2 line-clamp-2">{tool.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="ghost">
          <Link href={`/tools/${tool.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
