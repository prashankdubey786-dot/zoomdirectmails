import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, BarChart3, Users, DollarSign } from "lucide-react"
import type { Metadata } from "next"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Direct Mail Marketing Services Dallas | High Response Rates | Zoom direct mail",
  description:
    "Professional direct mail marketing in Dallas, TX. Achieve 3-5% response rates with targeted campaigns, custom design, and detailed analytics. Free consultation and quote available.",
  keywords: [
    "direct mail marketing Dallas",
    "direct mail services Texas",
    "targeted mail campaigns",
    "direct mail company Dallas",
    "personalized direct mail",
    "direct mail ROI",
    "mail marketing Dallas",
    "direct mail advertising",
  ],
  openGraph: {
    title: "Direct Mail Marketing Services Dallas | High Response Rates",
    description:
      "Professional direct mail marketing in Dallas, TX. Achieve 3-5% response rates with targeted campaigns and custom design.",
    images: ["/placeholder.svg?height=630&width=1200&text=Direct+Mail+Marketing+Dallas"],
  },
}

const directMailFAQs = [
  {
    question: "What is the average response rate for direct mail campaigns?",
    answer:
      "Our direct mail campaigns typically achieve response rates of 3-5%, which is significantly higher than the 0.6% average for email marketing. With highly targeted campaigns and compelling offers, response rates can reach 8-12%.",
  },
  {
    question: "How do you target the right audience for direct mail?",
    answer:
      "We use advanced demographic, psychographic, and behavioral data to identify your ideal customers. Our targeting options include age, income, family size, geographic location, purchase history, and lifestyle interests to ensure your message reaches the most receptive audience.",
  },
  {
    question: "What types of mail pieces can you create?",
    answer:
      'We create various mail formats including postcards (4"x6" to 6"x11"), letters with personalized messaging, brochures, catalogs, and dimensional mailers. Each format is chosen based on your campaign goals and budget.',
  },
  {
    question: "How much does a direct mail campaign cost?",
    answer:
      "Direct mail costs typically range from $0.75 to $2.50 per piece, including design, printing, postage, and mailing services. Costs vary based on quantity, mail piece size, paper quality, and targeting complexity. We provide detailed quotes for every project.",
  },
  {
    question: "Can you track the results of direct mail campaigns?",
    answer:
      "Yes, we provide comprehensive tracking through unique phone numbers, QR codes, personalized URLs (PURLs), and coupon codes. We deliver detailed reports showing response rates, conversion rates, and ROI calculations.",
  },
  {
    question: "How long does it take to complete a direct mail campaign?",
    answer:
      "Standard direct mail campaigns take 7-10 business days from final approval to delivery. This includes design finalization, printing, list processing, and USPS delivery. Rush services are available for urgent campaigns.",
  },
  {
    question: "Do you provide mailing lists or do I need my own?",
    answer:
      "We provide both services. We can source targeted mailing lists based on your ideal customer profile, or we can work with your existing customer database. We also offer list cleaning and enhancement services to improve deliverability.",
  },
  {
    question: "What makes direct mail more effective than digital marketing?",
    answer:
      "Direct mail has a 90% open rate compared to 20-25% for email. It creates a physical connection, has longer shelf life, faces less competition in mailboxes, and can be highly personalized. It's particularly effective when integrated with digital marketing efforts.",
  },
]

