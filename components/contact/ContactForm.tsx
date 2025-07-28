"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.message) {
  //     setSubmitStatus('Please fill in all required fields.');
  //     return;
  //   }

  //   if (formData.message.length > 500) {
  //     setSubmitStatus('Message must be 500 characters or less.');
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setSubmitStatus('');

  //   try {
  //     // Simulate form submission
  //     await new Promise(resolve => setTimeout(resolve, 1500));
  //     setSubmitStatus('Thank you for your message! I\'ll get back to you soon.');
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   } catch (error) {
  //     setSubmitStatus('Something went wrong. Please try again.');
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setSubmitStatus("Please enter a valid email address.");
      return;
    }

    // setStatus("Sending...");
    setIsSubmitting(true);
    setSubmitStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/manjggnq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus(
          "Thank you for your message! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-[#1a4280] mb-6">Send a Message</h2>

      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4280] focus:border-transparent transition-all duration-300"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4280] focus:border-transparent transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>

        {/* <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subject
          </label>
          <select
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4280] focus:border-transparent transition-all duration-300"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="collaboration">Collaboration Opportunity</option>
            <option value="interview">Interview Request</option>
            <option value="book-club">Book Club Discussion</option>
            <option value="writing-advice">Writing Advice</option>
            <option value="other">Other</option>
          </select>
        </div> */}

        {/* <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4280] focus:border-transparent transition-all duration-300"
            placeholder="Enter the subject of your message"
          />
        </div> */}

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a4280] focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Your message here..."
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {formData.message.length}/500 characters
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#1a4280] to-[#6989b0] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <i className="ri-loader-line animate-spin mr-2"></i>
              Sending...
            </span>
          ) : (
            <span>
              <i className="ri-send-plane-line mr-2"></i>
              Send Message
            </span>
          )}
        </button>

        {submitStatus && (
          <div
            className={`text-center p-4 rounded-lg ${
              submitStatus.includes("Thank you")
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {submitStatus}
          </div>
        )}
      </form>
    </div>
  );
}
