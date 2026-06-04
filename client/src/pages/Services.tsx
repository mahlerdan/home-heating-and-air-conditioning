import React, { useEffect } from "react";
import { Phone, Flame, Snowflake, Shield, Award, Clock, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileFloatingCall from "../components/MobileFloatingCall";

export default function Services() {
  useEffect(() => {
    document.title = "HVAC Services Twin Falls ID | Home Heating & Air Conditioning";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore our heating, cooling, duct cleaning, and maintenance services in Twin Falls & Kimberly, Idaho. Free estimates and certified technicians."
      );
    }
  }, []);

  const detailedServices = [
    {
      title: "Heating Systems & Furnaces",
      desc: "Southern Idaho winters require a dependable heating system. Our highly trained, drug-tested technicians provide complete diagnostic, repair, and installation services for all furnace models.",
      icon: <Flame className="w-8 h-8 text-brand-orange" />,
      features: [
        "Furnace Diagnostics & Repair",
        "High-Efficiency Furnace Installation",
        "Heat Pump Maintenance & Setup",
        "Free Second Opinions on Major Repairs",
        "Safety Inspections & Tune-Ups"
      ],
      color: "border-brand-orange/20 hover:border-brand-orange",
      image: "/images/service-heating.webp",
      imageAlt: "HVAC technician servicing a heating system",
    },
    {
      title: "Air Conditioning Systems",
      desc: "Beat the summer heat in Twin Falls. We offer rapid-response AC repairs, energy-efficient replacements, and comprehensive maintenance plans to keep your home crisp and cool.",
      icon: <Snowflake className="w-8 h-8 text-brand-sky" />,
      features: [
        "AC Diagnostics & Leak Repairs",
        "High-Efficiency AC Installations",
        "Ductless Mini-Split Systems",
        "Refrigerant Recharge & Tune-Ups",
        "Thermostat Integration & Upgrades"
      ],
      color: "border-brand-sky/20 hover:border-brand-sky",
      image: "/images/service-ac.webp",
      imageAlt: "Outdoor air conditioning unit",
    },
    {
      title: "Duct Cleaning & Air Quality",
      desc: "Clean air is vital for a healthy home. Over time, ducts collect dust, pollen, and pet dander. Our professional duct cleaning removes these contaminants, improving your home's air quality.",
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      features: [
        "Complete Air Duct Cleaning",
        "UV Air Sanitizer Installation",
        "Whole-House Air Purifiers",
        "Humidifiers & Dehumidifiers",
        "Filter Replacement & Programs"
      ],
      color: "border-emerald-500/20 hover:border-emerald-500",
      image: "/images/service-airquality.webp",
      imageAlt: "Air conditioning unit for indoor air quality",
    },
    {
      title: "Comfort Club Membership",
      desc: "Prevent costly breakdowns before they happen. Our Comfort Club maintenance membership guarantees annual tune-ups, priority emergency response, and exclusive member-only discounts.",
      icon: <Award className="w-8 h-8 text-amber-500" />,
      features: [
        "Bi-Annual Precision Tune-Ups",
        "15% Discount on All Repairs",
        "Priority Scheduling & Response",
        "No Diagnostic Fees for Members",
        "Extends HVAC Equipment Lifespan"
      ],
      color: "border-amber-500/20 hover:border-amber-500",
      image: "/images/service-thermostat.webp",
      imageAlt: "Smart Nest thermostat showing temperature",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-sky/20 selection:text-brand-midnight">
      <Header />

      {/* Services Hero Header */}
      <section className="bg-brand-midnight text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-sky">
            Our Offerings
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Professional HVAC Services
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            From precision tune-ups to complete high-efficiency installations, we deliver elite heating, cooling, and air quality solutions across Twin Falls and Kimberly, Idaho.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 md:py-28 container">
        <div className="grid md:grid-cols-2 gap-12">
          {detailedServices.map((service, index) => {return (
            <div
              key={index}
              className={`bg-white border rounded-lg shadow-sm transition-all duration-300 flex flex-col justify-between overflow-hidden ${service.color}`}
            >
              {/* Service Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1 justify-between">
              <div>
                <div className="w-14 h-14 rounded-sm bg-slate-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-display font-bold text-brand-midnight mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Key Features & Services Include:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-50 flex items-center justify-between">
                <a
                  href="tel:2087321211"
                  className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-sky text-white px-5 py-2.5 rounded-sm font-display font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Schedule Service
                </a>
                <span className="text-xs font-mono text-slate-400">
                  100% Guaranteed Work
                </span>
              </div>
              </div>{/* end p-8 wrapper */}
            </div>
          );})}
        </div>
      </section>

      {/* Free Second Opinion Callout */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-lg shadow-sm grid md:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl" />
            
            <div className="md:col-span-8 space-y-4">
              <span className="inline-block bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase">
                Free Second Opinions
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-midnight">
                Got a high repair estimate from another company?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Before you spend thousands on a new furnace, heat exchanger, or AC compressor, let our background-checked technicians take a look. We provide completely free second opinions on major repairs to ensure you're getting honest diagnostics and fair pricing.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-end">
              <a
                href="tel:2087321211"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3.5 rounded-sm font-display font-bold text-sm tracking-wide transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Claim Free Opinion
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileFloatingCall />
    </div>
  );
}
