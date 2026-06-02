import React, { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Mail, CheckCircle, ShieldCheck, AlertCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileFloatingCall from "../components/MobileFloatingCall";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Home Heating & Air Conditioning Twin Falls";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Home Heating & Air Conditioning in Twin Falls & Kimberly, Idaho. Call (208) 732-1211, visit 326 Main St N, Kimberly, ID, or send a message."
      );
    }
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Heating",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "Heating",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-sky/20 selection:text-brand-midnight">
      <Header />

      {/* Contact Hero Header */}
      <section className="bg-brand-midnight text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-sky">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Contact Our HVAC Team
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Have a question, need a repair, or looking for a free estimate? We're here to help Southern Idaho stay comfortable all year round.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-28 container">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Contact Information */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-orange block mb-2">
                Reach Us Directly
              </span>
              <h2 className="text-3xl font-display font-bold text-brand-midnight">
                We're Ready to Help
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Call us anytime. For urgent furnace or AC issues, our emergency dispatchers are available 24/7/365.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-lg">
                <Phone className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-base text-brand-midnight">Call or Text</h4>
                  <a href="tel:2087321211" className="text-xl font-bold text-brand-navy hover:text-brand-sky block mt-1">
                    (208) 732-1211
                  </a>
                  <span className="text-xs text-slate-500 mt-1 block">Available 24/7 for Emergencies</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-lg">
                <MapPin className="w-6 h-6 text-brand-sky shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-base text-brand-midnight">Our Office</h4>
                  <span className="text-slate-700 text-sm block mt-1 leading-relaxed">
                    326 Main St N, Kimberly, ID 83341
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block">Serving Twin Falls & surrounding areas</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-lg">
                <Clock className="w-6 h-6 text-brand-sky shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-base text-brand-midnight">Business Hours</h4>
                  <span className="text-slate-700 text-sm block mt-1">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </span>
                  <span className="text-xs text-brand-orange font-semibold mt-1 block">
                    Sat - Sun: Emergency Dispatch Only
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-brand-midnight text-white rounded-lg border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-brand-sky">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Background-Checked Team</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All of our technicians are required to pass rigorous drug tests and background checks before they are dispatched to your home.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 bg-white border border-slate-200 p-8 md:p-10 rounded-lg shadow-sm">
            <h3 className="text-2xl font-display font-bold text-brand-midnight mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-display font-bold text-emerald-900">Thank You!</h4>
                <p className="text-emerald-700 text-sm leading-relaxed max-w-md mx-auto">
                  Your message has been successfully received. One of our friendly team members will contact you shortly to confirm your request.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-brand-navy hover:underline mt-4 block mx-auto"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-brand-sky"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="(208) 555-0199"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-brand-sky"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-brand-sky"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Service Required
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm bg-white focus:outline-none focus:border-brand-sky"
                    >
                      <option value="Heating">Heating / Furnace Repair</option>
                      <option value="Cooling">Air Conditioning / AC Repair</option>
                      <option value="Duct Cleaning">Duct Cleaning</option>
                      <option value="Maintenance">Maintenance / Comfort Club</option>
                      <option value="Other">Other / Free Second Opinion</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    How can we make it happen?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your HVAC issue or requirements..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-brand-sky resize-none"
                  />
                </div>

                <div className="bg-slate-50 p-4 rounded border border-slate-100 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    By submitting this form, you agree to be contacted about your request using automated technology or phone calls. We value your privacy and never sell your data.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-4 rounded-sm font-display font-bold text-base tracking-wide transition-colors shadow-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Static Map Representation / Location Block */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-sky">Our Location</span>
            <h2 className="text-3xl font-display font-bold text-brand-midnight">Located on Main Street in Kimberly</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our office is located at 326 Main St N, Kimberly, ID 83341. From this central Southern Idaho hub, we dispatch our fully stocked service vehicles daily to serve residential and commercial properties throughout Twin Falls, Kimberly, Jerome, Filer, Buhl, and the surrounding Magic Valley region.
            </p>
            <div className="bg-white border border-slate-200 p-4 rounded text-xs font-mono text-slate-500">
              📍 326 Main St N, Kimberly, ID 83341, USA
            </div>
          </div>

          {/* Clean CSS-rendered map graphic representational block */}
          <div className="bg-white border border-slate-200 p-8 rounded-lg flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
            {/* Representational roads */}
            <div className="absolute top-1/2 left-0 w-full h-8 bg-slate-100 transform -translate-y-1/2" />
            <div className="absolute left-1/3 top-0 w-8 h-full bg-slate-100" />
            
            {/* Target Pin */}
            <div className="relative z-10 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center mx-auto shadow-md animate-bounce">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="bg-brand-midnight text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Home Heating & Air Conditioning
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Kimberly, ID 83341</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileFloatingCall />
    </div>
  );
}
