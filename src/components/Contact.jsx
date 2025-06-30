// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded" />
        <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded h-32"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Send Message</button>
      </form>
    </section>
  )
}