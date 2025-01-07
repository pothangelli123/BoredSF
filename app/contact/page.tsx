'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';

const offices = [
  {
    city: 'San Francisco',
    address: '415 Mission Street, San Francisco, CA 94105',
    phone: '+1 (800) 667-6389',
    email: 'sf@boredsf.com',
  },
  {
    city: 'New York',
    address: '3 Bryant Park, New York, NY 10036',
    phone: '+1 (800) 667-6389',
    email: 'ny@boredsf.com',
  },
  {
    city: 'London',
    address: '110 Bishopsgate, London EC2N 4AY',
    phone: '+44 20 7577 1000',
    email: 'london@boredsf.com',
  },
  {
    city: 'Sydney',
    address: '126 Phillip Street, Sydney NSW 2000',
    phone: '+61 2 9146 3500',
    email: 'sydney@boredsf.com',
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: 'We\'ll get back to you as soon as possible.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="container py-16">
        <div className="mx-auto max-w-5xl w-full">
          <h1 className="text-center text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-center text-lg text-muted-foreground">
            Get in touch with our team for any inquiries about Salesforce Marketing Cloud.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Send us a message</h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Our Offices</h2>
              <div className="mt-8 grid gap-6">
                {offices.map((office) => (
                  <Card key={office.city} className="p-6">
                    <div className="flex items-center gap-4">
                      <Building2 className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">{office.city}</h3>
                        <div className="mt-4 space-y-2 text-sm">
                          <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {office.address}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {office.phone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}