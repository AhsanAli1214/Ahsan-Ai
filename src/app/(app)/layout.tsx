import React from 'react';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { BottomNav } from '@/components/layout/BottomNav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="md:flex">
        <AppSidebar />
        <main className="flex-1 bg-background pb-20 md:pb-0 md:p-4 lg:p-6">{children}</main>
        <BottomNav />
      </div>
    </SidebarProvider>
  );
}
