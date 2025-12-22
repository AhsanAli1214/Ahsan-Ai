
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, LifeBuoy } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Ahsan Ai Hub',
  description: 'Frequently Asked Questions about Ahsan Ai Hub.',
};

const FAQData = [
    { 
        q: "What is Ahsan Ai Hub?", 
        a: "Ahsan Ai Hub is an intelligent AI-powered platform designed to assist with a wide range of tasks including learning, writing, coding, and creative brainstorming." 
    },
    { 
        q: "How does the AI work?", 
        a: "The platform leverages advanced AI models, including Google's Gemini, to understand user prompts and generate natural, accurate, and context-aware responses instantly." 
    },
    { 
        q: "Is Ahsan Ai Hub free to use?", 
        a: "Yes, the core features of Ahsan Ai Hub are currently available for free. We are committed to providing powerful AI tools that are accessible to everyone." 
    },
    { 
        q: "What kind of questions can I ask the AI?", 
        a: "You can ask almost anything! This includes general knowledge questions, requests for writing assistance (like essays or emails), coding problems, help with learning new topics, and brainstorming creative ideas." 
    },
    { 
        q: "Can the AI write or debug code?", 
        a: "Absolutely. The AI can generate, explain, and improve code snippets in many popular programming languages, including Python, JavaScript, Java, and C++." 
    },
    { 
        q: "Are my conversations saved?", 
        a: "To protect your privacy, conversations are not saved at this time. We are exploring secure, account-based history features for future updates." 
    },
    { 
        q: "Is my data secure?", 
        a: "We prioritize user privacy. The app does not store personal chat content on our servers, ensuring your conversations remain confidential." 
    },
    { 
        q: "How can I provide feedback or contact support?", 
        a: "You can contact the developer, Ahsan Ali, through the social media links available on the 'Contact' page for any feedback, suggestions, or support needs." 
    },
    { 
        q: "What new features are planned?", 
        a: "We are always working on improvements! Upcoming features may include custom AI personalities, cloud-based chat history, voice input, and an expanded library of specialized AI tools." 
    },
];


export default function FaqPage() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="FAQ" />
      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        <div className="mx-auto max-w-3xl space-y-8">
            <div className="rounded-lg bg-accent p-8 text-center text-accent-foreground shadow-md">
                <HelpCircle className="mx-auto h-12 w-12" />
                <h1 className="mt-4 font-headline text-3xl font-bold">Frequently Asked Questions</h1>
                <p className="mt-2 text-accent-foreground/80">Find answers to common questions about Ahsan Ai Hub.</p>
            </div>
          
            <Card>
                <CardHeader>
                    <CardTitle>Top Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                    {FAQData.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="bg-accent/15 text-center">
                <CardContent className="p-8">
                    <LifeBuoy className="mx-auto mb-4 h-10 w-10 text-accent" />
                    <h3 className="font-headline text-xl font-semibold">Still have questions?</h3>
                    <p className="mt-2 text-muted-foreground">
                        If you can't find the answer you're looking for, feel free to reach out to the developer.
                    </p>
                    <Button asChild className="mt-6">
                        <Link href="/contact">Contact Developer</Link>
                    </Button>
                </CardContent>
            </Card>

             {/* Footer */}
            <footer className="py-8 text-center text-sm text-muted-foreground">
                <p>We're constantly improving. Thank you for your support!</p>
            </footer>
        </div>
      </div>
    </div>
  );
}
