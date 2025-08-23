import { FileText, Shield, AlertTriangle, Scale } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using Rent Karo, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These Terms of Service apply to all users of the platform, including browsers, vendors, customers, merchants, and/or contributors of content.'
      ]
    },
    {
      id: 'description',
      title: '2. Description of Service',
      content: [
        'Rent Karo is an online marketplace that connects individuals who have items to rent with those who need them.',
        'We provide the platform for users to list, discover, and communicate about rental opportunities.',
        'Rent Karo does not own, store, sell, or rent any of the items listed on our platform.',
        'We are not a party to any rental agreements between users and do not guarantee the quality, safety, or legality of items listed.'
      ]
    },
    {
      id: 'registration',
      title: '3. User Registration and Accounts',
      content: [
        'To access certain features, you must register for an account and provide accurate, current, and complete information.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to notify us immediately of any unauthorized use of your account.',
        'We reserve the right to suspend or terminate accounts that violate these terms.'
      ]
    },
    {
      id: 'conduct',
      title: '4. User Conduct and Responsibilities',
      content: [
        'Users must not post false, misleading, or fraudulent content.',
        'Users must not engage in any illegal activities through our platform.',
        'Users must respect the intellectual property rights of others.',
        'Users must not attempt to circumvent our platform to conduct transactions.',
        'Harassment, abuse, or inappropriate behavior toward other users is strictly prohibited.'
      ]
    },
    {
      id: 'listings',
      title: '5. Listings and Content',
      content: [
        'Users are solely responsible for the content they post, including item descriptions, photos, and availability.',
        'By posting content, you grant Rent Karo a non-exclusive license to use, modify, and display such content.',
        'We reserve the right to remove any content that violates these terms or applicable laws.',
        'Users must ensure they have the legal right to rent out any items they list.'
      ]
    },
    {
      id: 'transactions',
      title: '6. Transactions and Payments',
      content: [
        'All transactions are conducted directly between users; Rent Karo is not a party to these transactions.',
        'Users are responsible for determining rental terms, including pricing, duration, and conditions.',
        'We strongly recommend users to meet in safe, public locations and inspect items before rental.',
        'Rent Karo does not process payments but may facilitate communication about payment methods.'
      ]
    },
    {
      id: 'liability',
      title: '7. Limitation of Liability',
      content: [
        'Rent Karo is provided "as is" without warranties of any kind, either express or implied.',
        'We are not liable for any damages arising from the use of our platform or transactions between users.',
        'Users assume all risks associated with renting or lending items through our platform.',
        'Our total liability shall not exceed the amount of fees paid by you to us in the preceding 12 months.'
      ]
    },
    {
      id: 'privacy',
      title: '8. Privacy and Data Protection',
      content: [
        'Your privacy is important to us. Please review our Privacy Policy, which governs the collection and use of your information.',
        'We implement appropriate security measures to protect your personal information.',
        'We may share anonymized, aggregated data for business and research purposes.',
        'You have the right to access, update, or delete your personal information as outlined in our Privacy Policy.'
      ]
    },
    {
      id: 'intellectual',
      title: '9. Intellectual Property Rights',
      content: [
        'The Rent Karo platform, including its design, features, and content, is protected by intellectual property laws.',
        'Users retain ownership of content they post but grant us necessary licenses to operate the platform.',
        'Users must not infringe on the intellectual property rights of Rent Karo or third parties.',
        'Any unauthorized use of our intellectual property may result in account termination and legal action.'
      ]
    },
    {
      id: 'modifications',
      title: '10. Modifications to Terms',
      content: [
        'We reserve the right to modify these Terms of Service at any time.',
        'Changes will be posted on this page with an updated effective date.',
        'Continued use of the platform after changes constitutes acceptance of the new terms.',
        'Material changes will be communicated to users via email or platform notifications.'
      ]
    },
    {
      id: 'termination',
      title: '11. Termination',
      content: [
        'Either party may terminate this agreement at any time.',
        'We may suspend or terminate your account for violations of these terms.',
        'Upon termination, your right to use the platform ceases immediately.',
        'Provisions that should survive termination will remain in effect.'
      ]
    },
    {
      id: 'governing',
      title: '12. Governing Law and Dispute Resolution',
      content: [
        'These terms are governed by the laws of India.',
        'Any disputes will be resolved through binding arbitration in Mumbai, Maharashtra.',
        'Users waive the right to participate in class action lawsuits.',
        'If any provision is found unenforceable, the remainder of the terms will remain in effect.'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Please read these Terms of Service carefully before using Rent Karo.
          </p>
          <div className="text-sm text-muted-foreground">
            <strong>Last Updated:</strong> January 15, 2024
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
              <p className="text-amber-700 leading-relaxed">
                These Terms of Service constitute a legally binding agreement between you and Rent Karo. 
                By using our platform, you agree to comply with these terms. If you do not agree with any 
                part of these terms, you must not use our service.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
            <Scale className="w-5 h-5 mr-2" />
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-primary hover:text-primary/80 text-sm py-1 block transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h3>
          <p className="text-muted-foreground mb-6">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="mailto:legal@rentkaro.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Email Legal Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;