"use client";

import { useState } from "react";
import { Button, Select, Textarea, Spinner } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { submitContactForm, validateForm, ContactFormErrors } from "@/app/lib/contactFormUtils";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [status, setStatus] = useState("");
  const [showError, setShowError] = useState<ContactFormErrors>({
    name: false,
    email: false,
    message: false,
    selectedOption: false,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { name, email, message, selectedOption };
    const { isValid, errors } = validateForm(formData);
    setShowError(errors);

    if (!isValid) return;

    setLoading(true);
    const { success, message: responseMessage } = await submitContactForm(formData);

    if (success) {
      setName("");
      setEmail("");
      setMessage("");
      setSelectedOption("");
      router.push('/thanks');
    } else {
      setStatus(responseMessage);
    }

    setLoading(false);
  };

  return (
    <form style={{ maxWidth: '500px', width: '100%' }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="block mb-1 text-black font-bold text-lg">Your Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value) setShowError(prev => ({ ...prev, name: false }));
          }}
          placeholder="Enter your name"
          required
          className={`w-full border border-gray-300 rounded-md p-2 ${showError.name ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="block mb-1 text-black font-bold text-lg">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setShowError(prev => ({ ...prev, email: !e.target.value.includes('@') }));
          }}
          placeholder="Enter your email"
          required
          className={`w-full border border-gray-300 rounded-md p-2 ${showError.email ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="solutions" className="block mb-1 text-black font-medium">Choose a Solution *</label>
        <select
          id="solutions"
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            if (e.target.value) setShowError(prev => ({ ...prev, selectedOption: false }));
          }}
          required
          className={`w-full border border-gray-300 rounded-md p-2 ${showError.selectedOption ? 'border-red-500' : ''}`}
        >
          <option value="" disabled>View our Solutions</option>
          <option value="PoC">PoC</option>
          <option value="Demo">Demo</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Recruitment">Recruit Me</option>
          <option value="Chat">Chat</option>
          <option value="Playing Frisbee">Playing Frisbee</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="block mb-1 text-black font-medium">Message</label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows={5}
          required
          className={`w-full border border-gray-300 rounded-md p-2 ${showError.message ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button 
          type="submit"
          className="bg-gray-900 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center">
              <Spinner size="md" color="success" aria-label="Loading" className="mr-3" />
              <span className="text-md font-bold">Please wait...</span>
            </div>
          ) : (
            'Submit'
          )}
        </Button>
      </div>
      <p className="text-center mt-4 text-black">{status}</p>
    </form>
  );
};

export default ContactForm;
