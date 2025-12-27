'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cloud, Download, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    
    // Check if already installed
    if (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Add a small delay to ensure the event is properly captured
    const timer = setTimeout(() => {
      const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
      };

      const handleAppInstalled = () => {
        setIsInstalled(true);
        setDeferredPrompt(null);
        toast({
          title: '✓ App Installed Successfully!',
          description: 'Ahsan AI Hub is now installed. You can launch it from your home screen or app drawer.',
        });
      };

      if (typeof window !== 'undefined') {
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
          window.removeEventListener('appinstalled', handleAppInstalled);
        };
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [toast]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      toast({
        title: 'Installation Not Available',
        description: 'Your browser may not support PWA installation yet.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
        toast({
          title: '✓ App Installation Started',
          description: 'Ahsan AI Hub will appear on your home screen shortly.',
        });
      } else {
        toast({
          title: 'Installation Cancelled',
          description: 'You can install the app anytime from your browser menu.',
        });
      }
    } catch (error) {
      toast({
        title: 'Installation Error',
        description: 'Please try again or use download APK option.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) {
    return null;
  }

  if (isInstalled) {
    return (
      <Button
        disabled
        size="lg"
        className="w-full bg-emerald-600 text-white shadow-lg py-6 text-base font-semibold rounded-2xl transition-all"
      >
        <Cloud className="mr-2 h-5 w-5" />
        ✓ App Installed Successfully
      </Button>
    );
  }

  return (
    <div className="w-full space-y-3">
      <Button
        onClick={handleInstallClick}
        disabled={isLoading || !deferredPrompt}
        size="lg"
        className={`w-full font-semibold text-base py-6 transition-all duration-300 rounded-2xl flex items-center justify-center gap-2 ${
          !deferredPrompt
            ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
            : 'bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl text-primary-foreground hover:scale-105 active:scale-95'
        }`}
      >
        <Download className="h-5 w-5" />
        {isLoading ? 'Installing...' : 'Install App to Home Screen'}
      </Button>
      
      {!deferredPrompt && (
        <Card className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/50">
          <div className="flex gap-3 text-sm">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
            <div className="text-blue-700 dark:text-blue-300">
              <p className="font-semibold mb-1">How to Install:</p>
              <ul className="space-y-1 text-xs opacity-90">
                <li>• <strong>Chrome/Edge:</strong> Tap menu (⋮) → "Install app"</li>
                <li>• <strong>Safari (iOS):</strong> Tap Share → "Add to Home Screen"</li>
                <li>• <strong>Firefox:</strong> Tap menu → "Install" or use home screen shortcut</li>
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
