import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Shield, Clock } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-brand-midnight text-white text-xs py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-brand-sky" />
              Drug Tested & Background Checked Technicians
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              Proudly Serving Twin Falls & Kimberly Since 1981
            </span>
          </div>
          <div>
            <span className="text-brand-sky font-semibold">Free Second Opinions on Major Repairs</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              {/* Alpine Modernism custom graphic logo (triangles representing peaks/airflow) */}
              <div className="w-10 h-10 bg-brand-midnight flex items-center justify-center rounded-sm text-white font-display font-bold text-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-sky opacity-80" />
                <span className="relative z-10">H</span>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-orange transform rotate-45" />
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-xl leading-none text-brand-midnight tracking-tight group-hover:text-brand-sky transition-colors">
                HOME
              </div>
              <div className="font-sans text-[10px] font-bold tracking-widest text-slate-500 uppercase leading-none mt-1">
                Heating & Air
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-display text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-brand-navy"
                      : "text-slate-600 hover:text-brand-sky"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-sky" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:2087321211"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-5 py-2.5 rounded-sm font-display font-bold text-sm tracking-wide transition-all shadow-sm hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              (208) 732-1211
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-midnight hover:text-brand-sky transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-6 px-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-base font-bold tracking-wide py-2 border-b border-slate-50 ${
                      isActive ? "text-brand-sky" : "text-slate-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:2087321211"
                  className="flex items-center justify-center gap-2 bg-brand-orange text-white py-3 rounded-sm font-display font-bold text-base shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call (208) 732-1211
                </a>
                <span className="text-center text-xs text-slate-500 font-medium">
                  Available 24/7 for Emergency Services
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
