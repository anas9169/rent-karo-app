
import { useState } from 'react';
import { Shield, Eye, Lock, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    profileVisibility: 'users',
    showEmail: false,
    showPhone: false,
    showLastSeen: true,
    allowMessages: true,
    shareActivity: false,
    dataCollection: true,
    marketingCommunications: false
  });

  const updateSetting = (key, value) => {
    setSettings({
      ...settings,
      [key]: value
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Privacy Settings</h1>
          </div>
          <p className="text-muted-foreground">
            Control your privacy and data visibility preferences.
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Visibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Profile Visibility
              </CardTitle>
              <CardDescription>
                Choose who can see your profile information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-3">Who can see your profile</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="users"
                      name="profileVisibility"
                      value="users"
                      checked={settings.profileVisibility === 'users'}
                      onChange={(e) => updateSetting('profileVisibility', e.target.value)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="users" className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      Rent Karo users only
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="private"
                      name="profileVisibility"
                      value="private"
                      checked={settings.profileVisibility === 'private'}
                      onChange={(e) => updateSetting('profileVisibility', e.target.value)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="private" className="flex items-center">
                      <Lock className="w-4 h-4 mr-2 text-red-500" />
                      Private - Only you
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Show Email Address</h3>
                    <p className="text-sm text-muted-foreground">Display email in your profile</p>
                  </div>
                  <Switch
                    checked={settings.showEmail}
                    onCheckedChange={(checked) => updateSetting('showEmail', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Show Phone Number</h3>
                    <p className="text-sm text-muted-foreground">Display phone in your profile</p>
                  </div>
                  <Switch
                    checked={settings.showPhone}
                    onCheckedChange={(checked) => updateSetting('showPhone', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Show Last Seen</h3>
                    <p className="text-sm text-muted-foreground">Let others see when you were last active</p>
                  </div>
                  <Switch
                    checked={settings.showLastSeen}
                    onCheckedChange={(checked) => updateSetting('showLastSeen', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Communication Preferences</CardTitle>
              <CardDescription>Control how others can communicate with you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Allow Direct Messages</h3>
                  <p className="text-sm text-muted-foreground">Let users send you direct messages</p>
                </div>
                <Switch
                  checked={settings.allowMessages}
                  onCheckedChange={(checked) => updateSetting('allowMessages', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Share Activity Status</h3>
                  <p className="text-sm text-muted-foreground">Show your rental activity to others</p>
                </div>
                <Switch
                  checked={settings.shareActivity}
                  onCheckedChange={(checked) => updateSetting('shareActivity', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card>
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
              <CardDescription>Control how your data is used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Data Collection for Improvements</h3>
                  <p className="text-sm text-muted-foreground">Help us improve our services</p>
                </div>
                <Switch
                  checked={settings.dataCollection}
                  onCheckedChange={(checked) => updateSetting('dataCollection', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Marketing Communications</h3>
                  <p className="text-sm text-muted-foreground">Receive personalized offers and updates</p>
                </div>
                <Switch
                  checked={settings.marketingCommunications}
                  onCheckedChange={(checked) => updateSetting('marketingCommunications', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Changes */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Reset to Default</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
