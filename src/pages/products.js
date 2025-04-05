// pages/products.js
export default function Products() {
    const products = [
      { id: 1, name: "Classic Leather Belt", price: "$54.99", image: "/belt1.jpg" },
      { id: 2, name: "Buffalo Leather Dog Collar", price: "$16.99", image: "/belt2.jpg" },
      { id: 3, name: "Custom Leather Belt", price: "$64.99", image: "/hero.jpg" },
      { id: 4, name: "Handmade Leather Wallet", price: "$34.99", image: "/hero.jpg" },
      { id: 5, name: "Leather Keychain", price: "$9.99", image: "/hero.jpg" },
      // Add more products as needed
    ];
  
    return (
      <div className="bg-gray-100 min-h-screen p-10">
        <header className="flex justify-between items-center p-6 shadow-md bg-white">
          <h1 className="text-2xl font-bold">Sparrow Leathers</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
  
        <section className="max-w-6xl mx-auto mt-10">
          <h2 className="text-4xl font-semibold text-center mb-8">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded shadow">
                <img src={product.image} alt={product.name} className="mb-4 rounded" />
                <h4 className="text-xl font-bold">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{product.price}</p>
                <a href="#" className="text-blue-600 hover:underline">View Product</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }