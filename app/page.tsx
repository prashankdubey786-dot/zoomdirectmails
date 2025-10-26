import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Target, Printer, TrendingUp, Users, Award, Star } from "lucide-react"
import type { Metadata } from "next"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Professional Direct Marketing Solutions | Zoom direct mail Dallas",
  description:
    "Zoom direct mail delivers results-driven direct mail, EDDM, and postcard printing services in Dallas, TX. 15+ years experience, 10M+ pieces delivered, 98% client satisfaction. Get your free quote today.",
  keywords: [
    "direct marketing Dallas",
    "direct mail services Texas",
    "EDDM Dallas",
    "postcard printing Dallas",
    "marketing campaigns Dallas",
    "local advertising Dallas",
    "direct mail company Dallas",
    "targeted marketing Texas",
  ],
  openGraph: {
    title: "Professional Direct Marketing Solutions | Zoom direct mail Dallas",
    description:
      "Zoom direct mail delivers results-driven direct mail, EDDM, and postcard printing services in Dallas, TX. 15+ years experience, 10M+ pieces delivered.",
    images: ["/images/zoom-logo.png"],
  },
}

const homeFAQs = [
  {
    question: "What types of direct marketing services does Zoom direct mail offer?",
    answer:
      "Zoom direct mail specializes in three main services: Direct Mail Marketing with targeted campaigns and personalized messaging, Every Door Direct Mail (EDDM) for comprehensive neighborhood coverage, and Professional Postcard Printing with premium materials and fast turnaround times.",
  },
  {
    question: "How much does direct mail marketing cost?",
    answer:
      "Direct mail costs vary based on quantity, design complexity, and targeting requirements. Our campaigns typically range from $0.75 to $2.50 per piece including design, printing, postage, and mailing services. We provide free quotes tailored to your specific needs and budget.",
  },
  {
    question: "What is the typical response rate for direct mail campaigns?",
    answer:
      "Our direct mail campaigns achieve an average response rate of 3-5%, significantly higher than the 0.6% average for email marketing. Response rates can reach 8-12% with highly targeted campaigns and compelling offers.",
  },
  {
    question: "How long does it take to complete a direct mail campaign?",
    answer:
      "Standard direct mail campaigns take 7-10 business days from approval to delivery. EDDM campaigns are faster at 5-7 business days. Rush services are available for urgent campaigns with 3-5 day turnaround.",
  },
  {
    question: "Do you provide design services for mail pieces?",
    answer:
      "Yes, our experienced design team creates professional, eye-catching mail pieces that drive results. We offer unlimited revisions and ensure all designs meet postal requirements and best practices for maximum response rates.",
  },
  {
    question: "What areas do you serve for direct marketing services?",
    answer:
      "While based in Dallas, TX, we serve clients nationwide. We have extensive experience with Texas markets including Dallas, Fort Worth, Houston, Austin, and San Antonio, as well as major metropolitan areas across the United States.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Zoom direct mail",
            image: "https://cherrytech.co/images/zoom-logo.png",
            description:
              "Professional direct marketing solutions including direct mail, EDDM, and postcard printing services in Dallas, TX.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "800 Secretary Dr, Suite D",
              addressLocality: "Arlington",
              addressRegion: "TX",
              postalCode: "76015",
            },
            telephone: "+1-555-123-4567",
            url: "https://cherrytech.co",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Direct Marketing Solutions in Dallas, TX
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Reach your target customers with precision through our comprehensive direct mail, EDDM, and postcard
                printing services. Maximize your ROI with data-driven campaigns that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-transparent hover:bg-white hover:text-red-600 hover:scale-105 transition-all duration-200"
                  asChild
                >
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/images/zoom-logo.png"
                alt="Zoom direct mail - Direct Mail and EDDM Services in Dallas"
                className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-red-600 mb-2">10M+</div>
              <div className="text-gray-600">Mail Pieces Delivered</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Direct Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive direct marketing solutions designed to help your business connect with customers and drive
              measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <Mail className="h-12 w-12 text-red-600 mb-4 hover:scale-110 transition-transform duration-200" />
                <CardTitle>Direct Mail Marketing</CardTitle>
                <CardDescription>
                  Targeted mail campaigns that reach your ideal customers with personalized messaging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Targeted mailing lists</li>
                  <li>• Custom design services</li>
                  <li>• Variable data printing</li>
                  <li>• Campaign tracking & analytics</li>
                </ul>
                <Button asChild className="w-full hover:scale-105 transition-transform duration-200">
                  <Link href="/direct-mail">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4 hover:scale-110 transition-transform duration-200" />
                <CardTitle>EDDM Services</CardTitle>
                <CardDescription>
                  Every Door Direct Mail - Cost-effective way to reach entire neighborhoods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• No mailing lists required</li>
                  <li>• Geographic targeting</li>
                  <li>• Reduced postage costs</li>
                  <li>• Quick turnaround times</li>
                </ul>
                <Button asChild className="w-full hover:scale-105 transition-transform duration-200">
                  <Link href="/eddm">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <Printer className="h-12 w-12 text-red-600 mb-4 hover:scale-110 transition-transform duration-200" />
                <CardTitle>Postcard Printing</CardTitle>
                <CardDescription>
                  High-quality postcard printing with professional design and fast delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Premium paper stocks</li>
                  <li>• Full-color printing</li>
                  <li>• Multiple sizes available</li>
                  <li>• Professional design support</li>
                </ul>
                <Button asChild className="w-full hover:scale-105 transition-transform duration-200">
                  <Link href="/postcard-printing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve in Dallas & Beyond
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our direct marketing expertise spans across multiple industries, delivering targeted campaigns that drive
              results for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restaurant-fGXWV7QBvmbByJDIXFKoRXsYVhPkJy.png"
                alt="Restaurant Marketing Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Restaurants & Food Service</h3>
              <p className="text-gray-600">Grand openings, menu promotions, and customer retention campaigns.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Real-Estate-sruWdfAmlCxaWvurh2zXqhRIudM1ly.png"
                alt="Real Estate Marketing Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-600">Property listings, market updates, and neighborhood farming campaigns.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Healthcare-AJFavix1fcD5E3DJYuEcAGMZla9I8A.png"
                alt="Healthcare Marketing Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">Patient outreach, wellness programs, and service announcements.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Retail-nvHFlr2wE0sx1UWiZ9kDN01XZPQWuq.png"
                alt="Retail Marketing Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Retail</h3>
              <p className="text-gray-600">Sales events, new product launches, and customer loyalty programs.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home-Care-lCSudQtDYi7XyvDFk44KXpphK3Vxb6.png"
                alt="Home Services Marketing Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Home Services</h3>
              <p className="text-gray-600">Seasonal promotions, service reminders, and local area targeting.</p>
            </div>

            <div className="text-center p-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automotive-78v0BbAlhI2G1Rr2Mk6U8q9n5KKa2q.png"
                alt="Automotive Marketing Dallas"
                className="w-full h-48 object-cover rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Automotive</h3>
              <p className="text-gray-600">Service reminders, sales events, and new model announcements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zoom direct mail for Direct Marketing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven marketing strategies to deliver exceptional results for
              your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors duration-300">
                <TrendingUp className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our campaigns consistently deliver higher response rates and ROI compared to industry averages.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors duration-300">
                <Users className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced marketing professionals provide strategic guidance and creative excellence.
              </p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors duration-300">
                <Award className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with a satisfaction guarantee and premium quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Dallas Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have achieved remarkable results with our
              direct marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Zoom direct mail's EDDM campaign helped us reach 5,000 households in our target area. We saw a 15%
                  increase in foot traffic within the first week!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-a5UKq0dfJyCFm1iZuOUmo4jfWQBwJj.png"
                    alt="Milly George - Restaurant Owner"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">Milly George</p>
                    <p className="text-sm text-gray-600">Owner, Bella's Bistro</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The targeted direct mail campaign generated 200+ qualified leads for our real estate business. The
                  ROI was exceptional!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-loWFRcwkkiPowviWn4AOIMPeyEKJFB.png"
                    alt="Timmy J. - Realtor"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">Timmy J.</p>
                    <p className="text-sm text-gray-600">Realtor, Dallas Properties</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional service from start to finish. The postcard design was beautiful and the response rate
                  exceeded our expectations."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-itQuivvfBzcfO22NvQEUHVIBJQYMZI.png"
                    alt="Lia M. - Marketing Director"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">Lia M.</p>
                    <p className="text-sm text-gray-600">Marketing Director, HealthFirst Clinic</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Frequently Asked Questions About Direct Marketing" faqs={homeFAQs} />

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Direct Marketing Campaign?</h2>
          <p className="text-xl mb-8 text-red-100">
            Get a free consultation and quote for your direct marketing needs in Dallas and beyond.
          </p>
          <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform duration-200">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
