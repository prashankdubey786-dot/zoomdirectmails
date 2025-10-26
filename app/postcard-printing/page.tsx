import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Printer, Clock, Shield, Award } from "lucide-react"
import type { Metadata } from "next"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Postcard Printing Dallas | Professional Quality | Fast Turnaround | Zoom direct mail",
  description:
    "Professional postcard printing in Dallas, TX. Premium materials, vibrant colors, fast turnaround. Starting at $0.35 per postcard. Custom design services available. Get your free quote today.",
  keywords: [
    "postcard printing Dallas",
    "custom postcard printing Texas",
    "marketing postcards Dallas",
    "postcard design Dallas",
    "business postcards Dallas",
    "promotional postcards Texas",
    "high quality postcard printing",
    "fast postcard printing Dallas",
  ],
  openGraph: {
    title: "Postcard Printing Dallas | Professional Quality | Fast Turnaround",
    description:
      "Professional postcard printing in Dallas, TX. Premium materials, vibrant colors, fast turnaround. Starting at $0.35 per postcard.",
    images: ["/placeholder.svg?height=630&width=1200&text=Postcard+Printing+Dallas"],
  },
}

const postcardFAQs = [
  {
    question: "What sizes of postcards can you print?",
    answer:
      'We offer standard sizes including 4"x6" (most popular), 5"x7", 6"x9", and 6"x11". We also provide custom sizes to meet your specific needs. All sizes are available with various paper stocks and finishing options.',
  },
  {
    question: "How much does postcard printing cost?",
    answer:
      'Our postcard printing starts at $0.35 per piece for standard 4"x6" postcards on 14pt cardstock. Premium options with larger sizes, thicker paper, and special finishes range from $0.45-$0.75 per piece. We provide detailed quotes based on your specifications.',
  },
  {
    question: "What paper options are available for postcards?",
    answer:
      "We offer 14pt and 16pt cardstock, 100lb gloss and matte cover stock, and recycled paper options. Each paper type provides different feels and appearances, from professional matte finishes to vibrant gloss options that make colors pop.",
  },
  {
    question: "Do you provide design services for postcards?",
    answer:
      "Yes, our experienced design team creates professional, eye-catching postcards that drive results. We offer custom design services with unlimited revisions, or you can provide your own print-ready artwork. We ensure all designs meet postal requirements.",
  },
  {
    question: "How long does postcard printing take?",
    answer:
      "Standard postcard printing takes 3-5 business days from final artwork approval. Rush services are available for 1-2 day turnaround with additional fees. We also offer same-day printing for urgent projects with advance notice.",
  },
  {
    question: "What finishing options do you offer?",
    answer:
      "We provide gloss coating, matte coating, UV coating for extra durability and shine, spot UV for selective highlighting, and rounded corners for a premium look. Each finishing option enhances the appearance and feel of your postcards.",
  },
  {
    question: "Can you handle both printing and mailing services?",
    answer:
      "We offer complete postcard campaigns including design, printing, mailing list acquisition, and direct mail services. This one-stop solution saves you time and ensures consistent quality throughout your campaign.",
  },
  {
    question: "What file formats do you accept for postcard printing?",
    answer:
      "We accept PDF (preferred), AI, EPS, and high-resolution JPG or PNG files. Files should be print-ready with proper bleeds, resolution of 300 DPI, and CMYK color mode. Our design team can help prepare files if needed.",
  },
  {
    question: "Do you offer quantity discounts for large orders?",
    answer:
      "Yes, we offer significant discounts for larger quantities. Pricing decreases substantially at 1,000, 2,500, 5,000, and 10,000+ piece quantities. Contact us for volume pricing on your specific project requirements.",
  },
]

