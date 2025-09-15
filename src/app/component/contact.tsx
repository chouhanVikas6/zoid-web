import { useState } from "react";

export default function ContactSection(){
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
      const [formErrors, setFormErrors] = useState<{ email?: string; phone?: string }>({});
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
    
      const validateEmail = (email: string) => {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
    
      const validatePhone = (phone: string) => {
        // Accepts numbers, spaces, dashes, parentheses, and must be 7-15 digits
        return /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(phone) && phone.replace(/\D/g, '').length >= 7 && phone.replace(/\D/g, '').length <= 15;
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validate fields
        const errors: { email?: string; phone?: string } = {};
        if (!validateEmail(formData.email)) {
          errors.email = 'Please enter a valid email address.';
        }
        if (!validatePhone(formData.phone)) {
          errors.phone = 'Please enter a valid phone number.';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
          setSubmitStatus('idle');
          return;
        }
        setSubmitStatus('loading');
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          if (res.ok) {
            setSubmitStatus('success');
            setFormData({ fullName: '', email: '', phone: '', message: '' });
            setFormErrors({});
          } else {
            setSubmitStatus('error');
          }
        } catch {
          setSubmitStatus('error');
        }
      };
    return  <section id="contact" className=" bg-gray-300 py-24 flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-stretch px-4">
          {/* Map on the left */}
          <div className="md:w-1/2 w-full h-96 md:h-auto rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-200">
            <iframe
              title="Anduril HQ Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-118.4452%2C33.9425%2C-118.2437%2C34.0522&amp;layer=mapnik"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Form on the right */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-white text-black rounded-2xl shadow-2xl p-8 flex flex-col gap-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Contact Us</h2>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="p-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`p-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition`}
                required
              />
              {formErrors.email && (
                <p className="text-red-600 text-sm -mt-4 mb-2">{formErrors.email}</p>
              )}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`p-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition`}
                required
              />
              {formErrors.phone && (
                <p className="text-red-600 text-sm -mt-4 mb-2">{formErrors.phone}</p>
              )}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition resize-none"
                required
              />
              <button type="submit" className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg font-semibold text-lg transition disabled:opacity-60" disabled={submitStatus === 'loading'}>
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
}