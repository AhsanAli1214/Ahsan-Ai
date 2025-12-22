import { AppHeader } from '@/components/layout/AppHeader';
import { FavoriteButton } from '@/components/tools/FavoriteButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getToolBySlug, getToolImage } from '@/lib/data';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} | AI Hub Express`,
    description: tool.description,
  };
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  const image = getToolImage(tool);

  return (
    <div className="flex h-full flex-col">
      <AppHeader title={tool.name} />
      <div className="flex-1 overflow-y-auto p-4 md:p-0">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Tools
          </Link>
        </Button>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <CardTitle className="font-headline text-3xl">{tool.name}</CardTitle>
                    <Badge variant="secondary" className="text-sm">{tool.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                    <h2 className="mb-2 font-semibold text-foreground">Description</h2>
                    <p>{tool.longDescription}</p>
                </div>
                <div>
                    <h2 className="mb-2 font-semibold text-foreground">Usage Instructions</h2>
                    <p>{tool.usage}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 md:col-span-1">
            {image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border">
                    <Image
                        src={image.imageUrl}
                        alt={tool.name}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            )}
            <div className="grid gap-2">
              <Button asChild size="lg" className="w-full">
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <FavoriteButton toolId={tool.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
