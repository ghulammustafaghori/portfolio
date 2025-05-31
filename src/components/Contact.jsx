import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i7z98x8', 'template_ytnzry3', form.current, 'FGBoCN0lPcX8X_MTj')
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          // Optional: hide success after a few seconds
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="bg-black text-white py-20 px-5" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16 text-yellow-400"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <span>ghulammustafaghori1@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-400 text-xl" />
            <span>+923198667202</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <span>Abbottabad, Pakistan</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-white/10 p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-white/10 p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-white/10 p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-300 transition duration-300 font-semibold"
          >
            <span>Send Message</span>
          </button>
          {success && (
            <p className="text-green-400 text-center font-medium mt-4">
              Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
