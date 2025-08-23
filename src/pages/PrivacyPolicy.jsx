import { Shield, Eye, Lock, Database, UserCheck, Settings } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'information-collection',
      title: '1. Information We Collect',
      icon: Database,
      content: [
        'Personal Information: Name, email address, phone number, profile picture, and verification documents.',
        'Account Information: Username, password (encrypted), account preferences, and subscription details.',
        'Listing Information: Photos, descriptions, pricing, and availability of items you list for rent.',
        'Communication Data: Messages exchanged through our platform, including chat histories and support interactions.',
        'Device Information: IP address, browser type, device type, operating system, and usage patterns.',
        'Location Data: City, area, and approximate location for showing relevant listings (with your consent).'
      ]
    },
    {
      id: 'information-use',
      title: '2. How We Use Your Information',
      icon: Settings,
      content: [
        'To provide and maintain our rental marketplace platform.',
        'To facilitate communication between renters and item owners.',
        'To verify user identities and maintain platform security.',
        'To personalize your experience and show relevant listings.',
        'To process transactions and provide customer support.',
        'To send important notifications about your account and transactions.',
        'To improve our services through analytics and user feedback.',
        'To comply with legal obligations and prevent fraudulent activities.'
      ]
    },
    {
      id: 'information-sharing',
      title: '3. Information Sharing and Disclosure',
      icon: UserCheck,
      content: [
        'With Other Users: Limited profile information is visible to facilitate transactions.',
        'Service Providers: Trusted third-party services that help us operate our platform (cloud hosting, analytics, customer support).',
        'Legal Requirements: When required by law, court order, or to protect our rights and safety.',
        'Business Transfers: In the event of a merger, acquisition, or sale of assets.',
        'Consent: Any other sharing will be done only with your explicit consent.',
        'We never sell your personal information to third parties for marketing purposes.'
      ]
    },
    {
      id: 'data-security',
      title: '4. Data Security and Protection',
      icon: Lock,
      content: [
        'We use industry-standard encryption (SSL/TLS) to protect data in transit.',
        'Passwords are securely hashed and never stored in plain text.',
        'Access to personal data is restricted to authorized personnel only.',
        'Regular security audits and monitoring to detect and prevent breaches.',
        'Secure data centers with physical and digital access controls.',
        'While we implement strong security measures, no system is 100% secure, and we cannot guarantee absolute security.'
      ]
    },
    {
      id: 'user-rights',
      title: '5. Your Rights and Choices',
      icon: Eye,
      content: [
        'Access: You can view and download your personal data through your account settings.',
        'Correction: You can update or correct your information at any time.',
        'Deletion: You can request deletion of your account and associated data.',
        'Data Portability: You can request a copy of your data in a machine-readable format.',
        'Opt-out: You can unsubscribe from marketing emails and disable certain notifications.',
        'Location: You can disable location sharing in your device or browser settings.'
      ]
    },
    {
      id: 'cookies-tracking',
      title: '6. Cookies and Tracking Technologies',
      icon: Settings,
      content: [
        'Essential Cookies: Required for basic platform functionality and security.',
        'Performance Cookies: Help us understand how users interact with our platform.',
        'Preference Cookies: Remember your settings and preferences.',
        'Marketing Cookies: Used to show relevant advertisements (with consent).',
        'You can control cookie preferences through your browser settings.',
        'Disabling certain cookies may limit platform functionality.'
      ]
    },
    {
      id: 'data-retention',
      title: '7. Data Retention',
      icon: Database,
      content: [
        'Account Information: Retained until you delete your account.',
        'Transaction Records: Kept for 7 years for legal and tax purposes.',
        'Communication Logs: Maintained for 2 years for dispute resolution.',
        'Analytics Data: Anonymized data may be retained indefinitely.',
        'Deleted Account Data: Most personal data is deleted within 30 days of account deletion.',
        'Legal Requirements: Some data may be retained longer if required by law.'
      ]
    },
    {
      id: 'third-party',
      title: '8. Third-Party Services',
      icon: UserCheck,
      content: [
        'We integrate with trusted third-party services for enhanced functionality.',
        'Payment Processing: We work with secure payment providers for transactions.',
        'Identity Verification: Third-party services help verify user identities.',
        'Analytics: We use analytics tools to improve our platform performance.',
        'These services have their own privacy policies, which we encourage you to review.',
        'We carefully vet all third-party providers for security and privacy compliance.'
      ]
    },
    {
      id: 'children',
      title: '9. Children\'s Privacy',
      icon: Shield,
      content: [
        'Our platform is not intended for users under 18 years of age.',
        'We do not knowingly collect personal information from children.',
        'If we become aware that a child has provided personal information, we will delete it promptly.',
        'Parents or guardians who believe their child has provided information should contact us immediately.',
        'Users must be of legal age to enter into rental agreements in their jurisdiction.'
      ]
    },
    {
      id: 'changes',
      title: '10. Changes to This Privacy Policy',
      icon: Settings,
      content: [
        'We may update this Privacy Policy periodically to reflect changes in our practices.',
        'Material changes will be notified via email or prominent notice on our platform.',
        'The "Last Updated" date at the top indicates when changes were made.',
        'Continued use of our platform after changes constitutes acceptance of the updated policy.',
        'We encourage you to review this policy regularly to stay informed about how we protect your privacy.'
      ]
    }
  ];

  const dataTypes = [
    { type: 'Account Data', description: 'Name, email, phone, preferences', retention: 'Until account deletion' },
    { type: 'Listing Data', description: 'Photos, descriptions, pricing', retention: 'Until item removal' },
    { type: 'Message Data', description: 'Communications between users', retention: '2 years' },
    { type: 'Transaction Data', description: 'Rental history and records', retention: '7 years' },
    { type: 'Usage Analytics', description: 'Anonymized platform usage', retention: 'Indefinitely' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong> January 15, 2024
          </div>
        </div>

        {/* Key Principles */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Our Privacy Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Transparency</h3>
              <p className="text-sm text-muted-foreground">Clear about what we collect and why</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Security</h3>
              <p className="text-sm text-muted-foreground">Your data is protected with strong security</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Control</h3>
              <p className="text-sm text-muted-foreground">You control your privacy settings</p>
            </div>
          </div>
        </div>

        {/* Data Overview Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
          <div className="bg-muted/50 p-4 border-b border-border">
            <h3 className="text-lg font-semibold text-card-foreground">Data We Collect & Retention</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium text-card-foreground">Data Type</th>
                  <th className="text-left p-4 font-medium text-card-foreground">Description</th>
                  <th className="text-left p-4 font-medium text-card-foreground">Retention Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {dataTypes.map((item, index) => (
                  <tr key={index} className="hover:bg-muted/20">
                    <td className="p-4 font-medium text-card-foreground">{item.type}</td>
                    <td className="p-4 text-muted-foreground">{item.description}</td>
                    <td className="p-4 text-muted-foreground">{item.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-3 ml-14">
                  {section.content.map((item, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Questions About Your Privacy?</h3>
          <p className="text-muted-foreground mb-6">
            We're here to help you understand how we protect your privacy and data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Privacy Team
            </a>
            <a 
              href="mailto:privacy@rentkaro.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Email Us Directly
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For data deletion requests or privacy concerns, contact: privacy@rentkaro.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;