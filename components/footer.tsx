import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/images/zoom-logo.png" alt="Zoom direct mail Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Professional direct marketing solutions to help your business reach the right customers with targeted mail
              campaigns, EDDM services, and high-quality postcard printing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/direct-mail" className="text-gray-300 hover:text-white">
                  Direct Mail
                </Link>
              </li>
              <li>
                <Link href="/eddm" className="text-gray-300 hover:text-white">
                  EDDM
                </Link>
              </li>
              <li>
                <Link href="/postcard-printing" className="text-gray-300 hover:text-white">
                  Postcard Printing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">zoomdirectmail@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">
                  800 Secretary Dr, Suite D
                  <br />
                  Arlington, TX 76015
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 Zoom direct mail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
