// pages/belt.js
export default function Belt() {
    return (
      <div className="bg-gray-100 min-h-screen p-10">
        <header className="flex justify-between items-center p-6 shadow-md bg-white">
          <h1 className="text-2xl font-bold">Sparrow Leathers</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/products" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Cart</a>
          </nav>
        </header>
  
        <section className="max-w-4xl mx-auto mt-10">
          <h2 className="text-4xl font-semibold mb-6">Classic Leather Belt</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Gallery */}
            <div className="flex-1">
              <img src="/belt1.jpg" alt="Classic Leather Belt" className="w-full rounded mb-4" />
              <div className="flex space-x-4">
                <img src="/belt1.jpg" alt="Thumbnail 1" className="w-20 h-20 rounded cursor-pointer" />
                <img src="/belt2.jpg" alt="Thumbnail 2" className="w-20 h-20 rounded cursor-pointer" />
                <img src="/belt3.jpg" alt="Thumbnail 3" className="w-20 h-20 rounded cursor-pointer" />
              </div>
            </div>
  
            {/* Product Details */}
            <div className="flex-1">
              <p className="text-lg mb-4">
                This handcrafted leather belt is made from 100% genuine buffalo leather. Durable, stylish, and perfect for any occasion.
              </p>
              <p className="text-2xl font-bold mb-6">$54.99</p>
              <button className="bg-leather text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }