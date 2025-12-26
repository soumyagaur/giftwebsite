import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-4 text-sm text-gray-600">
        <div>
          <h3 className="font-semibold mb-2">About GiftAura</h3>
          <p>
            GiftAura ek online gift store hai jo har occasion ke liye
            unique, creative aur personalized gifts provide karta hai.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:text-pink-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-pink-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="hover:text-pink-600">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-pink-600">
                Help & Support
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Policies</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy-policy" className="hover:text-pink-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-pink-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="hover:text-pink-600">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href="/return-refund-policy" className="hover:text-pink-600">
                Return & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Connect with us</h3>
          <p className="mb-2">Instagram • Facebook • WhatsApp</p>
          <p className="text-xs mb-1">
            Exclusive offers aur new arrivals ke liye email subscribe karein.
          </p>
          <div className="flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-1 text-xs"
              placeholder="Enter your email"
            />
            <button className="bg-pink-600 text-white text-xs px-3 py-1 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t text-center text-xs py-3 text-gray-500">
        © {new Date().getFullYear()} GiftAura. All rights reserved.
      </div>
    </footer>
  );
}
