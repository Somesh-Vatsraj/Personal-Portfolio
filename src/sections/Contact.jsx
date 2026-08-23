import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Button } from "../components/Button";
import { SocialLinks } from "../components/SocialLinks";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400">Have a question or want to work together?</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out via email, phone, or through the contact form. I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <span className="font-semibold w-24">Email:</span>
              <a href={`mailto:${siteConfig.personal.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {siteConfig.personal.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold w-24">Phone:</span>
              <span>{siteConfig.personal.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold w-24">Location:</span>
              <span>{siteConfig.personal.location}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">Social Profiles</h4>
            <SocialLinks />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-400">Your message has been simulated successfully. Since this is a static frontend site, please email me directly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
