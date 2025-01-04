import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Bio } from "../constant/Constant";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS service details
    const serviceID = 'service_ihc7tyk';
    const templateID = 'template_xyy2r58';
    const userID = 'TfbAClHsyfPD4NXlE';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send the message. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-black rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-10">
          <span className="text-white uppercase">Get in</span>{" "}
          <span className="text-pink-500 uppercase">touch</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-5">
            <h2 className="text-4xl font-bold text-orange-400">Let's talk</h2>
            <p className="text-gray-400">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="space-y-3">
              <p>
                📧 <a href="mailto:praffuljha1234@gmail.com">praffuljha1234@gmail.com</a>
              </p>
              <p>📞 +91 6306819255</p>
              <p>📍 Bengaluru,India</p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Connect with me:</h3>
              <div className="flex space-x-4">
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={Bio.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={Bio.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-gray-900 p-6 rounded-lg shadow-lg">
            <div>
              <label className="block text-sm font-medium text-gray-400">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Write your message here</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 focus:ring-4 focus:ring-orange-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
