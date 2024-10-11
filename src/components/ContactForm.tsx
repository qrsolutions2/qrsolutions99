import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC<{ id: string }> = ({ id }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('/api/send-email', formData);
      setSubmitMessage('Thank you for your message. We will be in touch shortly!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id={id} className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                Interested in working together? Fill out some info and we will
                be in touch shortly. We can't wait to hear from you!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-1/2 px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-1/2 px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="w-full px-3 py-2 border rounded-md h-32"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
              {submitMessage && (
                <p className="mt-4 text-green-600">{submitMessage}</p>
              )}
            </div>
            <div className="md:w-1/2 bg-blue-600 text-white p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-4">
                  Have questions about our services? Want to learn more about how
                  QR codes can benefit your business? We're here to help!
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> info@qrsolutions.com
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p>
                  <strong>Address:</strong> 123 QR Street, Tech City, QR 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;