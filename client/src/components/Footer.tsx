import React from "react";
import { Link } from "wouter";
import { Phone, MapPin, Clock, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-midnight text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm text-white font-display font-bold text-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-brand-sky opacity-80" />
              <span className="relative z-10">H</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-orange transform rotate-45" />
            </div>
            <div>
              <div className="font-display font-bold text-xl leading-none text-white tracking-tight">
                HOME
              </div>
              <div className="font-sans text-[10px] font-bold tracking-widest text-slate-400 uppercase leading-none mt-1">
                Heating & Air
              </div>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed pt-2">
            Southern Idaho's premier residential heating, cooling, and indoor air quality experts. Built on integrity, transparency, and elite local craftsmanship.
          </p>
          <div className="flex items-center gap-2 pt-2 text-brand-sky">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider">Licensed, Bonded & Insured</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-base tracking-wide text-white mb-6 border-l-2 border-brand-sky pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="font-display font-bold text-base tracking-wide text-white mb-6 border-l-2 border-brand-orange pl-3">
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Call or Text</span>
                <a href="tel:2087321211" className="text-white hover:text-brand-sky font-semibold transition-colors">
                  (208) 732-1211
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Office Address</span>
                <span className="text-slate-300 text-sm">
                  326 Main St N, Kimberly, ID 83341
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Email</span>
                <span className="text-slate-300 text-sm">
                  service@gohomeheating.com
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="font-display font-bold text-base tracking-wide text-white mb-6 border-l-2 border-brand-sky pl-3">
            Business Hours
          </h4>
          <ul className="space-y-3">
            <li className="flex justify-between text-sm border-b border-slate-800 pb-2">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                Mon - Fri:
              </span>
              <span className="text-slate-200 font-medium">8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between text-sm pb-2">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                Sat - Sun:
              </span>
              <span className="text-brand-orange font-semibold">Emergency Only</span>
            </li>
            <li className="bg-slate-800/40 p-3 rounded border border-slate-800 text-xs text-slate-400 leading-relaxed mt-4">
              <span className="font-bold text-white block mb-1">⚠️ Emergency HVAC Service</span>
              Need urgent furnace or AC repairs? We offer rapid-response emergency services 24 hours a day, 365 days a year.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div>
          <p>© {currentYear} Home Heating & Air Conditioning. All Rights Reserved.</p>
          <p className="mt-1">Proudly serving Twin Falls, Kimberly, and the surrounding Magic Valley region.</p>
        </div>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
}
