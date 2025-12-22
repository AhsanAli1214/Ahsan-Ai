'use client';

import { ToolCard } from '@/components/tools/ToolCard';
import type { AiTool, ToolCategory } from '@/lib/data';

export function ToolGrid({ allTools, query, category }: { allTools: AiTool[], query: string, category: string }) {
  const filteredTools = allTools.filter((tool) => {
    const matchesQuery = tool.name.toLowerCase().includes(query.toLowerCase()) ||
                         tool.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category ? tool.category === category as ToolCategory : true;
    return matchesQuery && matchesCategory;
  });

  if (filteredTools.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        <p>No tools found. Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-0">
      {filteredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
