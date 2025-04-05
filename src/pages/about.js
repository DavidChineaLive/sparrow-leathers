// pages/about.js
export default function About() {
    return (
      <div className="bg-white text-gray-900 min-h-screen p-10">
        <header className="flex justify-between items-center p-6 shadow-md">
          <h1 className="text-2xl font-bold">Sparrow Leathers</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="#products" className="hover:underline">Shop</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
  
        <section className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-4xl font-semibold mb-6">About Sparrow Leathers</h2>
          <p className="text-lg mb-6">
            Sparrow Leathers is a family-owned business dedicated to crafting high-quality, hand-made buffalo leather belts and collars. 
            Every piece is created with care, ensuring durability and elegance for both people and pets.
          </p>
          <p className="text-lg">
            Our mission is to provide timeless, handcrafted leather goods that tell a story of tradition, craftsmanship, and love for the art of leatherworking.
          </p>
        </section>
      </div>
    );
  }