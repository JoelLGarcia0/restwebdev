"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "pending" });

    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200) {
        setStatus({
          message:
            "Message sent successfully! Our Team will get back to you shortly",
          type: "success",
        });
        setFormData({ fullName: "", email: "", businessName: "", message: "" });
      } else {
        setStatus({
          message: "Failed to send message. Try again later.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        message: "An error occurred. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold drop-shadow-lg mb-8">
            What Clients Are Saying
          </h2>

          <blockquote className="mb-4 text-gray-700">
            <p className="text-md">
              “Joel gave my bakery the digital glow up that it needed. Fast,
              clean, and professional.”
            </p>
            <footer className="mt-4 font-sm font-semibold">
              -German Perez, Bakery Owner
            </footer>
          </blockquote>

          <blockquote className="mb-4 text-gray-700">
            <p className="text-md">
              “Joel made me a beautiful landing page with some great extra
              animations. He went above and beyond my expectations”
            </p>
            <footer className="mt-4 font-sm font-semibold">
              -Luis Enriquez, Business Owner
            </footer>
          </blockquote>

          <blockquote className="text-gray-700">
            <p className="text-md">
              “The Buddha Basha jewelry site Joel created is exactly what I
              envisioned—elegant, modern, and easy to manage. The checkout and
              inventory features work flawlessly.”
            </p>
            <footer className="mt-4 font-sm font-semibold">
              -Ana Rodriguez, Jewelry Designer
            </footer>
          </blockquote>
        </div>

        {/* Contact Form */}
        <div id="contact">
          <h2 className="text-3xl font-bold drop-shadow-lg mb-8">
            Let&apos;s Build Your Website
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 text-gray-800"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border rounded-md px-4 py-2 text-gray-800"
            />
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full border rounded-md px-4 py-2 text-gray-800"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Brief Description"
              className="w-full border rounded-md px-4 py-2 text-gray-800"
              rows={4}
              required
            ></textarea>
            <Button
              type="submit"
              className="w-full bg-blue text-white py-2 cursor-pointer font-semibold hover:bg-blue/80 transition"
            >
              Submit
            </Button>
            {/* Status Message */}
            {status.message && (
              <p
                className={`text-sm mt-2 ${
                  status.type === "success" ? "text-darkblue" : "text-darkblue"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
