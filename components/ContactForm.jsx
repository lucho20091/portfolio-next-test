"use client";
import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { Button } from "./ui/button";

export default function Contact() {
  const [state, handleSubmit] = useForm("xnnvzlyz");

  useEffect(() => {
    if (state.succeeded) {
      toast("Message sent successfully");
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="background-animation w-full py-28 text-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION TITLE */}
        <div data-aos="fade-up" className="text-center space-y-4 mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Get in <span className="text-blue-500">Touch</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have a question or want to discuss a project? I'd love to hear from
            you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 md:mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Your name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 md:mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="your@email.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 md:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Your message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <Button className="block py-2 ml-auto bg-gray-400 text-black hover:bg-gray-800 transition-colors">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
