"use client";
import React, { useState } from "react";
import { FiMail, FiMessageSquare } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    help: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    nationality: string;
    help: string;
    message: string;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response: Response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          nationality: "",
          help: "",
          message: "",
        });
      } else {
        const errorData: { error?: string } = await response.json();
        setErrorMessage(
          errorData.error || "Failed to send your message. Please try again."
        );
      }
    } catch (error: unknown) {
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start px-4 sm:px-6 lg:px-8">
      <div className="py-20 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-8 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-4xl font-extrabold mb-6 text-start text-primary">
            Contact Us
          </h2>
          {successMessage && (
            <p className="text-green-600 font-medium mb-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-600 font-medium mb-4">{errorMessage}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nationality"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="help"
                  className="block text-sm font-semibold text-gray-800"
                >
                  How Can We Help You
                </label>
                <select
                  id="help"
                  value={formData.help}
                  onChange={handleChange}
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="company-setup">Business Setup</option>
                  <option value="legal-advice">Corporate Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-12 py-4 my-8 border-2 border-primary rounded-lg transition-all text-white bg-primary hover:bg-primary-dark hover:border-primary-dark disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Get Started"}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:mt-8 lg:pl-10 lg:pt-60">
        <h2 className="text-4xl font-extrabold text-foreground mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          We would love to hear from you. Our team is always here to assist you
          with any questions, concerns, or feedback you might have. Please fill
          out the form, and we'll get back to you as soon as possible.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-foreground">
            <FiMail className="text-primary text-2xl" />
            <span className="text-lg font-medium">
              {" "}
              office@firstlegalcounsel.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-foreground">
            <FiMessageSquare className="text-primary text-2xl" />
            <span className="text-lg font-medium">
              Monday - Friday, 9:00 AM - 6:00 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
