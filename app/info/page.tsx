import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, BarChart, CheckCircle, Users } from 'lucide-react';

const features = {
  emailStudio: {
    title: 'Email Studio',
    description: 'Create and automate personalized email campaigns at scale.',
    features: [
      'Drag-and-drop email builder',
      'Dynamic content blocks',
      'A/B testing capabilities',
      'Advanced segmentation',
      'Real-time analytics',
    ],
    caseStudy: {
      company: 'Global Retail Corp',
      result: '45% increase in email engagement',
      description: 'Achieved significant improvement in customer engagement through personalized email campaigns.',
    },
  },
  journeyBuilder: {
    title: 'Journey Builder',
    description: 'Design and automate customer journeys across all channels.',
    features: [
      'Visual journey mapping',
      'Cross-channel orchestration',
      'Behavioral triggers',
      'Custom activity builder',
      'Journey analytics',
    ],
    caseStudy: {
      company: 'Tech Solutions Inc',
      result: '3x customer retention rate',
      description: 'Implemented automated customer onboarding journey leading to improved retention.',
    },
  },
  mobileStudio: {
    title: 'Mobile Studio',
    description: 'Engage customers with SMS, push notifications, and group messaging.',
    features: [
      'SMS campaign management',
      'Push notification builder',
      'Location-based messaging',
      'Mobile app messaging',
      'Mobile analytics',
    ],
    caseStudy: {
      company: 'Fashion Brand X',
      result: '2.5x mobile engagement',
      description: 'Increased store visits through targeted location-based mobile messaging.',
    },
  },
};

export default function InfoPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-4xl font-bold">
          Salesforce Marketing Cloud Features
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Explore our comprehensive suite of marketing tools and features.
        </p>

        <Tabs defaultValue="emailStudio" className="mt-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="emailStudio">Email Studio</TabsTrigger>
            <TabsTrigger value="journeyBuilder">Journey Builder</TabsTrigger>
            <TabsTrigger value="mobileStudio">Mobile Studio</TabsTrigger>
          </TabsList>
          {Object.entries(features).map(([key, feature]) => (
            <TabsContent key={key} value={key}>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold">{feature.title}</h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="mt-4 space-y-4">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="mt-8">Learn More</Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Case Study</CardTitle>
                    <CardDescription>{feature.caseStudy.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Award className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-semibold">{feature.caseStudy.result}</p>
                          <p className="text-sm text-muted-foreground">Achievement</p>
                        </div>
                      </div>
                      <p>{feature.caseStudy.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Users className="h-8 w-8 text-primary" />
                    <CardTitle className="mt-4">User Adoption</CardTitle>
                    <CardDescription>95% user satisfaction rate</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <BarChart className="h-8 w-8 text-primary" />
                    <CardTitle className="mt-4">Performance</CardTitle>
                    <CardDescription>2x faster campaign deployment</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Award className="h-8 w-8 text-primary" />
                    <CardTitle className="mt-4">Recognition</CardTitle>
                    <CardDescription>Industry leading solution</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}