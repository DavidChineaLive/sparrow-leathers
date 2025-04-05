// pages/index.js
export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Sparrow Leathers</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#products" className="hover:underline">Shop</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white text-center">
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
              <a href="#" className="text-blue-600 hover:underline">View Product</a>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <img src="/belt2.jpg" alt="Dog Collar" className="mb-4 rounded"/>
              <h4 className="text-xl font-bold">Buffalo Leather Dog Collar</h4>
              <p className="text-sm text-gray-600 mb-2">$16.99</p>
              <a href="#" className="text-blue-600 hover:underline">View Product</a>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="p-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sparrow Leathers. All rights reserved.</p>
        <p>Contact: sparrowleathers@email.com</p>
      </footer>
    </div>
  )
}
