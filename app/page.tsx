import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Navigation, Phone, MessageSquare, Share2, Zap, Brain } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Email Studio',
    description: 'Create and automate personalized email campaigns at scale.',
    icon: Mail,
  },
  {
    title: 'Journey Builder',
    description: 'Design and automate customer journeys across all channels.',
    icon: Navigation,
  },
  {
    title: 'Mobile Studio',
    description: 'Engage customers with SMS, push notifications, and group messaging.',
    icon: Phone,
  },
  {
    title: 'Advertising Studio',
    description: 'Create targeted advertising campaigns using CRM data.',
    icon: Share2,
  },
  {
    title: 'Interaction Studio',
    description: 'Deliver real-time personalization across all channels.',
    icon: MessageSquare,
  },
  {
    title: 'Social Studio',
    description: 'Manage social media marketing, listening, and analytics.',
    icon: Zap,
  },
  {
    title: 'Einstein Features',
    description: 'AI-powered insights and recommendations for marketing.',
    icon: Brain,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Unleash the Power of
            <br />
            Salesforce Marketing Cloud
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Transform your marketing strategy with powerful automation, personalization, and analytics tools.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" className="bg-[#00A1E0] hover:bg-[#0088BC]" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/info">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container flex flex-col items-center py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Explore our comprehensive suite of marketing tools designed to help you connect with your customers.
          </p>
        </div>
        <div className="mt-16 grid w-full max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <Icon className="h-10 w-10 text-[#00A1E0]" />
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="mt-2 text-[#00A1E0] hover:text-[#0088BC]" asChild>
                    <Link href="/info">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Postman Collection Section */}
      <section className="border-t bg-muted/50">
        <div className="container flex min-h-[500px] items-center py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Explore Our API Collection
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get started with our comprehensive Postman collection for Salesforce Marketing Cloud APIs.
                Streamline your integration process and explore all available endpoints.
              </p>
              <Button className="mt-8 bg-[#00A1E0] hover:bg-[#0088BC]" size="lg">
                Download Collection
              </Button>
            </div>
            <div className="flex-1">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
                alt="API Documentation"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}