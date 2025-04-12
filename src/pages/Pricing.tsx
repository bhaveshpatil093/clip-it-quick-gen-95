
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ExternalLink,
  HelpCircle,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Switch } from '@/components/ui/switch';

const PricingTier = ({ 
  name, 
  price, 
  yearlyPrice,
  description, 
  features, 
  isPopular, 
  isYearly,
  cta 
}: { 
  name: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isYearly: boolean;
  cta: string;
}) => {
  return (
    <div className={`rounded-2xl border ${isPopular ? 'border-accent bg-accent/5' : 'border-border'} p-6 flex flex-col h-full relative`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white text-xs font-bold py-1 px-3 rounded-full">
          MOST POPULAR
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="mb-4">
          <div className="text-3xl font-bold">
            {isYearly ? yearlyPrice : price}
            <span className="text-base font-normal text-muted-foreground ml-1">
              {isYearly ? '/year' : '/month'}
            </span>
          </div>
          {isYearly && (
            <div className="text-sm text-accent mt-1">
              Save {Math.round(100 - (parseFloat(yearlyPrice.replace('$', '')) / (parseFloat(price.replace('$', '')) * 12) * 100))}% with annual billing
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        className={`w-full ${isPopular ? '' : 'bg-accent/20 text-accent hover:bg-accent/30'}`}
        variant={isPopular ? "default" : "outline"}
      >
        {cta} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

const FeatureItem = ({ feature, tiers }: { feature: { name: string, description?: string }, tiers: boolean[] }) => {
  return (
    <div className="py-4 border-b border-border">
      <div className="flex items-start mb-1">
        <div className="w-1/3 pr-4">
          <div className="font-medium text-sm">{feature.name}</div>
          {feature.description && (
            <div className="text-xs text-muted-foreground mt-1">{feature.description}</div>
          )}
        </div>
        
        <div className="w-2/3 grid grid-cols-3 gap-4">
          {tiers.map((included, i) => (
            <div key={i} className="flex justify-center">
              {included ? 
                <CheckCircle className="h-5 w-5 text-accent" /> : 
                <XCircle className="h-5 w-5 text-muted-foreground/50" />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);
  
  const features = [
    { name: "Video uploads", description: "Maximum video length and file size" },
    { name: "AI-powered clips", description: "Number of clips generated per month" },
    { name: "Captions", description: "Automatic captions in multiple languages" },
    { name: "Reframing", description: "Resize videos to different aspect ratios" },
    { name: "Video storage", description: "How long we store your uploaded videos" },
    { name: "Export quality", description: "Maximum resolution for exported videos" },
    { name: "Brand customization", description: "Add your own logo and branding" },
    { name: "Priority processing", description: "Faster video processing times" },
    { name: "Advanced analytics", description: "Track performance of your videos" },
    { name: "Priority support", description: "Get help when you need it" },
  ];
  
  const featureMatrix = [
    [true, true, true],   // Video uploads
    [true, true, true],   // AI-powered clips
    [true, true, true],   // Captions
    [false, true, true],  // Reframing
    [true, true, true],   // Video storage
    [false, true, true],  // Export quality
    [false, false, true], // Brand customization
    [false, true, true],  // Priority processing
    [false, false, true], // Advanced analytics
    [false, true, true],  // Priority support
  ];
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container max-w-6xl mx-auto px-4">
        <Header />
      </div>
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-2 ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly} 
              className="mx-2"
            />
            <span className={`ml-2 ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <span className="text-xs text-accent font-bold ml-1 py-0.5 px-1.5 rounded-full bg-accent/10">Save 20%</span>
            </span>
          </div>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingTier 
              name="Free" 
              price="$0"
              yearlyPrice="$0"
              description="For individuals getting started with video content"
              isYearly={isYearly}
              features={[
                "3 videos per month (up to 10 min each)",
                "5 AI-powered clips per video",
                "Basic captions in 1 language",
                "7-day video storage",
                "720p export quality"
              ]}
              cta="Get Started Free"
            />
            
            <PricingTier 
              name="Pro" 
              price="$29"
              yearlyPrice="$276"
              description="For creators who need more power and flexibility"
              isYearly={isYearly}
              isPopular={true}
              features={[
                "20 videos per month (up to 30 min each)",
                "15 AI-powered clips per video",
                "Advanced captions in 5 languages",
                "AI reframing for all platforms",
                "30-day video storage",
                "1080p export quality",
                "Priority processing"
              ]}
              cta="Start Pro Trial"
            />
            
            <PricingTier 
              name="Business" 
              price="$79"
              yearlyPrice="$756"
              description="For teams and businesses with serious content needs"
              isYearly={isYearly}
              features={[
                "Unlimited videos (up to 60 min each)",
                "Unlimited AI-powered clips",
                "Advanced captions in all languages",
                "AI reframing for all platforms",
                "90-day video storage",
                "4K export quality",
                "Brand customization",
                "Advanced analytics",
                "Priority support & dedicated manager"
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Compare plans in detail</h2>
          
          <div className="rounded-xl border shadow-sm">
            <div className="bg-card rounded-t-xl p-6">
              <div className="flex items-center">
                <div className="w-1/3">
                  <h3 className="text-xl font-bold">Features</h3>
                </div>
                <div className="w-2/3 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-bold">Free</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold">Pro</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold">Business</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card/50">
              {features.map((feature, i) => (
                <FeatureItem 
                  key={i} 
                  feature={feature} 
                  tiers={featureMatrix[i]} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Plan */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a custom plan?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">
              We offer custom solutions for enterprises and agencies with specific requirements. 
              Contact our sales team to discuss your needs.
            </p>
            <Button size="lg" className="gap-2">
              Contact Sales <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-muted-foreground">
              Can't find the answer you're looking for? Contact our support team.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <FAQ 
              question="How does the free plan work?"
              answer={
                <p>Our free plan includes 3 videos per month (up to 10 minutes each) with 5 AI-powered clips per video. This is perfect for individuals just getting started with creating video content for social media.</p>
              }
            />
            <FAQ 
              question="Can I upgrade or downgrade my plan at any time?"
              answer={
                <p>Yes, you can upgrade your plan at any time and the new features will be immediately available. When downgrading, the change will take effect at the end of your current billing cycle.</p>
              }
            />
            <FAQ 
              question="Do you offer refunds?"
              answer={
                <p>We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.</p>
              }
            />
            <FAQ 
              question="What payment methods do you accept?"
              answer={
                <p>We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. For Business plans, we can also accommodate bank transfers and invoicing.</p>
              }
            />
            <FAQ 
              question="Is there a limit to how many videos I can process?"
              answer={
                <p>The Free plan allows 3 videos per month, the Pro plan allows 20 videos per month, and the Business plan offers unlimited video processing, subject to fair usage policy.</p>
              }
            />
            <FAQ 
              question="What does 'AI reframing' mean?"
              answer={
                <p>AI reframing automatically adjusts your videos to fit different aspect ratios (like vertical 9:16 for TikTok, square 1:1 for Instagram, or horizontal 16:9 for YouTube) while keeping the important content in frame.</p>
              }
            />
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start creating?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of creators who use Clip-it-Quick to create engaging content for every platform
            </p>
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
