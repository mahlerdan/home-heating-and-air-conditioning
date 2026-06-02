import React from "react";
import { Link } from "wouter";
import { Home, Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-sky/20 selection:text-brand-midnight">
      <Header />

      <main className="flex-1 py-24 md:py-32 container flex flex-col items-center justify-center text-center space-y-6">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
          Error 404
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-midnight">
          Page Not Found
        </h1>
        <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-midnight hover:bg-brand-navy text-white px-6 py-3 rounded-sm font-display font-bold text-sm tracking-wide transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="tel:2087321211"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-sm font-display font-bold text-sm tracking-wide transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Support
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
