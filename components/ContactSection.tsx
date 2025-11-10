
import React from 'react';
import Section from './Section';

const ContactSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted! (This is a demo)');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" title="Contact Me">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
        >
          Send Message
        </button>
      </form>
    </Section>
  );
};

export default ContactSection;