export default function PostcardPrintingPage() {
  return (
    <div className="flex flex-col">
      {/* Schema Markup for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Postcard Printing Services",
            description:
              "Professional postcard printing services in Dallas, TX with premium materials, custom design, and fast turnaround times.",
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
              description: "Postcard printing starting at $0.35 per piece",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Postcard Printing in Dallas</h1>
              <p className="text-xl mb-8 text-purple-100">
                High-quality postcard printing with premium materials, vibrant colors, and fast turnaround times.
                Perfect for marketing campaigns and special announcements. Starting at just $0.35 per postcard.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-gwgtvoaxiGL9xVQqyQyDZ08Rc8joRM.png"
                alt="Zoom direct mail Professional Postcard Printing Facility in Dallas"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Quality Promise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use state-of-the-art printing technology and premium materials to ensure your postcards make a lasting
              impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 transition-colors duration-300">
                <Printer className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">HD Printing</h3>
              <p className="text-gray-600">High-definition printing with vibrant, accurate colors</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-600">High-quality cardstock and paper options</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 transition-colors duration-300">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick production and delivery times</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 transition-colors duration-300">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">Quality guarantee with every order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Postcard Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Postcard Gallery - Dallas Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See examples of our high-quality postcard printing across different industries and styles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src="/images/restaurant-postcard.jpg"
                alt="Restaurant Postcard Dallas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Restaurant Promotion</h3>
                <p className="text-gray-600 text-sm">Grand opening announcement with special offers</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src="/images/retail-postcard.jpg"
                alt="Retail Store Postcard Dallas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Retail Sale Event</h3>
                <p className="text-gray-600 text-sm">Seasonal promotion with discount offers</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src="/images/healthcare-postcard.jpg"
                alt="Healthcare Postcard Dallas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Healthcare Services</h3>
                <p className="text-gray-600 text-sm">Medical practice patient outreach</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src="/images/service-postcard.jpg"
                alt="Service Business Postcard Dallas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Home Services</h3>
                <p className="text-gray-600 text-sm">HVAC maintenance reminder campaign</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img
                src="/images/fitness-postcard.jpg"
                alt="Fitness Center Postcard Dallas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Fitness Programs</h3>
                <p className="text-gray-600 text-sm">Membership promotions and class schedules</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img src="/images/event-postcard.jpg" alt="Event Postcard Dallas" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Event Announcement</h3>
                <p className="text-gray-600 text-sm">Community event invitation and details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Postcard Printing Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of sizes, paper stocks, and finishing options to create the perfect postcards for
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <img
                  src="/images/standard-sizes.png"
                  alt="Postcard Sizes Dallas"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <CardTitle>Standard Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4" x 6" (Most Popular)</li>
                  <li>• 5" x 7"</li>
                  <li>• 6" x 9"</li>
                  <li>• 6" x 11"</li>
                  <li>• Custom sizes available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <img
                  src="/images/paper-options.png"
                  alt="Paper Options Dallas"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <CardTitle>Paper Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 14pt Cardstock</li>
                  <li>• 16pt Cardstock</li>
                  <li>• 100lb Gloss Cover</li>
                  <li>• 100lb Matte Cover</li>
                  <li>• Recycled options available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <img
                  src="/images/finishing-options.png"
                  alt="Finishing Options Dallas"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <CardTitle>Finishing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gloss coating</li>
                  <li>• Matte coating</li>
                  <li>• UV coating</li>
                  <li>• Spot UV</li>
                  <li>• Rounded corners</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Tips for Effective Postcards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these best practices to create postcards that capture attention and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Postcard+Design+Best+Practices+Dallas"
                alt="Postcard Design Best Practices Dallas"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Design Best Practices</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Bold Headlines</h4>
                    <p className="text-gray-600">
                      Use large, bold headlines that grab attention and communicate your main message instantly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">High-Quality Images</h4>
                    <p className="text-gray-600">
                      Use professional, high-resolution images that support your message and brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Clear Call-to-Action</h4>
                    <p className="text-gray-600">
                      Include a prominent, specific call-to-action that tells recipients exactly what to do next.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Contact Information</h4>
                    <p className="text-gray-600">
                      Make it easy for customers to reach you with clear contact details and website information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Front Side Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Eye-catching headline</li>
                  <li>• Compelling imagery</li>
                  <li>• Brand logo placement</li>
                  <li>• Key benefit statement</li>
                  <li>• Consistent color scheme</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Back Side Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clear call-to-action</li>
                  <li>• Contact information</li>
                  <li>• Offer details</li>
                  <li>• Website/social media</li>
                  <li>• Address space (if mailed)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle>Typography Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use readable fonts</li>
                  <li>• Maintain font hierarchy</li>
                  <li>• Ensure proper contrast</li>
                  <li>• Limit font varieties</li>
                  <li>• Consider print size</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Postcard Printing Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees or surprises. Our pricing is straightforward and competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle>Standard</CardTitle>
                <div className="text-3xl font-bold text-purple-600">$0.35</div>
                <div className="text-gray-600">per postcard</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4"x6" size</li>
                  <li>• 14pt cardstock</li>
                  <li>• Full-color printing</li>
                  <li>• Gloss or matte finish</li>
                  <li>• 5-7 day turnaround</li>
                </ul>
                <Button
                  className="w-full mt-4 hover:scale-105 transition-transform duration-200 bg-transparent"
                  variant="outline"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 relative hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle>Premium</CardTitle>
                <div className="text-3xl font-bold text-purple-600">$0.45</div>
                <div className="text-gray-600">per postcard</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5"x7" or 6"x9" size</li>
                  <li>• 16pt cardstock</li>
                  <li>• Full-color printing</li>
                  <li>• UV coating available</li>
                  <li>• 3-5 day turnaround</li>
                </ul>
                <Button className="w-full mt-4 hover:scale-105 transition-transform duration-200">Get Quote</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle>Custom</CardTitle>
                <div className="text-3xl font-bold text-purple-600">Quote</div>
                <div className="text-gray-600">based on specs</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom sizes</li>
                  <li>• Premium materials</li>
                  <li>• Special finishes</li>
                  <li>• Design services</li>
                  <li>• Rush delivery available</li>
                </ul>
                <Button
                  className="w-full mt-4 hover:scale-105 transition-transform duration-200 bg-transparent"
                  variant="outline"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Postcard Printing FAQ" faqs={postcardFAQs} />

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Print Your Postcards?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Get a free quote and see how our premium postcard printing can boost your Dallas marketing.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform duration-200">
            <Link href="/contact">Get Printing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
