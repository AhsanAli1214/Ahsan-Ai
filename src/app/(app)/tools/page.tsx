
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { tools, getToolImage, type AiTool } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Tools | Ahsan Ai Hub',
  description: 'Explore all the AI-powered tools available in Ahsan Ai Hub.',
};

function ToolCard({ tool }: { tool: AiTool }) {
  const image = getToolImage(tool);
  return (
    <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={tool.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
           <div className="absolute bottom-0 left-0 p-4">
             <h3 className="font-headline text-2xl font-bold text-white">{tool.name}</h3>
           </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-4">
        <p className="flex-1 text-muted-foreground">{tool.description}</p>
        <Button asChild className="mt-4 w-full">
          <Link href={tool.link}>
            Open Tool <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function AllToolsPage() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="All Tools" />
      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold">Explore Our AI Toolkit</h1>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              A curated collection of powerful AI tools to help you with content creation, productivity, development, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
