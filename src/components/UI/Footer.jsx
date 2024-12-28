import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="mt-10 border-t border-green-500 opacity-60 pt-6 pb-6 text-center text-sm">
      </div>
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-lg text-green-500 font-semibold mb-4">About World Tourism</h2>
          <p className="text-sm leading-relaxed">
            Discover the beauty of the world with our travel guides, destination highlights, and expert tips to make your journey unforgettable.
          </p>
        </div>

        
        <div>
          <h2 className="text-lg text-green-500 font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#destinations" className="hover:underline">Top Destinations</a>
            </li>
            <li>
              <a href="#blogs" className="hover:underline">Travel Blogs</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">FAQs</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg text-green-500 font-semibold mb-4">Contact Us</h2>
          <p className="text-sm leading-relaxed">
            Email: <a href="mailto:support@worldtourism.com" className="hover:underline">support@worldtourism.com</a>
          </p>
          <p className="text-sm leading-relaxed">
            Phone: <a href="tel:+1234567890" className="hover:underline">+123-456-7890</a>
          </p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
                  alt="Facebook"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} World Atlas. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer