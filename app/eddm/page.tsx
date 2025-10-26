import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, Clock, Target, Users } from "lucide-react"
import type { Metadata } from "next"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "EDDM Services Dallas | Every Door Direct Mail | Zoom direct mail",
  description:
    "Professional EDDM services in Dallas, TX. Reach every household in your target area for just $0.20 per piece. No mailing lists required. Fast 3-5 day delivery. Get your free quote today.",
  keywords: [
    "EDDM Dallas",
    "Every Door Direct Mail Dallas",
    "EDDM services Texas",
    "neighborhood marketing Dallas",
    "local advertising Dallas",
    "EDDM postcard printing",
    "geographic targeting Dallas",
    "USPS EDDM Dallas",
  ],
  openGraph: {
    title: "EDDM Services Dallas | Every Door Direct Mail",
    description:
      "Professional EDDM services in Dallas, TX. Reach every household in your target area for just $0.20 per piece. No mailing lists required.",
    images: ["/placeholder.svg?height=630&width=1200&text=EDDM+Services+Dallas"],
  },
}

const eddmFAQs = [
  {
    question: "What is EDDM and how does it work?",
    answer:
      "Every Door Direct Mail (EDDM) is a USPS service that allows you to send mail to every address in selected postal routes without needing a mailing list. You simply choose the postal routes that match your target demographics, and your mail pieces are delivered to every household and business in those areas.",
  },
  {
    question: "How much does EDDM cost compared to regular direct mail?",
    answer:
      "EDDM typically costs around $0.20 per piece for postage, compared to $0.55+ for standard direct mail. When including design and printing, total costs range from $0.45-$0.85 per piece, making it significantly more cost-effective for local businesses.",
  },
  {
    question: "What are the size and quantity requirements for EDDM?",
    answer:
      'EDDM pieces must be between 6.125" x 11.5" (minimum) and 12" x 15" (maximum), with thickness between 0.007" and 0.016". You must mail a minimum of 200 pieces per route and maximum of 5,000 pieces per route, covering the entire route without skipping addresses.',
  },
  {
    question: "How do I choose the right postal routes for my EDDM campaign?",
    answer:
      "We help you select routes based on demographics like household income, age, family size, and home values. Using USPS mapping tools and demographic data, we identify routes that match your ideal customer profile within your desired geographic area.",
  },
  {
    question: "How long does an EDDM campaign take to complete?",
    answer:
      "EDDM campaigns typically take 5-7 business days from final approval to delivery. This includes design finalization, printing, USPS preparation, and delivery. The process is faster than traditional direct mail since no list processing is required.",
  },
  {
    question: "What types of businesses benefit most from EDDM?",
    answer:
      "EDDM is ideal for local businesses including restaurants, retail stores, home services (HVAC, plumbing, landscaping), healthcare practices, fitness centers, automotive services, and any business that serves customers within specific geographic areas.",
  },
  {
    question: "Can I track the results of my EDDM campaign?",
    answer:
      "Yes, we can include tracking elements like unique phone numbers, QR codes, special offer codes, or personalized URLs. While EDDM doesn't allow individual addressing, these methods help measure response rates and campaign effectiveness.",
  },
  {
    question: "Do you handle all the USPS paperwork and requirements?",
    answer:
      "Absolutely. We handle all USPS paperwork, bundling requirements, and delivery to the post office. Our team ensures your EDDM pieces meet all postal requirements and are properly prepared for efficient delivery.",
  },
]