export default function DirectMailPage() {
  return (
    <div className="flex flex-col">
      {/* Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Direct Mail Marketing Services",
            description:
              "Professional direct mail marketing services in Dallas, TX with targeted campaigns, custom design, and detailed analytics.",
            provider: {
              "@type": "Organization",
              name: "Zoom direct mail",
            },
            areaServed: {
              "@type": "Place",
              name: "Dallas, TX",
            },
            offers: {
              "@type": "Offer",
              description: "Direct mail marketing campaigns starting at $0.75 per piece",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Direct Mail Marketing Services in Dallas</h1>
              <p className="text-xl mb-8 text-blue-100">
                Reach your target audience with precision-targeted direct mail campaigns that deliver measurable results
                and exceptional ROI. Achieve 3-5% response rates with our proven strategies.
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="hover:scale-105 transition-transform duration-200"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-kGeU2xlKvtoZVOuC9k8tv0mwmFX2nr.png"
                alt="Zoom direct mail Services - Professional Mail Marketing in Dallas"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Direct Mail Still Dominates Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In our digital world, direct mail stands out by delivering tangible, personal connections that drive real
              business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors duration-300">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5.3% Response Rate</h3>
              <p className="text-gray-600">Average response rate for direct mail vs 0.6% for email</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors duration-300">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precise Targeting</h3>
              <p className="text-gray-600">Target by demographics, income, location, and behavior</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors duration-300">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">$12 ROI</h3>
              <p className="text-gray-600">Average return for every $1 spent on direct mail</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">90% Open Rate</h3>
              <p className="text-gray-600">People open and look at their physical mail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Direct Mail Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to delivery, we handle every aspect of your direct mail campaign to ensure maximum impact
              and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Mailing+List+Targeting+Dallas"
                alt="Mailing List Targeting in Dallas"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Targeted Mailing Lists</h3>
              <p className="text-gray-600 mb-6">
                Our advanced targeting capabilities ensure your message reaches the right people. We use demographic,
                psychographic, and behavioral data to identify your ideal customers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Demographic targeting (age, income, family size)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Geographic targeting (radius, zip codes, neighborhoods)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Behavioral targeting (purchase history, interests)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Custom list building and data enhancement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Professional Design & Printing</h3>
              <p className="text-gray-600 mb-6">
                Our creative team designs compelling mail pieces that capture attention and drive action. We use premium
                materials and advanced printing techniques for maximum impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Custom design services with unlimited revisions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Variable data printing for personalization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Premium paper stocks and finishing options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Quality control and proofing process</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/placeholder.svg?height=400&width=600&text=Professional+Mail+Design+Dallas"
                alt="Professional Mail Design in Dallas"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Campaign+Analytics+Dashboard+Dallas"
                alt="Campaign Analytics Dashboard"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Campaign Tracking & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Measure the success of your campaigns with detailed tracking and analytics. We provide comprehensive
                reporting to help you understand your ROI and optimize future campaigns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Response rate tracking and analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>ROI calculation and reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>A/B testing for optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                  <span>Detailed campaign performance reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mail Formats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Direct Mail Formats We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of mail formats to best suit your campaign goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=300&text=Postcard+Mailer+Dallas"
                  alt="Postcard Mailer Dallas"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Postcards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cost-effective and high-impact. Perfect for promotions, announcements, and quick messages.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 4"x6", 5"x7", 6"x9" sizes</li>
                  <li>• Full-color printing</li>
                  <li>• Quick turnaround</li>
                  <li>• Lower postage costs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=300&text=Letter+Mailer+Dallas"
                  alt="Letter Mailer Dallas"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Letters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Personal and professional. Ideal for detailed information and formal communications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personalized messaging</li>
                  <li>• Professional appearance</li>
                  <li>• Higher response rates</li>
                  <li>• Variable data printing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <img
                  src="/placeholder.svg?height=200&width=300&text=Brochure+Mailer+Dallas"
                  alt="Brochure Mailer Dallas"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle>Brochures & Catalogs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive information delivery. Great for product showcases and detailed service descriptions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multiple page formats</li>
                  <li>• Rich visual content</li>
                  <li>• Detailed product information</li>
                  <li>• Premium paper options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Direct Mail Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your direct mail campaign delivers maximum results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-blue-700 transition-colors duration-300">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
              <p className="text-gray-600">
                We analyze your goals, target audience, and budget to develop a comprehensive campaign strategy.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-blue-700 transition-colors duration-300">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Creative</h3>
              <p className="text-gray-600">
                Our creative team designs compelling mail pieces that capture attention and drive action.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-blue-700 transition-colors duration-300">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Print & Mail</h3>
              <p className="text-gray-600">
                We handle printing, addressing, and mailing to ensure timely and accurate delivery.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-blue-700 transition-colors duration-300">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Optimize</h3>
              <p className="text-gray-600">
                We track results and provide detailed analytics to measure campaign performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Direct Mail Marketing FAQ" faqs={directMailFAQs} />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Direct Mail Campaign?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and custom quote for your Dallas business.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform duration-200">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
