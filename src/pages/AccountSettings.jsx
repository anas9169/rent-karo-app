import { useState } from 'react';
import { Settings, Shield, Bell, Eye, CreditCard, Key, Trash2, Download, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    rentailReminders: true,
    newMessages: true,
    
    // Privacy Settings
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    searchIndexing: true,
    
    // Security Settings
    twoFactorAuth: false,
    loginAlerts: true
  });

  const updateSetting = (key, value) => {
    setSettings({
      ...settings,
      [key]: value
    });
  };

  const settingSections = [
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      description: 'Control how and when you receive notifications',
      settings: [
        {
          key: 'emailNotifications',
          label: 'Email Notifications',
          description: 'Receive important updates via email',
          type: 'toggle'
        },
        {
          key: 'smsNotifications',
          label: 'SMS Notifications',
          description: 'Get text messages for urgent updates',
          type: 'toggle'
        },
        {
          key: 'marketingEmails',
          label: 'Marketing Emails',
          description: 'Receive promotional offers and tips',
          type: 'toggle'
        },
        {
          key: 'rentailReminders',
          label: 'Rental Reminders',
          description: 'Get reminded about upcoming rentals',
          type: 'toggle'
        },
        {
          key: 'newMessages',
          label: 'New Messages',
          description: 'Instant notifications for new messages',
          type: 'toggle'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy',
      icon: Eye,
      description: 'Manage your privacy and data visibility',
      settings: [
        {
          key: 'profileVisibility',
          label: 'Profile Visibility',
          description: 'Who can see your profile information',
          type: 'select',
          options: [
            { value: 'public', label: 'Public - Anyone can see' },
            { value: 'users', label: 'Rent Karo users only' },
            { value: 'private', label: 'Private - Only you' }
          ]
        },
        {
          key: 'showEmail',
          label: 'Show Email Address',
          description: 'Display email in your public profile',
          type: 'toggle'
        },
        {
          key: 'showPhone',
          label: 'Show Phone Number',
          description: 'Display phone in your public profile',
          type: 'toggle'
        },
        {
          key: 'searchIndexing',
          label: 'Search Engine Indexing',
          description: 'Allow search engines to index your profile',
          type: 'toggle'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      description: 'Keep your account secure',
      settings: [
        {
          key: 'twoFactorAuth',
          label: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          type: 'toggle'
        },
        {
          key: 'loginAlerts',
          label: 'Login Alerts',
          description: 'Get notified of logins from new devices',
          type: 'toggle'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Account Settings</h1>
          </div>
          <p className="text-muted-foreground">
            Manage your account preferences, privacy, and security settings.
          </p>
        </div>

        <div className="space-y-8">
          {/* Settings Sections */}
          {settingSections.map((section) => (
            <div key={section.id} className="bg-card border border-border rounded-lg">
              {/* Section Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <section.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-card-foreground">{section.title}</h2>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </div>
              </div>

              {/* Section Settings */}
              <div className="p-6 space-y-4">
                {section.settings.map((setting, index) => (
                  <div key={setting.key}>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-card-foreground">
                          {setting.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {setting.description}
                        </p>
                      </div>
                      
                      <div className="ml-4">
                        {setting.type === 'toggle' && (
                          <Switch
                            checked={settings[setting.key]}
                            onCheckedChange={(checked) => updateSetting(setting.key, checked)}
                          />
                        )}
                        
                        {setting.type === 'select' && (
                          <select
                            value={settings[setting.key]}
                            onChange={(e) => updateSetting(setting.key, e.target.value)}
                            className="px-3 py-2 border border-border rounded-md text-foreground bg-background min-w-[200px]"
                          >
                            {setting.options.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    </div>
                    {index < section.settings.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Account Management */}
          <div className="bg-card border border-border rounded-lg">
            <div className="p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Key className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-card-foreground">Account Management</h2>
                  <p className="text-sm text-muted-foreground">Manage your account data and access</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Change Password */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-sm font-medium text-card-foreground">Password</h3>
                  <p className="text-sm text-muted-foreground">Change your account password</p>
                </div>
                <Button variant="outline">Change Password</Button>
              </div>

              <Separator />

              {/* Download Data */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-sm font-medium text-card-foreground">Download Your Data</h3>
                  <p className="text-sm text-muted-foreground">Get a copy of all your account data</p>
                </div>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <Separator />

              {/* Subscription Management */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-sm font-medium text-card-foreground">Subscription</h3>
                  <p className="text-sm text-muted-foreground">Manage your premium subscription</p>
                </div>
                <Button variant="outline">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Subscription
                </Button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-card border border-red-200 rounded-lg">
            <div className="p-6 border-b border-red-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-red-800">Danger Zone</h2>
                  <p className="text-sm text-red-600">Irreversible actions that affect your account</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Deactivate Account */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-sm font-medium text-red-800">Deactivate Account</h3>
                  <p className="text-sm text-red-600">Temporarily disable your account</p>
                </div>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  Deactivate
                </Button>
              </div>

              <Separator className="bg-red-200" />

              {/* Delete Account */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-sm font-medium text-red-800">Delete Account</h3>
                  <p className="text-sm text-red-600">Permanently delete your account and all data</p>
                </div>
                <Button variant="destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </div>
          </div>

          {/* Save Changes */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;