export default function EDDMPage() {
  return (
    <div className="flex flex-col">
      {/* Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "EDDM Services",
            description:
              "Every Door Direct Mail services in Dallas, TX. Reach every household in your target area without mailing lists.",
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
              description: "EDDM campaigns starting at $0.45 per piece including design and printing",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">EDDM Services in Dallas - Every Door Direct Mail</h1>
              <p className="text-xl mb-8 text-green-100">
                Reach every household in your target area with cost-effective EDDM campaigns. No mailing lists required
                - just choose your neighborhoods and we'll handle the rest. Starting at just $0.20 per piece postage.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-632ltbSXl1XyAjG2nTlCHMwENPfPjQ.png"
                alt="Zoom direct mail EDDM Services - Every Door Direct Mail in Dallas"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EDDM Benefits Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EDDM by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why EDDM is the preferred choice for local businesses looking to maximize their marketing reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">$0.20</h3>
              <p className="text-gray-600">Average cost per piece (vs $0.55 standard mail)</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">3-5 Days</h3>
              <p className="text-gray-600">Faster delivery timeline</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">100%</h3>
              <p className="text-gray-600">Coverage of selected routes</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">5,000</h3>
              <p className="text-gray-600">Maximum pieces per route</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is EDDM Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is EDDM?</h2>
              <p className="text-xl text-gray-600 mb-6">
                Every Door Direct Mail is a USPS service that allows you to send mail to every address in selected
                postal routes without needing a mailing list.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">No Mailing Lists Required</h3>
                    <p className="text-gray-600">Skip the cost and complexity of purchasing mailing lists.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Geographic Precision</h3>
                    <p className="text-gray-600">Target specific neighborhoods, zip codes, or postal routes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Cost-Effective Postage</h3>
                    <p className="text-gray-600">EDDM rates are significantly lower than standard postage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600&text=EDDM+Route+Selection+Map+Dallas"
                alt="EDDM Route Selection Map Dallas"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EDDM vs Traditional Mail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EDDM vs Traditional Direct Mail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how EDDM compares to traditional direct mail marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">EDDM</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>No mailing list required</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Lower postage costs ($0.20 vs $0.55)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Faster setup and delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>100% coverage of selected areas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Perfect for local businesses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span>Simplified USPS requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-gray-800">Traditional Direct Mail</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Requires purchased mailing lists</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Higher postage costs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Longer setup time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Precise demographic targeting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Personalization options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Advanced tracking capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EDDM Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EDDM Requirements & Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To qualify for EDDM, your mail pieces must meet specific USPS requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Size Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=150&width=250&text=EDDM+Size+Guide+Dallas"
                  alt="EDDM Size Requirements Dallas"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum: 6.125" x 11.5"</li>
                  <li>• Maximum: 12" x 15"</li>
                  <li>• Thickness: 0.007" to 0.016"</li>
                  <li>• Weight: Maximum 3.3 oz</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Quantity Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=150&width=250&text=EDDM+Quantity+Guide+Dallas"
                  alt="EDDM Quantity Requirements Dallas"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum 200 pieces per route</li>
                  <li>• Maximum 5,000 pieces per route</li>
                  <li>• Must mail to entire postal route</li>
                  <li>• Cannot skip addresses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Design Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg?height=150&width=250&text=EDDM+Design+Guide+Dallas"
                  alt="EDDM Design Requirements Dallas"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <ul className="space-y-2 text-gray-600">
                  <li>• EDDM indicia required</li>
                  <li>• No addressing needed</li>
                  <li>• Full-color printing allowed</li>
                  <li>• Professional design recommended</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect for Local Dallas Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EDDM is ideal for businesses that want to reach customers in specific geographic areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="/images/restaurant-postcard.jpg"
                alt="Restaurant EDDM Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
              <p className="text-gray-600">Grand openings, menu promotions, special events, and seasonal offers.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="/images/retail-postcard.jpg"
                alt="Retail EDDM Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Retail Stores</h3>
              <p className="text-gray-600">Sales events, new product launches, and store opening announcements.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="/images/service-postcard.jpg"
                alt="Service Business EDDM Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Service Providers</h3>
              <p className="text-gray-600">HVAC, plumbing, landscaping, and other home service businesses.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="/images/healthcare-postcard.jpg"
                alt="Healthcare EDDM Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">Medical practices, dental offices, and wellness centers.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="/images/fitness-postcard.jpg"
                alt="Fitness EDDM Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Fitness Centers</h3>
              <p className="text-gray-600">Membership promotions, class schedules, and facility announcements.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="/images/event-postcard.jpg"
                alt="Event EDDM Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600">Community events, festivals, and local entertainment venues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our EDDM Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make EDDM simple and effective for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-green-700 transition-colors duration-300">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Route Selection</h3>
              <p className="text-gray-600">
                We help you select the best postal routes based on your target demographics and business goals.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-green-700 transition-colors duration-300">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Print</h3>
              <p className="text-gray-600">
                Our team creates EDDM-compliant designs and handles high-quality printing with fast turnaround.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-green-700 transition-colors duration-300">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">USPS Preparation</h3>
              <p className="text-gray-600">
                We handle all USPS paperwork, bundling, and preparation to ensure smooth delivery.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:bg-green-700 transition-colors duration-300">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">
                Your EDDM pieces are delivered to every address in your selected routes within 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="EDDM Frequently Asked Questions" faqs={eddmFAQs} />

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Reach Every Door in Dallas?</h2>
          <p className="text-xl mb-8 text-green-100">
            Start your EDDM campaign today and reach every household in your target area.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform duration-200">
            <Link href="/contact">Get EDDM Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
