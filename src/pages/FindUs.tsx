import { useState, useEffect, FormEvent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

export default function FindUs() {
  const { loading, success, error, formData, updateField, submitForm, resetForm } = useContactForm();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (success !== null) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitted = await submitForm();
    if (submitted) {
      setShowMessage(true);
    }
  };
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Find Us' }]} />

      {/* Hero Section */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <span className="text-accent font-bold text-sm tracking-[0.3em] block mb-4">// CONTACT</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.85] mb-8">
            FIND US
          </h1>
          <p className="text-lg md:text-xl font-mono lowercase opacity-80 border-l-4 border-accent pl-8 max-w-3xl leading-relaxed">
            Connect with Touch Vodka. Whether you're looking to stock our products, collaborate, or just say hello, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="border-b-4 border-black bg-white p-8 md:p-12 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="border-4 border-black p-8">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-display uppercase">EMAIL</h3>
              </div>
              <p className="font-mono text-sm lowercase opacity-80">
                <a href="mailto:Info@fatdogspirits.com" className="hover:text-accent transition-colors">
                  Info@fatdogspirits.com
                </a>
              </p>
            </div>

            <div className="border-4 border-black p-8 bg-neutral-50">
              <div className="flex items-center gap-4 mb-6">
                <Phone className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-display uppercase">PHONE</h3>
              </div>
              <p className="font-mono text-sm lowercase opacity-80">
                <a href="tel:813-242-4459" className="hover:text-accent transition-colors">
                  813-242-4459
                </a>
              </p>
            </div>

            <div className="border-4 border-black p-8">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-display uppercase">LOCATION</h3>
              </div>
              <p className="font-mono text-sm lowercase opacity-80">
                Fatdogspirits<br />
                3212 N 40th STE 701<br />
                Tampa, FL - 33605
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-display uppercase mb-8">Get in Touch</h2>

          {/* Success Message */}
          {showMessage && success && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 flex gap-3 items-start animate-in fade-in slide-in-from-top-2 duration-300">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-900 font-mono text-sm">
                  ✓ {success ? 'Message sent successfully!' : 'Processing...'}
                </p>
                <p className="text-green-800 font-mono text-xs opacity-80 mt-1">
                  We'll get back to you soon.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {showMessage && error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 flex gap-3 items-start animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-900 font-mono text-sm">
                  ✗ {error}
                </p>
                <p className="text-red-800 font-mono text-xs opacity-80 mt-1">
                  Please try again or contact us directly.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-mono uppercase font-bold mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                disabled={loading}
                className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:border-accent disabled:opacity-60 disabled:cursor-not-allowed"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono uppercase font-bold mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                disabled={loading}
                className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:border-accent disabled:opacity-60 disabled:cursor-not-allowed"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono uppercase font-bold mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => updateField('subject', e.target.value)}
                disabled={loading}
                className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:border-accent disabled:opacity-60 disabled:cursor-not-allowed"
                placeholder="How can we help?"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono uppercase font-bold mb-2">Message</label>
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                disabled={loading}
                className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:border-accent resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                placeholder="Tell us what's on your mind..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-accent text-white font-display text-2xl uppercase hover:bg-black transition-colors active:translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-accent"
            >
              {loading ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
