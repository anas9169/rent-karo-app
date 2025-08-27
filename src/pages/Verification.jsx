
import { useState } from 'react';
import { Award, Shield, CheckCircle, Upload, Phone, Mail, CreditCard, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Verification = () => {
  const [verificationStatus, setVerificationStatus] = useState({
    email: true,
    phone: false,
    identity: false,
    address: false,
    payment: true
  });

  const verificationSteps = [
    {
      id: 'email',
      title: 'Email Verification',
      description: 'Verify your email address to secure your account',
      icon: Mail,
      completed: verificationStatus.email,
      required: true
    },
    {
      id: 'phone',
      title: 'Phone Number Verification',
      description: 'Verify your phone number for secure communications',
      icon: Phone,
      completed: verificationStatus.phone,
      required: true
    },
    {
      id: 'identity',
      title: 'Identity Verification',
      description: 'Upload a government ID to verify your identity',
      icon: User,
      completed: verificationStatus.identity,
      required: false
    },
    {
      id: 'address',
      title: 'Address Verification',
      description: 'Verify your address with a utility bill or bank statement',
      icon: Shield,
      completed: verificationStatus.address,
      required: false
    },
    {
      id: 'payment',
      title: 'Payment Method',
      description: 'Add and verify a payment method',
      icon: CreditCard,
      completed: verificationStatus.payment,
      required: true
    }
  ];

  const completedCount = Object.values(verificationStatus).filter(Boolean).length;
  const totalCount = verificationSteps.length;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Account Verification</h1>
          </div>
          <p className="text-muted-foreground mb-4">
            Verify your account to build trust and unlock all features.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Verification Progress</span>
              <span className="text-sm text-muted-foreground">{completedCount}/{totalCount}</span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Verification Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Verify Your Account?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Build Trust</h3>
                <p className="text-sm text-muted-foreground">Show others you're a verified member</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Unlock Features</h3>
                <p className="text-sm text-muted-foreground">Access premium features and higher limits</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Secure Account</h3>
                <p className="text-sm text-muted-foreground">Protect your account from unauthorized access</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Steps */}
        <div className="space-y-4">
          {verificationSteps.map((step) => (
            <Card key={step.id} className={`${step.completed ? 'bg-green-50 border-green-200' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      step.completed ? 'bg-green-100' : 'bg-primary/10'
                    }`}>
                      {step.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <step.icon className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold">{step.title}</h3>
                        {step.required && (
                          <Badge variant="outline" className="text-xs">Required</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    {step.completed ? (
                      <Badge className="bg-green-100 text-green-800">Verified</Badge>
                    ) : (
                      <Button variant="outline">
                        {step.id === 'identity' || step.id === 'address' ? 'Upload' : 'Verify'}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Additional forms for incomplete verifications */}
                {!step.completed && step.id === 'phone' && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex space-x-2">
                      <Input placeholder="Enter your phone number" className="flex-1" />
                      <Button>Send OTP</Button>
                    </div>
                  </div>
                )}

                {!step.completed && (step.id === 'identity' || step.id === 'address') && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        {step.id === 'identity' ? 'Upload a clear photo of your government ID' : 'Upload a utility bill or bank statement'}
                      </p>
                      <Button variant="outline">Choose File</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Having trouble with verification? Our support team is here to help.
            </p>
            <Button variant="outline">Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Verification;
