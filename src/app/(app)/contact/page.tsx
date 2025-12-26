'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Github, 
  Twitter, 
  Facebook,
  MapPin, 
  Phone,
  Globe,
  Clock,
  ExternalLink,
  Sparkles,
  Instagram,
  ArrowRight,
  AlertCircle,
  Info
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const SUPPORT_EMAIL = "tickets@ahsan-ai-hub.p.tawk.email";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you as soon as possible. Thank you!",
    });
    setFormState({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: SUPPORT_EMAIL,
      description: "Reach our support team with any questions or concerns.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      href: `mailto:${SUPPORT_EMAIL}`
    },
    {
      icon: MessageSquare,
      title: "Direct Message",
      value: "@ahsan.ali.wadani",
      description: "Connect on Instagram for quicker casual conversations.",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      href: "https://www.instagram.com/ahsan.ali.wadani"
    },
    {
      icon: Clock,
      title: "Fast Response",
      value: "Available 24/7",
      description: "We typically respond to all inquiries within 24 hours.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/ahsan.ali.wadani?igsh=MzNlNGNkZWQ4Mg==", color: "hover:text-pink-500" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/Ahsan_Ali_12?s=09", color: "hover:text-blue-400" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100091175299202&mibextid=PzaGJu", color: "hover:text-blue-600" },
    { icon: Globe, label: "Website", href: "https://ahsan-tech-hub.blogspot.com/", color: "hover:text-emerald-400" }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-background selection:bg-primary/20">
      <AppHeader title="Contact & Support" />
      
      <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest">
              <Sparkles className="h-3 w-3" />
              Get in Touch
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-medium">
              Have questions, feedback, or found an issue? We're here to help you unlock the full potential of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, idx) => {
                  const Content = (
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={cn("rounded-2xl p-4 transition-transform group-hover:scale-110", info.bg)}>
                          <info.icon className={cn("h-6 w-6", info.color)} />
                        </div>
                        <div className="space-y-1 overflow-hidden">
                          <h3 className="font-bold text-lg text-foreground">{info.title}</h3>
                          <p className="font-semibold text-primary truncate break-all text-sm sm:text-base">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  );

                  return info.href ? (
                    <a key={idx} href={info.href} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                        {Content}
                      </Card>
                    </a>
                  ) : (
                    <Card key={idx} className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                      {Content}
                    </Card>
                  );
                })}
              </div>

              {/* Social Connect */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Connect with us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-2 px-3 py-2.5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm text-xs font-bold text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105",
                        social.color
                      )}
                    >
                      <social.icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card className="border-border/50 bg-card shadow-2xl shadow-primary/5 rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-2xl font-black flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    Fill out the form below and our team will get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                        <Input
                          placeholder="Ahsan AI"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="rounded-xl border-border/60 bg-background/50 h-12 px-4 font-semibold focus-visible:ring-primary/20"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                        <Input
                          type="email"
                          placeholder="hello@ahsan.ai"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="rounded-xl border-border/60 bg-background/50 h-12 px-4 font-semibold focus-visible:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                      <Input
                        placeholder="How can we help you?"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        className="rounded-xl border-border/60 bg-background/50 h-12 px-4 font-semibold focus-visible:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-muted-foreground ml-1">Your Message</label>
                      <Textarea
                        placeholder="Type your message here..."
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="min-h-[160px] rounded-2xl border-border/60 bg-background/50 p-4 font-medium resize-none focus-visible:ring-primary/20"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {loading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        <Send className="mr-2 h-5 w-5" />
                      )}
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Loader2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
