
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, LifeBuoy, Zap, Shield, MessageCircle, Settings, Smartphone, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Ahsan Ai Hub',
  description: 'Frequently Asked Questions about Ahsan Ai Hub.',
};

const FAQData = [
    { 
        q: "What is Ahsan AI Hub?", 
        a: "Ahsan AI Hub is an intelligent AI-powered platform that combines advanced Google Gemini technology with a modern, user-friendly interface. It's designed to help you with writing, coding, learning, brainstorming, content creation, and much more—all in one place." 
    },
    { 
        q: "How do I start using the AI Chat?", 
        a: "Simply navigate to the 'AI Chat' section from the home page or sidebar. Type your question or request in the input box at the bottom and press Enter. The AI will generate a response instantly. You can continue the conversation naturally by asking follow-up questions." 
    },
    { 
        q: "What are Content Tools?", 
        a: "Content Tools are specialized AI features designed for specific tasks like rewriting text, generating summaries, creating marketing copy, brainstorming ideas, and more. Each tool is optimized for its particular use case to help you create high-quality content quickly." 
    },
    { 
        q: "Can I customize how the AI responds?", 
        a: "Yes! In the Settings page, you can choose from multiple personality modes (Friendly, Professional, Creative, Teacher) and adjust the response length (Short, Medium, Long) to match your preferences." 
    },
    { 
        q: "Does the app support audio and translation?", 
        a: "Absolutely! You can use the text-to-speech feature to listen to AI responses in audio format. You can also translate responses into 50+ languages. Both features are accessible directly from each message." 
    },
    { 
        q: "How can I install the app on my device?", 
        a: "Visit the home page and scroll to the 'Install App' section. You can install the app as a native app on mobile and desktop through the PWA (Progressive Web App) button, or download the APK file for direct Android installation." 
    },
    { 
        q: "Is my chat history saved?", 
        a: "Chat history is stored locally on your device for 7 days. This allows you to continue conversations within this period. For privacy reasons, we don't store conversations on our servers. You can clear your history anytime from the Settings page." 
    },
    { 
        q: "Is my data secure and private?", 
        a: "Your privacy is our top priority. We don't store personal chat content on our servers. All conversations remain confidential, and the app is designed with privacy-first principles. You have full control over your data." 
    },
    { 
        q: "Can the AI help with coding?", 
        a: "Yes, the AI can generate, debug, explain, and optimize code in multiple programming languages including Python, JavaScript, Java, C++, Go, Rust, and many others. Perfect for learning or solving coding problems." 
    },
    { 
        q: "What is the Smart Prompts feature?", 
        a: "Smart Prompts are pre-defined conversation starters that help you get started quickly. They include creative ideas, writing prompts, and common questions. Click any prompt to fill your message box and start a conversation." 
    },
    { 
        q: "Can I enable push notifications?", 
        a: "Yes! You can enable push notifications from the home page to stay updated about new features, improvements, and important announcements. Notifications are delivered directly to your device." 
    },
    { 
        q: "Is Ahsan AI Hub free?", 
        a: "Yes, all core features including AI Chat, Content Tools, customization options, and more are completely free. We believe powerful AI should be accessible to everyone." 
    },
    { 
        q: "What should I do if I encounter an issue?", 
        a: "If you experience any problems, visit the Contact page to reach out to the developer, Ahsan Ali. Provide details about the issue, and we'll help you resolve it quickly." 
    },
    { 
        q: "What are future plans for the app?", 
        a: "We're constantly improving! Upcoming features may include advanced chat history with cloud sync, voice input/output, custom AI personas, collaborative features, and an expanded library of specialized AI tools." 
    },
];


export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="flex h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AppHeader title="FAQ" />
      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="mx-auto max-w-4xl space-y-8">
            {/* Hero Section */}
            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-primary/20 p-5">
                    <HelpCircle className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to know about Ahsan AI Hub. Find answers about features, usage, privacy, and more.</p>
            </div>
          
            {/* FAQ Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI Chat</h3>
                    <p className="text-sm text-muted-foreground">Questions about chatting with AI</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Features</h3>
                    <p className="text-sm text-muted-foreground">Learn about all features</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Privacy & Security</h3>
                    <p className="text-sm text-muted-foreground">Your data protection</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-primary/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <Smartphone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Installation</h3>
                    <p className="text-sm text-muted-foreground">Setup on your device</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Accordion */}
            <Card className="border border-primary/20">
                <CardHeader className="pb-6 border-b border-primary/10">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                      Common Questions
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                    {FAQData.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="border-b border-primary/10 last:border-b-0">
                        <AccordionTrigger className="text-left hover:text-primary transition-colors font-semibold text-foreground py-4 text-base md:text-lg">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-base">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="border border-primary/20 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 md:p-12 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="rounded-full bg-primary/20 p-5">
                        <LifeBuoy className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-headline text-2xl md:text-3xl font-semibold text-foreground mb-3">Still have questions?</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                        Can't find what you're looking for? Get in touch with the developer directly through the Contact page.
                    </p>
                    <Button size="lg" asChild className="gap-2">
                        <Link href="/contact">
                          <LifeBuoy className="h-5 w-5" />
                          Contact Developer
                        </Link>
                    </Button>
                </CardContent>
            </Card>

             {/* Footer */}
            <footer className="py-8 text-center">
                <p className="text-muted-foreground">Thank you for choosing Ahsan AI Hub. We're constantly improving to serve you better.</p>
            </footer>
        </div>
      </div>
    </div>
  );
}
