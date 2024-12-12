function Footer() {
  return (
    <footer className="bg-gray-800 p-10 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Affani Bazzar
          </h2>
          <p className="text-base sm:text-sm">
            Discover the latest trends in women’s fashion with us. Enjoy premium
            quality, great prices, and impeccable style.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-base sm:text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sale
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Customer Service
          </h3>
          <ul className="space-y-2 text-base sm:text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Stay Connected
          </h3>
          <p className="mb-4 text-base sm:text-sm">
            Subscribe to get updates on our latest collections and exclusive
            offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              className="w-full rounded-l px-4 py-2 text-gray-900 focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="rounded-r bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-base sm:text-sm">
        <p>© {new Date().getFullYear()} Affani Bazzar. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
