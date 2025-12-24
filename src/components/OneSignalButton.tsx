'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export function OneSignalButton() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    setIsProduction(typeof window !== 'undefined' && window.location.hostname.includes('vercel.app'));
    
    if (typeof window !== 'undefined' && (window as any).OneSignal && isProduction) {
      setTimeout(() => {
        try {
          (window as any).OneSignal.Slidedown.onPromptClose(() => {
            checkSubscriptionStatus();
          });
          checkSubscriptionStatus();
        } catch (e) {
          console.log('OneSignal setup skipped in dev');
        }
      }, 1000);
    }
  }, [isProduction]);

  const checkSubscriptionStatus = async () => {
    if ((window as any).OneSignal && isProduction) {
      try {
        const isSubscribed = await (window as any).OneSignal.User.pushSubscription.optedIn;
        setIsSubscribed(isSubscribed);
      } catch (error) {
        console.error('Error checking subscription status:', error);
      }
    }
  };

  const handleSubscribe = async () => {
    if ((window as any).OneSignal && isProduction) {
      setIsLoading(true);
      try {
        if (!isSubscribed) {
          await (window as any).OneSignal.Slidedown.promptPush();
        }
        await checkSubscriptionStatus();
      } catch (error) {
        console.error('Error triggering subscription prompt:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Push notifications are available on the production website (vercel.app)');
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={isLoading || isSubscribed}
      className={`w-full gap-2 transition-all duration-300 ${
        isSubscribed
          ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20'
          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
      }`}
      size="lg"
    >
      <Bell className="h-5 w-5" />
      {isLoading ? 'Loading...' : isSubscribed ? 'Subscribed ✓' : 'Enable Notifications'}
    </Button>
  );
}
