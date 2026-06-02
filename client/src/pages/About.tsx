import React, { useEffect } from "react";
import { Phone, Shield, Award, CheckCircle, Heart, Clock, ShieldCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileFloatingCall from "../components/MobileFloatingCall";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Home Heating & Air Conditioning Twin Falls";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Home Heating & Air Conditioning, serving Twin Falls & Kimberly, ID since 1981. Our core principles are absolute integrity and honesty."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-sky/20 selection:text-brand-midnight">
      <Header />

      {/* About Hero Header */}
      <section className="bg-brand-midnight text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Our Story & Core Values
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Serving Twin Falls, Kimberly, and the entire Magic Valley with unrivaled HVAC expertise, absolute honesty, and background-checked professionalism.
          </p>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-20 md:py-28 container">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-sky block">
              Founded on Principles
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-midnight">
              Surpassing Your Expectations Every Single Day
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Home Heating & Air Conditioning is the #1 Southern Idaho Cooling and Indoor Air Service & Replacement Company. Founded on the bedrock principles of absolute integrity and honesty, we strive to surpass your expectations, going above and beyond to provide you with service that is unrivaled by any other company in the Magic Valley.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We are confident that your every experience with Home Heating & Air Conditioning will leave you with a smile. Why? Because when you call our office, we don't give you excuses—we ask you how we can make it happen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our industry is rapidly evolving, and service technicians these days are constantly on the cutting edge of science. That's why our employees continuously undergo extensive technical training. We ensure our team is equipped with the latest diagnostic knowledge to solve your problems quickly and accurately.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="bg-slate-50 border border-slate-200 p-8 md:p-10 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sky/5 rounded-full blur-xl" />
              
              <h3 className="font-display font-bold text-xl text-brand-midnight mb-6 border-b border-slate-200 pb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-orange" />
                The Magic Valley Promise
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-midnight">Drug-Tested Technicians</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      All employees must pass drug tests and background checks before entering your home.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-midnight">Free Second Opinions</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      Honest diagnostics with free second opinions on major system repairs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-midnight">Continuous Training</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      Our team stays at the cutting edge of mechanical and environmental science.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Callout */}
      <section className="bg-brand-midnight text-white py-20 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-brand-sky" />
          </div>
          <h2 className="text-3xl font-display font-bold">
            "I make sure I am comfortable with them in my home before I let them in yours."
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-sm">
            Our highly professional staff is selected based on their commitment to exceptional customer service and personal integrity. Every technician is drug-tested and background-checked, ensuring your family's absolute peace of mind.
          </p>
          <div className="pt-4">
            <span className="block font-display font-bold text-base text-white">Owner & Founder</span>
            <span className="text-xs text-slate-400">Home Heating & Air Conditioning</span>
          </div>
        </div>
      </section>

      {/* Community Involvement / Service Area */}
      <section className="py-20 container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange block">
              Local Commitment
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-midnight">
              Proudly Serving Twin Falls, Kimberly & Beyond
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We are deeply rooted in the Southern Idaho community. From our office on Main Street in Kimberly to homes across Twin Falls, Jerome, and the surrounding Magic Valley, we are dedicated to keeping our neighbors comfortable all year round.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We participate in local charity events, support youth sports, and sponsor community initiatives because we believe in giving back to the community that has trusted us for decades.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 rounded-lg">
            <h3 className="font-display font-bold text-lg text-brand-midnight mb-4">
              Our Core Service Areas:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-sky" />
                <span>Twin Falls, ID</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-sky" />
                <span>Kimberly, ID</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-sky" />
                <span>Jerome, ID</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-sky" />
                <span>Filer, ID</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-sky" />
                <span>Buhl, ID</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-sky" />
                <span>Hansen, ID</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 italic">
              Don't see your town listed? Give us a call at (208) 732-1211 to see if we can serve your area.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileFloatingCall />
    </div>
  );
}
