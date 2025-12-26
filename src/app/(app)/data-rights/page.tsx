'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Shield, Download, Trash2, Edit3, Eye, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function DataRightsPage() {
  const lastUpdated = 'December 2024';

  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'View all personal data we hold about you',
      details: `You have the right to know what information we collect and process about you. This includes:
- Account information and profile data
- Usage history and analytics
- Communications and support tickets
- Payment and billing records

Request your data by emailing: access@ahsan-ai-hub.com
We will provide your data within 30 days.`
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'Download and transfer your data to another service',
      details: `You can obtain a copy of your personal data in a structured, commonly-used format. You can then transfer this data to another service.

What you can download:
- Profile information
- Your activity history
- AI content you created
- Preference settings
- Communication records

Available formats: JSON, CSV, PDF
Request via Settings > Data Export or email: export@ahsan-ai-hub.com`
    },
    {
      icon: Edit3,
      title: 'Right to Correction',
      description: 'Correct inaccurate or incomplete information',
      details: `You can update and correct your personal information anytime. This includes:
- Profile details (name, email, bio)
- Preferences and settings
- Contact information
- Account recovery methods

Make corrections in Settings > Profile
For assistance: support@ahsan-ai-hub.com`
    },
    {
      icon: Trash2,
      title: 'Right to Deletion',
      description: 'Request removal of your personal data',
      details: `You have the right to request deletion of your personal data (subject to legal exceptions). Upon deletion:
- Account is permanently closed
- Personal data is removed (within 90 days)
- Aggregated/anonymized data may be retained
- Some data retained for legal compliance

Request deletion in Settings > Delete Account
Or email: deletion@ahsan-ai-hub.com`
    },
    {
      icon: Shield,
      title: 'Right to Restrict Processing',
      description: 'Limit how your data is used',
      details: `You can request that we limit processing of your data in certain cases:
- Dispute accuracy of your data
- Processing is unlawful but you don't want deletion
- You need the data for legal claims
- You object to processing pending verification

During restriction:
- We store your data but don't actively process it
- Marketing communications stop
- Essential services continue (like support)

Request via: privacy@ahsan-ai-hub.com`
    },
    {
      icon: Share2,
      title: 'Right to Object',
      description: 'Opt-out of certain data processing',
      details: `You can object to certain types of data processing:
- Marketing and promotional emails
- Analytics and profiling
- Automated decision-making
- Third-party data sharing

Opt-out options:
- Settings > Preferences > Communications
- Click "Unsubscribe" in any marketing email
- Contact: optout@ahsan-ai-hub.com

We honor opt-out requests within 10 days.`
    }
  ];

  const procedures = [
    {
      step: 1,
      title: 'Submit Your Request',
      details: 'Email your request to the appropriate address or use Settings. Include "Data Rights Request" in subject line.'
    },
    {
      step: 2,
      title: 'Verification',
      details: 'We verify your identity for security. You may be asked to confirm your email or provide additional details.'
    },
    {
      step: 3,
      title: 'Processing',
      details: 'We process your request and prepare the response. Standard requests take 15-30 days.'
    },
    {
      step: 4,
      title: 'Response',
      details: 'We deliver your response via email or through your account. Contact us if you have questions.'
    },
    {
      step: 5,
      title: 'Confirmation',
      details: 'For deletions/corrections, we send confirmation when the request is complete.'
    }
  ];

  const jurisdictions = [
    {
      region: 'GDPR (EU/UK)',
      description: 'General Data Protection Regulation',
      rights: ['Right to access', 'Right to erasure', 'Right to data portability', 'Right to object', 'Right to restrict processing']
    },
    {
      region: 'CCPA (California)',
      description: 'California Consumer Privacy Act',
      rights: ['Right to know', 'Right to delete', 'Right to opt-out of sale', 'Right to correct', 'Right to non-discrimination']
    },
    {
      region: 'LGPD (Brazil)',
      description: 'Lei Geral de Proteção de Dados',
      rights: ['Right to access', 'Right to correction', 'Right to deletion', 'Right to data portability', 'Right to object']
    },
    {
      region: 'Standard',
      description: 'All Other Regions',
      rights: ['Right to access', 'Right to correction', 'Request deletion', 'Data portability (where available)', 'Marketing opt-out']
    }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-background selection:bg-primary/20">
      <AppHeader title="Your Data Rights" />
      
      <main className="flex-1 overflow-y-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 space-y-6">
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
              <ArrowLeft className="h-4 w-4" />
              Back to Contact
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight text-foreground">Your Data Rights</h1>
              <p className="text-lg text-muted-foreground">
                We believe you should have full control over your personal data. Here's what rights you have and how to exercise them.
              </p>
            </div>

            {/* Last Updated */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground/60 pt-4">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Your Rights Grid */}
          <div className="mb-16 space-y-4">
            <h2 className="text-2xl font-black text-foreground mb-6">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rights.map((right, idx) => (
                <Card key={idx} className="border-border/50 bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <right.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-foreground text-lg">{right.title}</h3>
                        <p className="text-xs text-muted-foreground/60 mt-1">{right.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                      {right.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How to Exercise Rights */}
          <div className="mb-16 space-y-6">
            <h2 className="text-2xl font-black text-foreground">How to Exercise Your Rights</h2>
            <div className="space-y-4">
              {procedures.map((proc) => (
                <Card key={proc.step} className="border-border/50 bg-card/40 backdrop-blur-md rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex gap-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 flex-shrink-0">
                      <span className="font-black text-primary text-lg">{proc.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-foreground mb-2">{proc.title}</h3>
                      <p className="text-sm text-muted-foreground">{proc.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mb-16 space-y-6">
            <h2 className="text-2xl font-black text-foreground">How to Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-primary/5 backdrop-blur-md rounded-2xl p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-black text-foreground">Email Requests</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground/60 font-bold mb-1">General Data Rights:</p>
                      <a href="mailto:privacy@ahsan-ai-hub.com" className="text-primary hover:text-primary/80 font-mono break-all">privacy@ahsan-ai-hub.com</a>
                    </div>
                    <div>
                      <p className="text-muted-foreground/60 font-bold mb-1">Data Access/Export:</p>
                      <a href="mailto:access@ahsan-ai-hub.com" className="text-primary hover:text-primary/80 font-mono break-all">access@ahsan-ai-hub.com</a>
                    </div>
                    <div>
                      <p className="text-muted-foreground/60 font-bold mb-1">Data Deletion:</p>
                      <a href="mailto:deletion@ahsan-ai-hub.com" className="text-primary hover:text-primary/80 font-mono break-all">deletion@ahsan-ai-hub.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-primary/5 backdrop-blur-md rounded-2xl p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-black text-foreground">Account Settings</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground/60 font-bold mb-2">Quick Actions in Your Account:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Update profile: Settings &gt; Profile</li>
                        <li>• Download data: Settings &gt; Data Export</li>
                        <li>• Privacy settings: Settings &gt; Privacy</li>
                        <li>• Delete account: Settings &gt; Delete Account</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Jurisdictional Rights */}
          <div className="mb-16 space-y-6">
            <h2 className="text-2xl font-black text-foreground">Rights by Jurisdiction</h2>
            <p className="text-muted-foreground">Your specific rights depend on where you live. Here's a summary of rights in major regions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jurisdictions.map((juris, idx) => (
                <Card key={idx} className="border-border/50 bg-card/40 backdrop-blur-md rounded-2xl p-6">
                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h3 className="font-black text-foreground text-lg">{juris.region}</h3>
                      <p className="text-xs text-muted-foreground/60 mt-1">{juris.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {juris.rights.map((right, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-bold">✓</span>
                          {right}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Style */}
          <div className="mb-16 space-y-6">
            <h2 className="text-2xl font-black text-foreground">Common Questions</h2>
            <div className="space-y-4">
              <Card className="border-border/50 bg-card/40 backdrop-blur-md rounded-2xl p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-black text-foreground">How long do you take to respond?</h3>
                  <p className="text-sm text-muted-foreground">Standard requests take 15-30 days. Complex requests may take up to 45 days. We'll keep you updated on progress.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/40 backdrop-blur-md rounded-2xl p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-black text-foreground">Do you charge for data requests?</h3>
                  <p className="text-sm text-muted-foreground">No. We provide your rights for free. We may charge only if your request is excessive or manifestly unfounded (per applicable law).</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/40 backdrop-blur-md rounded-2xl p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-black text-foreground">What happens after I delete my account?</h3>
                  <p className="text-sm text-muted-foreground">Your account is immediately closed. Personal data is deleted within 90 days. Some data may be retained for legal/regulatory compliance. Backups are purged within the same period.</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/40 backdrop-blur-md rounded-2xl p-6">
                <CardContent className="p-0 space-y-4">
                  <h3 className="font-black text-foreground">Can I appeal a denied request?</h3>
                  <p className="text-sm text-muted-foreground">Yes. If we deny your request, we'll explain why. You can appeal to our Data Protection Officer: dpo@ahsan-ai-hub.com</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-md rounded-2xl p-8">
            <CardContent className="p-0 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-foreground">Ready to Manage Your Data?</h3>
                <p className="text-muted-foreground">Visit your account settings or contact our privacy team anytime.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/settings">
                  <Button className="rounded-xl h-12 px-8 font-black uppercase tracking-widest gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all">
                    Go to Settings
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-xl h-12 px-8 font-black uppercase tracking-widest gap-2">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <footer className="mt-16 pt-8 border-t border-border/40 text-center space-y-4">
            <div className="flex justify-center gap-6 text-xs text-muted-foreground/60 flex-wrap">
              <Link href="/privacy" className="hover:text-primary transition-colors font-medium">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-primary transition-colors font-medium">Terms of Service</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary transition-colors font-medium">Contact</Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
