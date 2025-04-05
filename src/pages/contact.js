// pages/contact.js
export default function Contact() {
    return (
      <div className="bg-white text-gray-900 min-h-screen p-10">
        <header className="flex justify-between items-center p-6 shadow-md">
          <h1 className="text-2xl font-bold">Sparrow Leathers</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="#products" className="hover:underline">Shop</a>
          </nav>
        </header>
  
        <section className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg mb-6">
            We'd love to hear from you! Reach out to us through any of the platforms below.
          </p>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Email:</strong> <a href="mailto:info@sparrowleathers.com" className="text-blue-600 hover:underline">info@sparrowleathers.com</a>
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
            </p>
            <p className="text-lg">
              <strong>Facebook:</strong> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">facebook.com/sparrowleathers</a>
            </p>
            <p className="text-lg">
              <strong>Instagram:</strong> <a href="https://www.instagram.com/sparrowleathers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">instagram.com/sparrowleathers</a>
            </p>
          </div>
        </section>
      </div>
    );
  }