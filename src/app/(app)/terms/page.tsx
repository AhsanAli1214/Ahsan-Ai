'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const lastUpdated = 'December 2024';

  const sections = [
    {
      id: 'agreement',
      title: '1. Agreement to Terms',
      content: `By accessing and using Ahsan AI Hub ("Services"), you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this Service.

**Eligibility:**
- You must be at least 18 years old (or legal age in your jurisdiction)
- You have full legal authority to enter into this agreement
- Your use of the Services is not prohibited by applicable laws

**Changes to Terms:**
- We reserve the right to modify these terms at any time
- Changes will be posted with an updated "Last Updated" date
- Your continued use constitutes acceptance of modified terms`
    },
    {
      id: 'use',
      title: '2. Acceptable Use Policy',
      content: `You agree not to use our Services for:

**Prohibited Activities:**
- Illegal, fraudulent, or deceptive purposes
- Violating any applicable laws or regulations
- Infringing on intellectual property rights
- Creating spam, malware, or harmful content
- Unauthorized access or hacking attempts
- Harassment, abuse, or threatening behavior
- Impersonation or misrepresentation
- Creating multiple accounts to circumvent restrictions

**Content Restrictions:**
- Do not upload illegal, obscene, or defamatory content
- Respect copyright and intellectual property
- Do not distribute malware or harmful code
- Do not engage in phishing or social engineering
- Do not scrape or reverse-engineer our Services

**Consequences:**
- Violation may result in account suspension or termination
- We may report illegal activity to authorities`
    },
    {
      id: 'content',
      title: '3. User-Generated Content',
      content: `**Your Responsibility:**
- You are solely responsible for content you create and input
- You must have rights to all content you provide
- You grant us a license to use your content to provide Services
- You agree not to upload harmful, illegal, or infringing content

**Our Rights:**
- We may remove content that violates these terms
- We may use your content for service improvement (anonymized)
- We may monitor content for security and compliance
- We are not responsible for user-generated content

**Copyright & Ownership:**
- You retain ownership of your original content
- Our Service, features, and materials remain our property
- You may not reproduce, modify, or distribute our content without permission`
    },
    {
      id: 'ai',
      title: '4. AI Features & Limitations',
      content: `**How Our AI Works:**
- Our AI services are powered by advanced language models
- Results are generated based on your input and parameters
- AI-generated content is provided "as-is" for informational purposes

**Limitations & Disclaimers:**
- AI outputs may contain errors, biases, or inaccuracies
- We do not guarantee accuracy, completeness, or relevance
- You are responsible for verifying important information
- Do not rely on AI outputs for critical decisions without verification
- AI may occasionally produce harmful or inappropriate content

**Usage Restrictions:**
- Do not use AI outputs for deceptive purposes
- Do not misrepresent AI-generated content as human-created
- Do not use outputs for illegal or unethical purposes
- Do not attempt to bypass safety features

**Your Obligations:**
- Review all AI-generated content before using it
- Make independent judgments about content quality
- Take responsibility for decisions based on AI outputs
- Report concerning AI behavior to support@ahsan-ai-hub.com`
    },
    {
      id: 'accounts',
      title: '5. Account Management',
      content: `**Account Creation:**
- You are responsible for maintaining login credentials
- Do not share your password or account access
- Notify us immediately of unauthorized access
- You are liable for all activity on your account

**Account Termination:**
- You can delete your account anytime through Settings
- We may terminate accounts that violate these terms
- Termination may be immediate for severe violations
- Some data may be retained for legal compliance

**Account Responsibility:**
- Provide accurate registration information
- Update information promptly if it changes
- Maintain confidentiality of authentication credentials
- Notify us of unauthorized access immediately`
    },
    {
      id: 'payment',
      title: '6. Payment & Billing',
      content: `**Subscription Plans:**
- Pricing and features are subject to change with notice
- Billing occurs automatically on your renewal date
- You authorize recurring charges to your payment method
- Receipts are sent via email automatically

**Refund Policy:**
- Refunds for accidental duplicate charges: within 30 days
- Refunds for cancelled subscriptions: no refund for services provided
- Special circumstances reviewed case-by-case
- Submit refund requests to billing@ahsan-ai-hub.com

**Payment Methods:**
- We accept major credit/debit cards and digital wallets
- Payment processing by secure third-party providers
- Declined payments may result in service suspension
- Update payment methods if cards expire or are lost

**Taxes:**
- You are responsible for applicable taxes
- We will collect/remit taxes as required by law
- Pricing does not include taxes unless stated`
    },
    {
      id: 'intellectual',
      title: '7. Intellectual Property Rights',
      content: `**Our Intellectual Property:**
- Ahsan AI Hub and all features are our property
- Design, code, graphics, and trademarks are protected
- You may not reproduce, modify, or distribute without permission
- Unauthorized use violates intellectual property laws

**Permitted Use:**
- You may use Services for personal, non-commercial purposes
- You may not resell or redistribute our Services
- You may not create derivative works without permission
- You may not use our branding without written consent

**Your Content License:**
- You retain ownership of your original content
- You grant us a worldwide, royalty-free license
- We may use your content to provide and improve Services
- Content may be anonymized for analytics and improvement

**Third-Party Content:**
- We respect third-party intellectual property rights
- We license or create content in compliance with law
- Report infringement immediately: legal@ahsan-ai-hub.com`
    },
    {
      id: 'warranties',
      title: '8. Disclaimers & Limitations',
      content: `**"AS-IS" Disclaimer:**
Our Services are provided "AS-IS" and "AS AVAILABLE" without warranties of any kind.

**Disclaimer of Warranties:**
- We do not warrant that Services are error-free or uninterrupted
- We do not warrant fitness for particular purposes
- We do not guarantee results or outcomes
- We do not guarantee accuracy of AI-generated content

**Limitation of Liability:**
- To the maximum extent permitted by law, we are not liable for:
  - Indirect, incidental, or consequential damages
  - Loss of profits, data, or use
  - Damage to hardware or software
  - Any damages exceeding your paid subscription fees

**Your Remedies:**
- Your sole remedy for service issues is termination
- Refunds of fees paid are limited to terms specified

**Indemnification:**
- You agree to indemnify us against claims from your use
- You assume all risk of loss or damage`
    },
    {
      id: 'security',
      title: '9. Your Obligations & Security',
      content: `**Your Responsibilities:**
- Use Services only for lawful purposes
- Do not interfere with service operation
- Do not attempt unauthorized access
- Maintain confidentiality of your account
- Use strong passwords and security practices

**Security Best Practices:**
- Enable two-factor authentication if available
- Log out after each session
- Never share passwords with others
- Use updated browsers and security software
- Be cautious of phishing attempts

**Reporting Issues:**
- Report security vulnerabilities responsibly
- Contact: security@ahsan-ai-hub.com
- Do not publicly disclose vulnerabilities
- We appreciate responsible disclosure and may offer bug bounties`
    },
    {
      id: 'availability',
      title: '10. Service Availability & Support',
      content: `**Availability:**
- We aim for 99.5% uptime but do not guarantee it
- Maintenance windows may occur with notice
- Emergencies may cause unscheduled downtime
- We are not liable for downtime or service interruptions

**Support:**
- Support is available via email: support@ahsan-ai-hub.com
- Response time depends on your subscription plan
- We provide "best effort" support without SLA guarantees
- Some issues may not be resolvable

**Service Changes:**
- We may modify, suspend, or discontinue Services
- Essential changes will include transition notice
- Users will be notified via email`
    },
    {
      id: 'termination',
      title: '11. Termination & Suspension',
      content: `**Grounds for Termination:**
- Violation of these Terms of Service
- Violation of acceptable use policy
- Non-payment of fees
- Illegal or harmful activity
- Multiple violations after warnings

**Suspension:**
- We may immediately suspend accounts for security threats
- Violations may result in account termination
- Terminated users may not create new accounts
- Data may be deleted upon termination

**Your Right to Terminate:**
- You can terminate anytime through Settings
- Termination is effective immediately
- No refunds for unused subscription time
- Your data may be deleted after 30-day grace period`
    },
    {
      id: 'dispute',
      title: '12. Dispute Resolution',
      content: `**Governing Law:**
These Terms are governed by applicable laws in your jurisdiction.

**Informal Resolution:**
- Contact us first to resolve disputes: legal@ahsan-ai-hub.com
- We will respond within 30 days
- Most disputes can be resolved informally

**Arbitration:**
- For unresolved disputes, binding arbitration applies
- Arbitration is conducted by independent arbitrators
- Arbitration is faster and less costly than litigation
- You may choose to pursue small claims court instead

**Jurisdictional Issues:**
- By using our Services, you agree to these terms
- You consent to jurisdiction of courts in our location
- You waive right to jury trial (where applicable)`
    },
    {
      id: 'contact',
      title: '13. Contact & Support',
      content: `**For Questions About These Terms:**
- Email: legal@ahsan-ai-hub.com
- Visit: /contact
- Support: support@ahsan-ai-hub.com

**Reporting Issues:**
- Terms violations: legal@ahsan-ai-hub.com
- Security concerns: security@ahsan-ai-hub.com
- Billing questions: billing@ahsan-ai-hub.com
- General support: support@ahsan-ai-hub.com

**Response Times:**
- We aim to respond within 24-48 business hours
- Complex issues may require additional time`
    },
    {
      id: 'entire',
      title: '14. Entire Agreement',
      content: `**Complete Agreement:**
These Terms, along with our Privacy Policy and other terms, constitute the entire agreement between you and Ahsan AI Hub regarding use of our Services.

**Severability:**
- If any part of these terms is invalid, the remainder remains in effect
- We will replace invalid terms with valid ones

**No Waiver:**
- Failure to enforce any right does not constitute waiver
- We may enforce our rights at any time

**Relationship:**
- You and Ahsan AI Hub are independent parties
- No partnership, agency, or joint venture is created
- You have no authority to bind us contractually`
    }
  ];

  return (
    <div className="flex h-full w-full flex-col bg-background selection:bg-primary/20">
      <AppHeader title="Terms of Service" />
      
      <main className="flex-1 overflow-y-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 space-y-6">
            <Link href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
              <ArrowLeft className="h-4 w-4" />
              Back to Contact
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight text-foreground">Terms of Service</h1>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using our Service.
              </p>
            </div>

            {/* Last Updated */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground/60 pt-4">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>

            {/* Important Notice */}
            <Card className="border-amber-500/30 bg-amber-500/5 rounded-xl p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 dark:text-amber-200">
                  <strong>Important:</strong> These terms govern your use of our Services. By using our Services, you agree to be legally bound by these terms. If you do not agree, please do not use our Services.
                </p>
              </div>
            </Card>
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
                <h3 className="text-2xl font-black text-foreground">Questions About These Terms?</h3>
                <p className="text-muted-foreground">Our legal team is ready to help clarify anything.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="rounded-xl h-12 px-8 font-black uppercase tracking-widest gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all">
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
