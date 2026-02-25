import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Header />
      <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Legal', href: '#cookie-policy' }, { label: 'Cookie Policy' }]} />

      <section className="border-b-4 border-black bg-neutral-50 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-display uppercase leading-[0.85] mb-8">Cookie Policy</h1>
          <p className="text-sm font-mono uppercase tracking-widest opacity-60">Effective: January 1, 2024</p>
        </div>
      </section>

      <section className="border-b-4 border-black p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto space-y-8 font-mono text-sm lowercase opacity-80 leading-relaxed">
          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences and improve your browsing experience.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">How We Use Cookies</h2>
            <p>We use cookies to enhance your experience, including remembering your preferences, tracking your usage patterns, and providing personalized content. We also use cookies for analytics and advertising purposes.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Types of Cookies</h2>
            <div className="space-y-3">
              <p><span className="text-accent font-bold">Essential Cookies:</span> Required for basic website functionality</p>
              <p><span className="text-accent font-bold">Analytics Cookies:</span> Help us understand how visitors use our site</p>
              <p><span className="text-accent font-bold">Preference Cookies:</span> Remember your choices and settings</p>
              <p><span className="text-accent font-bold">Marketing Cookies:</span> Used for targeted advertising</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Managing Cookies</h2>
            <p>You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Note that disabling cookies may affect website functionality.</p>
          </div>

          <div>
            <h2 className="text-3xl font-display uppercase mb-4 text-black">Contact Us</h2>
            <p>For questions about our cookie practices, please contact us at cookies@touchvodka.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
