// utils/imagePath.js
export const imagePath = (filename) => `/sparrow_leathers/${filename}`;

// pages/index.js
export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* Top Bar */}
      <div class="announcement-bar">
        USA 100% Handmade For You • Free Shipping • Free Exchanges
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 href="/" className="text-2xl font-bold">Sparrow Leathers</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Cart</a>
          
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-[url('/belt_boot.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h2 className="text-4xl font-bold mb-4">Handcrafted Buffalo Leather Belts</h2>
          <p className="text-lg mb-6">Made with care, built to last.</p>
          <a href="#products" className="bg-white text-black px-6 py-3 rounded font-semibold">Shop Now</a>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="p-10 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
        <p className="text-lg mb-6">Sparrow Leathers is a family-owned shop where every belt and collar is hand-cut, hand-dyed, and crafted from 100% genuine buffalo leather.</p>
        <a href="/about" className="text-blue-600 hover:underline">Learn more →</a>
      </section>

      {/* Featured Products */}
      <section id="products" className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder product cards */}
            <div className="bg-white p-6 rounded shadow">
              <img src="/belt1.jpg" alt="Leather Belt" className="mb-4 rounded"/>
              <h4 className="text-xl font-bold">Classic Leather Belt</h4>
              <p className="text-sm text-gray-600 mb-2">$54.99</p>
              <a href="/product_pages/belt" className="text-blue-600 hover:underline">View Product</a>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="/belt2.jpg" alt="Dog Collar" className="mb-4 rounded"/>
              <h4 className="text-xl font-bold">Buffalo Leather Dog Collar</h4>
              <p className="text-sm text-gray-600 mb-2">$16.99</p>
              <a href="/product_pages/dog-collar" className="text-blue-600 hover:underline">View Product</a>
            </div>

            {/* Add more cards as needed */}
          </div>
          <div className="text-center mt-8">
            <a href="/products" className="bg-leather text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-sm mb-4">
              Sparrow Leathers is a family-owned business dedicated to crafting high-quality, hand-made buffalo leather belts and collars.
            </p>
            <div className="space-y-2">
              <a href="/about" className="text-blue-400 hover:underline block">About Us</a>
              <a href="/contact" className="text-blue-400 hover:underline block">Contact Us</a>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700"
                aria-label="Facebook"
              >
                <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/sparrowleathers/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-3 rounded-full hover:bg-pink-600"
                aria-label="Instagram"
              >
                <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@sparrowleathers.com"
                className="bg-gray-700 p-3 rounded-full hover:bg-gray-800"
                aria-label="Email"
              >
                <img src="/email-icon.svg" alt="Email" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-8">
          &copy; {new Date().getFullYear()} Sparrow Leathers. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
