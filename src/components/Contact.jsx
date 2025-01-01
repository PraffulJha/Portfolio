import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Recipient Name', // Replace with recipient name
      to_email: 'recipient@email.com', // Replace with recipient email
      message: message,
    };

    emailjs
      .send(
        'service_ihc7tyk', // Replace with your service ID
        'template_xyy2r58', // Replace with your template ID
        templateParams,
        'TfbAClHsyfPD4NXlE' // Replace with your user ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSent(true);
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
  };

 
  // Handle form submission
  return (
    <div className="max-w-md mx-auto w-full p-6 bg-gray-600 rounded-lg shadow-md min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl text-center text-red-600 font-bold mb-2">Contact Me</h2>

      {/* Connect with section */}
      <p className="text-center text-white mb-6">You can connect with me:</p>

      {/* Social Media Links with SVG Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        {/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Twitter"
            role="img"
            viewBox="0 0 512 512"
            className="w-12 h-12 text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            <rect width="512" height="512" rx="15%" fill="currentColor" />
            <path
              fill="#ffffff"
              d="M437 152a72 72 0 01-40 12a72 72 0 0032-40a72 72 0 01-45 17a72 72 0 00-122 65a200 200 0 01-145-74a72 72 0 0022 94a72 72 0 01-32-7a72 72 0 0056 69a72 72 0 01-32 1a72 72 0 0067 50a200 200 0 01-105 29a200 200 0 00309-179a200 200 0 0035-37"
            />
          </svg>
        </a>
        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Instagram"
            role="img"
            viewBox="0 0 512 512"
            className="w-12 h-12"
          >
            <rect width="512" height="512" rx="15%" id="b" />
            <use fill="url(#a)" xlinkHref="#b" />
            <use fill="url(#c)" xlinkHref="#b" />
            <radialGradient id="a" cx=".4" cy="1" r="1">
              <stop offset=".1" stopColor="#fd5" />
              <stop offset=".5" stopColor="#ff543e" />
              <stop offset="1" stopColor="#c837ab" />
            </radialGradient>
            <linearGradient id="c" x2=".2" y2="1">
              <stop offset=".1" stopColor="#3771c8" />
              <stop offset=".5" stopColor="#60f" stopOpacity="0" />
            </linearGradient>
            <g fill="none" stroke="#ffffff" strokeWidth="30">
              <rect width="308" height="308" x="102" y="102" rx="81" />
              <circle cx="256" cy="256" r="72" />
              <circle cx="347" cy="165" r="6" />
            </g>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/prafful-jha-54b722171/" target="_blank" rel="noopener noreferrer">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            className="w-12 h-12"
          >
            <g>
              <path
                d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
                fill="#0A66C2"
              />
            </g>
          </svg>
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
            required
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
            required
            type="email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="Type Your Message here.."
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="flex justify-center mb-4">
          <button type="submit" className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 focus:outline-none">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
