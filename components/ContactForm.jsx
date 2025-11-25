"use client";
import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { submitContactForm } from "@/lib/actions/contact";

export default function Contact() {
  const [state, handleSubmitFormspree, resetFormspree] = useForm("xnnvzlyz"); // Destructure resetFormspree
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submittedFormDataRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (state.succeeded && submittedFormDataRef.current) {
      const callServerAction = async () => {
        const serverActionResult = await submitContactForm(submittedFormDataRef.current);
        if (serverActionResult.success) {
          toast.success(serverActionResult.message);
          setFormData({ name: "", email: "", message: "" }); // Clear form
          submittedFormDataRef.current = null; // Reset the ref after successful server action
          resetFormspree(); // Reset Formspree state to allow new submissions
        } else {
          toast.error(serverActionResult.message);
        }
      };
      callServerAction();
    } else if (state.errors && state.errors.length > 0) {
      toast.error("Please correct the form errors.");
    }
  }, [state.succeeded, state.errors, resetFormspree]); // Add resetFormspree to dependencies

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    submittedFormDataRef.current = { ...formData };
    await handleSubmitFormspree(e);
  };

  return (
    <section className="relative w-full pb-14 md:py-28 text-gray-50">
      <div id="contact" className="absolute top-[-36px]"></div>
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION TITLE */}
        <div
          data-aos="fade-up"
          className="text-center space-y-4 mb-14 md:mb-28 hidden xl:block"
        >
          <h2 className="text-5xl font-extrabold tracking-tight">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to discuss a project? I'd love to hear from
            you.
          </p>
        </div>
        <div className="text-center space-y-4 mb-6 md:mb-28  xl:hidden">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to discuss a project? I'd love to hear from
            you.
          </p>
        </div>

        <form
          id="contact-form"
          onSubmit={handleFormSubmit}
          className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto  border border-gray-700"
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault(); // Prevent newline
                    document.getElementById("contact-form").requestSubmit(); // Submit the form
                  }
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Your message"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <Button
              variant="secondary"
              className="block  ml-auto cursor-pointer"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}