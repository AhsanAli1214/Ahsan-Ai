'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Mail, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      id: 'intro',
      title: '1. Introduction',
      content: `Ahsan AI Hub ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and related services (collectively, the "Services").

Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services. Your use of our Services indicates your acceptance of this Privacy Policy and the Terms of Service.`
    },
    {
      id: 'collection',
      title: '2. Information We Collect',
      content: `We collect information in various ways:

**A. Information You Provide Directly:**
- Account registration data (name, email, password)
- Profile information (preferences, settings)
- Content you create or input into our AI tools
- Communication data (messages, support requests, feedback)
- Payment information (processed securely through third-party providers)

**B. Automatically Collected Information:**
- Device information (browser type, IP address, device ID)
- Usage data (pages visited, features used, time spent)
- Analytics information (interactions, clicks, scroll behavior)
- Cookies and similar tracking technologies

**C. Information from Third Parties:**
- Social media platforms (if you connect your account)
- Authentication providers
- Analytics services
- Payment processors`
    },
    {
      id: 'usage',
      title: '3. How We Use Your Information',
      content: `We use collected information for:

**Service Delivery:**
- Providing and improving our Services
- Personalizing your experience
- Processing transactions
- Sending transactional emails
- Providing customer support

**Business Operations:**
- Analytics and performance monitoring
- Security and fraud prevention
- Compliance with legal obligations
- Testing and troubleshooting

**Marketing & Communication:**
- Sending promotional emails (with your consent)
- Service announcements
- Updates and improvements
- Newsletter and content distribution

**Research & Development:**
- Improving AI models and features
- Understanding user needs
- Developing new features
- Performance optimization`
    },
    {
      id: 'sharing',
      title: '4. How We Share Your Information',
      content: `We do not sell, trade, or rent your personal information. We may share information in these cases:

**Service Providers:**
- Cloud hosting providers
- Payment processors
- Analytics services
- Email delivery services
All service providers are contractually obligated to maintain confidentiality.

**Legal Requirements:**
- To comply with laws, regulations, and legal processes
- To enforce our Terms of Service
- To protect rights, privacy, safety, and property

**Business Transfers:**
- In case of merger, acquisition, or bankruptcy
- You will be notified of any such change
- Applicable privacy protections will remain in effect

**With Your Consent:**
- When you explicitly authorize us to share information
- For integrations you choose to enable`
    },
    {
      id: 'security',
      title: '5. Data Security',
      content: `We implement industry-leading security measures to protect your information:

**Technical Safeguards:**
- SSL/TLS encryption for data in transit
- AES-256 encryption for data at rest
- Secure authentication mechanisms
- Regular security audits and penetration testing

**Administrative Safeguards:**
- Limited access to personal information (need-to-know basis)
- Employee confidentiality agreements
- Data handling policies and procedures
- Incident response plan

**Limitations:**
- While we strive to protect your information, no security system is impenetrable
- You are responsible for maintaining confidentiality of your account credentials
- Report any security breaches immediately to security@ahsan-ai-hub.com`
    },
    {
      id: 'retention',
      title: '6. Data Retention',
      content: `We retain your information as long as necessary to:
- Provide our Services
- Fulfill the purposes outlined in this policy
- Comply with legal obligations
- Resolve disputes

**Deletion Rights:**
- You can request deletion of your account and personal data
- Some information may be retained for legal, regulatory, or business purposes
- Deletion requests are processed within 30 days
- Deletion may impact your ability to use certain features

**Archival Data:**
- Backup copies may be retained for up to 90 days
- Aggregated, anonymized data may be retained indefinitely`
    },
    {
      id: 'rights',
      title: '7. Your Privacy Rights',
      content: `Depending on your location, you may have the following rights:

**Right to Access:**
- Request a copy of personal data we hold about you
- Understand what data is processed and why

**Right to Correction:**
- Request correction of inaccurate or incomplete data
- Update your profile information anytime in Settings

**Right to Deletion:**
- Request deletion of your personal data (subject to exceptions)
- Known as "right to be forgotten"

**Right to Data Portability:**
- Receive your data in a structured, machine-readable format
- Transfer data to another service

**Right to Restrict Processing:**
- Request limitations on how we use your data
- Applicable in certain circumstances

**Right to Object:**
- Object to certain types of processing
- Opt-out of marketing communications anytime

**To Exercise Your Rights:**
Contact us at: privacy@ahsan-ai-hub.com`
    },
    {
      id: 'cookies',
      title: '8. Cookies and Tracking Technologies',
      content: `**What Are Cookies?**
Cookies are small files stored on your device that help us recognize you and improve your experience.

**Types of Cookies We Use:**
- **Essential Cookies:** Required for site functionality
- **Analytics Cookies:** Help us understand how you use our Services
- **Preference Cookies:** Remember your settings and preferences
- **Marketing Cookies:** Track content relevance and ad performance

**Cookie Management:**
- You can control cookies through browser settings
- Disabling cookies may limit some functionality
- We respect "Do Not Track" signals where applicable

**Third-Party Services:**
- Google Analytics and similar services may set cookies
- Third-party providers have their own privacy policies`
    },
    {
      id: 'children',
      title: '9. Children\'s Privacy',
      content: `Ahsan AI Hub is not intended for children under 13 (or the applicable age in your jurisdiction).

**Our Policy:**
- We do not knowingly collect personal data from children under 13
- If we discover we have collected data from a child, we delete it immediately
- Parents/guardians can contact us to report unauthorized data collection

**For Users 13-18:**
- Additional protections may apply in your jurisdiction
- Parental consent may be required for certain features`
    },
    {
      id: 'international',
      title: '10. International Data Transfers',
      content: `Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws different from your home country.

**Our Safeguards:**
- Standard contractual clauses approved by relevant authorities
- Adequate level of protection maintained
- Your consent to this transfer by using our Services

**EU Users:**
- We comply with GDPR and CCPA requirements
- Your rights as described in this policy are protected`
    },
    {
      id: 'contact',
      title: '11. Contact Us',
      content: `For privacy-related questions, concerns, or to exercise your rights:

**Email:** privacy@ahsan-ai-hub.com
**Mailing Address:** 
Ahsan AI Hub
Privacy Department
[Your Address]

**Response Time:** 
We aim to respond to all inquiries within 30 days.

**Data Protection Officer:**
For GDPR-related matters: dpo@ahsan-ai-hub.com`
    },
    {
      id: 'changes',
      title: '12. Changes to This Policy',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors.

**How We Notify You:**
- We will post the updated policy on our website
- The "Last Updated" date will be changed
- Significant changes will be communicated via email
- Your continued use of our Services constitutes acceptance of changes

**Review Periodically:**
We recommend reviewing this policy regularly to stay informed about how we protect your privacy.`
    }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-background selection:bg-primary/20">
      <AppHeader title="Privacy Policy" />
      
      <main className="flex-1 overflow-y-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 space-y-6">
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
              <ArrowLeft className="h-4 w-4" />
              Back to Contact
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight text-foreground">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                We are committed to protecting your privacy and ensuring transparency about how we use your data.
              </p>
            </div>

            {/* Last Updated */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground/60 pt-4">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Links */}
          <Card className="mb-12 border-border/50 bg-primary/5 backdrop-blur-md rounded-2xl p-6">
            <CardContent className="p-0">
              <h3 className="font-black text-foreground mb-4">Quick Navigation</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs font-bold text-primary hover:text-primary/80 transition-colors hover:underline"
                  >
                    {section.title.split('.')[1].trim()}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section) => (
              <Card key={section.id} id={section.id} className="border-border/50 bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-black text-foreground mb-4">{section.title}</h2>
                  <div className="prose prose-invert max-w-none space-y-4 text-sm text-muted-foreground leading-relaxed">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="whitespace-pre-wrap">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-md rounded-2xl p-8">
            <CardContent className="p-0 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-foreground">Questions About Your Privacy?</h3>
                <p className="text-muted-foreground">Our privacy team is here to help. Reach out anytime.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="rounded-xl h-12 px-8 font-black uppercase tracking-widest gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all">
                    Contact Us
                  </Button>
                </Link>
                <a href="mailto:privacy@ahsan-ai-hub.com">
                  <Button variant="outline" className="rounded-xl h-12 px-8 font-black uppercase tracking-widest gap-2">
                    <Mail className="h-4 w-4" />
                    Email Privacy Team
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <footer className="mt-16 pt-8 border-t border-border/40 text-center space-y-4">
            <div className="flex justify-center gap-6 text-xs text-muted-foreground/60 flex-wrap">
              <Link href="/terms" className="hover:text-primary transition-colors font-medium">Terms of Service</Link>
              <span>•</span>
              <Link href="/data-rights" className="hover:text-primary transition-colors font-medium">Data Rights</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary transition-colors font-medium">Contact</Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
