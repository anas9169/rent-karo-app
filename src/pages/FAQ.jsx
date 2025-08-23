import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, CreditCard, Users } from 'lucide-react';

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqSections = [
    {
      icon: HelpCircle,
      title: 'Getting Started',
      faqs: [
        {
          question: 'How does Rent Karo work?',
          answer: 'Rent Karo connects people who have items to rent with those who need them. Simply search for what you need, browse listings, and contact owners directly through our secure messaging system.'
        },
        {
          question: 'Is it free to use Rent Karo?',
          answer: 'Yes! Browsing and renting items is completely free. Listing items is also free for your first 3 listings per month. Premium plans are available for power users who want to list more items.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button in the top right corner and provide your basic information. You can sign up with your email or phone number. Verification helps keep our community safe.'
        },
        {
          question: 'Can I use Rent Karo without signing up?',
          answer: 'You can browse listings without an account, but you need to sign up to contact owners, save favorites, or list your own items.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Renting Items',
      faqs: [
        {
          question: 'How do I rent an item?',
          answer: 'Find the item you want, click on it to view details, then use the "Message Owner" button to discuss availability, pickup/delivery, and finalize the rental terms.'
        },
        {
          question: 'How do I know if an owner is trustworthy?',
          answer: 'Check their profile for verification badges, read reviews from previous renters, and look at their response time. All our owners go through a verification process.'
        },
        {
          question: 'What if an item is damaged or not as described?',
          answer: 'Contact us immediately through our support system. We have policies in place to protect both renters and owners, and we'll help resolve any disputes fairly.'
        },
        {
          question: 'Can I cancel a rental?',
          answer: 'Cancellation policies vary by owner. Most allow free cancellation 24 hours before the rental start time. Check the specific cancellation policy in the item description.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      faqs: [
        {
          question: 'How do you verify users?',
          answer: 'We verify users through phone number confirmation, email verification, and government ID checks for premium listings. Additional verification badges are available for enhanced trust.'
        },
        {
          question: 'Is my personal information safe?',
          answer: 'Yes, we use industry-standard encryption and never share your personal information without your consent. Read our Privacy Policy for complete details.'
        },
        {
          question: 'What if something goes wrong during a rental?',
          answer: 'Our support team is available 24/7. We also have insurance partnerships and dispute resolution processes to protect both parties.'
        },
        {
          question: 'How do I report suspicious activity?',
          answer: 'Use the "Report" button on any listing or message, or contact our support team directly. We take all reports seriously and investigate promptly.'
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Payments & Pricing',
      faqs: [
        {
          question: 'How do payments work?',
          answer: 'Payments are handled directly between renters and owners. We recommend using secure payment methods and keeping records of all transactions.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees for basic usage. Premium subscription plans have transparent pricing listed on our Subscription Plans page.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'Refund policies depend on individual owners and circumstances. We encourage all users to discuss refund terms before finalizing rentals.'
        },
        {
          question: 'What payment methods are accepted?',
          answer: 'Most owners accept cash, UPI, bank transfers, and digital wallets. Payment preferences are listed in each item description.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using Rent Karo. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Section Header */}
              <div className="bg-muted/50 p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-card-foreground">{section.title}</h2>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="divide-y divide-border">
                {section.faqs.map((faq, faqIndex) => {
                  const uniqueIndex = `${sectionIndex}-${faqIndex}`;
                  const isOpen = openSection === uniqueIndex;
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        className="w-full px-6 py-4 text-left hover:bg-muted/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                        onClick={() => toggleSection(uniqueIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-card-foreground pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you with anything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="/help" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;