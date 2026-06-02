import React, { useEffect } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight, Shield, Award, CheckCircle, Flame, Snowflake, Star, Quote } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileFloatingCall from "../components/MobileFloatingCall";
import InteractiveModeSelector from "../components/InteractiveModeSelector";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

export default function Home() {
  useEffect(() => {
    document.title = "Home Heating & Air Conditioning | HVAC Company Twin Falls ID";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Home Heating & Air Conditioning is Twin Falls, Idaho's premier HVAC contractor. Call (208) 732-1211 for furnace & AC repair, maintenance, and installation."
      );
    }
  }, []);

  const services = [
    {
      title: "Heating Services",
      desc: "Stay warm all winter with expert furnace repairs, replacements, and routine heating system tune-ups.",
      icon: <Flame className="w-6 h-6 text-brand-orange" />,
      link: "/services",
    },
    {
      title: "Air Conditioning",
      desc: "Beat the Idaho heat with precision AC diagnostics, high-efficiency replacements, and prompt repairs.",
      icon: <Snowflake className="w-6 h-6 text-brand-sky" />,
      link: "/services",
    },
    {
      title: "Indoor Air Quality",
      desc: "Breathe cleaner air. Professional duct cleaning, sanitization, and air filtration solutions for your home.",
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      link: "/services",
    },
    {
      title: "Comfort Club Maintenance",
      desc: "Join our membership for annual tune-ups, priority service, and exclusive discounts on all repairs.",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      link: "/services",
    },
  ];

  const testimonials = [
    {
      quote: "Our furnace quit on a freezing January night. Home Heating & Air sent a tech within two hours. He was professional, drug-tested, and had the system running in no time. Unbelievable service!",
      author: "Twin Falls Resident",
      rating: 5,
      date: "January 2026",
    },
    {
      quote: "We needed a complete AC overhaul. They gave us a free second opinion that saved us over $1,200 compared to another local bid. The installation was immaculate and clean.",
      author: "Kimberly Homeowner",
      rating: 5,
      date: "April 2026",
    },
    {
      quote: "The duct cleaning made an immediate difference in our home's air quality. The technicians were polite, wore boot covers, and explained everything. 10/10 highly recommend.",
      author: "Magic Valley Customer",
      rating: 5,
      date: "May 2026",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-sky/20 selection:text-brand-midnight">
      <LocalBusinessSchema />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-brand-midnight text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        {/* Radial glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-brand-sky">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              Trusted Southern Idaho HVAC Experts Since 1981
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight text-white">
              “It’s a great day at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-orange">
                Home Heating & Air!
              </span>”
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Don't settle for clashing systems or unreliable service. Get Southern Idaho's premier heating, cooling, and indoor air solutions from highly trained, background-checked professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:2087321211"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-sm font-display font-bold text-base tracking-wide transition-all shadow-lg shadow-brand-orange/20 hover:translate-y-[-1px] active:translate-y-[1px]"
              >
                <Phone className="w-5 h-5" />
                Call (208) 732-1211
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-sm font-display font-semibold text-base tracking-wide transition-all hover:translate-y-[-1px]"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-white">4.9 ★</span>
                <span className="text-xs text-slate-400 font-medium">1,240+ Google Reviews</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-white">45+</span>
                <span className="text-xs text-slate-400 font-medium">Years of Experience</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-white">100%</span>
                <span className="text-xs text-slate-400 font-medium">Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          {/* Abstract Hero Graphic representing Heating & Cooling integration */}
          <div className="md:col-span-5 hidden md:block">
            <div className="bg-slate-900/50 border border-white/10 p-8 rounded-lg relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-sky/20 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-6 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
                  <Flame className="w-8 h-8 text-brand-orange absolute animate-pulse" />
                  <Snowflake className="w-8 h-8 text-brand-sky absolute opacity-20 hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-bold text-xl">The Magic Valley Standard</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We don't just fix equipment. We calibrate comfort. Every service comes with background-checked technicians and our unrivaled service guarantee.
                </p>
                <div className="bg-white/5 border border-white/10 p-4 rounded text-left space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-sky" />
                    <span>Free Second Opinions</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-orange" />
                    <span>Drug-Tested Technicians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner / Affiliations */}
      <section className="bg-slate-50 py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Our Elite Affiliations & Credentials
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:opacity-80 transition-opacity">
            <div className="font-display font-bold text-lg tracking-tight text-slate-600">
              NATE CERTIFIED
            </div>
            <div className="font-display font-bold text-lg tracking-tight text-slate-600">
              EPA COMPLIANT
            </div>
            <div className="font-display font-bold text-lg tracking-tight text-slate-600">
              ENERGY STAR PARTNER
            </div>
            <div className="font-display font-bold text-lg tracking-tight text-slate-600">
              BBB ACCREDITED A+
            </div>
          </div>
        </div>
      </section>

      {/* Signature Interactive Mode Selector */}
      <section className="py-16 md:py-24 container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-midnight mb-4">
            Experience the Comfort Shift
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Whether you need a blast of crisp cool air in July or a blanket of warm heat in January, explore our dedicated services for Southern Idaho below.
          </p>
        </div>
        <InteractiveModeSelector />
      </section>

      {/* Core Services Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-sky block mb-2">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-midnight">
                Comprehensive HVAC Solutions
              </h2>
            </div>
            <Link
              href="/services"
              className="text-brand-navy hover:text-brand-sky font-semibold text-sm tracking-wide mt-4 md:mt-0 flex items-center gap-1.5 group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-midnight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1 text-sm font-bold text-brand-navy hover:text-brand-sky group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser / Value Proposition */}
      <section className="py-20 md:py-28 container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange block">
              Our Legacy of Integrity
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-midnight leading-tight">
              Southern Idaho's #1 HVAC Team Built on Trust
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At Home Heating & Air Conditioning, we fix, maintain, and install heating and cooling equipment with a strict code of ethics. Founded on the principles of absolute integrity and honesty, we strive to surpass your expectations.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We understand that letting a contractor into your home requires trust. That's why every single one of our employees undergoes background checks and rigorous drug testing. We ensure they are professionals we would comfortably welcome into our own homes before we send them to yours.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-sky" />
                <span className="text-sm font-semibold text-brand-midnight">Free Second Opinions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-sky" />
                <span className="text-sm font-semibold text-brand-midnight">Drug-Tested Technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-sky" />
                <span className="text-sm font-semibold text-brand-midnight">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-sky" />
                <span className="text-sm font-semibold text-brand-midnight">24/7 Emergency Response</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-midnight hover:bg-brand-navy text-white px-6 py-3 rounded-sm font-display font-bold text-sm tracking-wide transition-colors"
              >
                Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Alpine Modernism custom abstract visual container */}
          <div className="bg-brand-midnight text-white p-10 md:p-12 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <h3 className="font-display font-bold text-2xl border-b border-white/10 pb-4">
                The Home Heating Guarantee
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-sky">01</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Unrivaled Professionalism</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Continuous extensive training ensures our technicians are on the cutting edge of HVAC science.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-orange">02</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Surpassing Expectations</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We ask "How can we make it happen?" and go above and beyond to leave you with a smile.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-bold text-brand-sky">03</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Honest Pricing</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Transparent upfront pricing with absolutely zero surprise fees or sales pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-sky block mb-2">
              Customer Success
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-midnight">
              Loved by Southern Idaho Residents
            </h2>
            <p className="text-slate-600 mt-3">
              With over 1,244 five-star reviews on Google, we take immense pride in our local reputation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm flex flex-col justify-between relative"
              >
                <Quote className="w-10 h-10 text-slate-100 absolute top-6 right-8 pointer-events-none" />
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6 relative z-10">
                    "{t.quote}"
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
                  <span className="font-bold text-brand-midnight">{t.author}</span>
                  <span className="text-slate-400">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://gohomeheating.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-sky transition-colors"
            >
              Read More Verified Google Reviews
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="bg-brand-orange text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            No Heat? No AC? We're on the Way!
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Don't freeze or sweat it out. Call Southern Idaho's rapid-response HVAC technicians. Available 24/7 for emergency service.
          </p>
          <div className="pt-4">
            <a
              href="tel:2087321211"
              className="inline-flex items-center gap-3 bg-brand-midnight hover:bg-brand-midnight/90 text-white px-8 py-4 rounded-sm font-display font-bold text-lg tracking-wide transition-all shadow-lg hover:translate-y-[-1px]"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              Call Now: (208) 732-1211
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileFloatingCall />
    </div>
  );
}
