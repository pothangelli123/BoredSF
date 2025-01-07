import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Navigation, Phone, MessageSquare, Share2, Zap, Brain, ArrowRight, CheckCircle } from 'lucide-react';
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
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-gray-900">
                  Salesforce Marketing Cloud Integration
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Seamlessly connect and automate your marketing operations with the world's #1 CRM platform. Transform customer experiences across every touchpoint.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-[#00A1E0] hover:bg-[#0088BC] text-white px-8"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-gray-300"
                    asChild
                  >
                    <Link href="/docs" className="flex items-center gap-2">
                      View Documentation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative mx-auto max-w-lg bg-white p-4 rounded-2xl shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dxvepj7bu/image/upload/v1708852832/marketing-analytics-dashboard_kw9f2x.webp"
                  alt="Marketing Cloud Dashboard"
                  width={600}
                  height={450}
                  className="rounded-lg w-full h-auto object-cover"
                  priority
                />
                {/* Status Indicator */}
                <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm font-medium text-gray-800">Live Integration Status</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#00A1E0]/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                {/* Additional Visual Elements */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00A1E0]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#00A1E0]/60"></div>
                      <div className="w-2 h-2 rounded-full bg-[#00A1E0]/30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10M+", label: "Marketing Messages Sent" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "150+", label: "Integration Partners" },
              { number: "24/7", label: "Expert Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#00A1E0] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need for Marketing Cloud
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive tools and features to maximize your marketing automation capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border border-gray-100 hover:border-[#00A1E0]/20 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#00A1E0]/10 mb-4">
                    <service.icon className="h-6 w-6 text-[#00A1E0]" />
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process Section */}
      

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Marketing Teams</h2>
            <p className="text-lg text-gray-600">See what our customers have to say</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Marketing Cloud has transformed how we engage with our customers. The automation capabilities are game-changing.",
                author: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechCorp Inc."
              },
              {
                quote: "The integration was seamless, and the results were immediate. Our email engagement increased by 150%.",
                author: "Michael Chen",
                role: "Digital Marketing Manager",
                company: "Growth Solutions"
              },
              {
                quote: "Outstanding support team and powerful features. Exactly what we needed to scale our marketing efforts.",
                author: "Emily Rodriguez",
                role: "CMO",
                company: "Innovation Labs"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-lg">
                <CardHeader>
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-lg mb-4">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-[#00A1E0]">{testimonial.company}</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
}