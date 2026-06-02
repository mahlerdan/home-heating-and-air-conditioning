import React, { useState } from "react";
import { Flame, Snowflake, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

export default function InteractiveModeSelector() {
  const [mode, setMode] = useState<"heating" | "cooling">("heating");

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-white border border-slate-200 shadow-sm overflow-hidden rounded-lg">
      {/* Selector Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setMode("heating")}
          className={`flex-1 py-4 flex items-center justify-center gap-2 font-display font-semibold text-lg transition-all duration-300 ${
            mode === "heating"
              ? "bg-brand-orange/5 text-brand-orange border-b-2 border-brand-orange"
              : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
          }`}
        >
          <Flame className={`w-5 h-5 ${mode === "heating" ? "animate-pulse" : ""}`} />
          Heating Solutions
        </button>
        <button
          onClick={() => setMode("cooling")}
          className={`flex-1 py-4 flex items-center justify-center gap-2 font-display font-semibold text-lg transition-all duration-300 ${
            mode === "cooling"
              ? "bg-brand-sky/5 text-brand-sky border-b-2 border-brand-sky"
              : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
          }`}
        >
          <Snowflake className={`w-5 h-5 ${mode === "cooling" ? "animate-pulse" : ""}`} />
          Cooling Systems
        </button>
      </div>

      {/* Mode Content */}
      <div className="p-8 md:p-12 relative overflow-hidden">
        {/* Glow Effects */}
        <div
          className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none transition-all duration-500 ${
            mode === "heating" ? "bg-brand-orange" : "bg-brand-sky"
          }`}
        />

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-4 ${
                mode === "heating"
                  ? "bg-brand-orange/10 text-brand-orange"
                  : "bg-brand-sky/10 text-brand-sky"
              }`}
            >
              {mode === "heating" ? "Stay Warm & Cozy" : "Keep Crisp & Cool"}
            </span>
            <h3 className="text-3xl font-display font-bold text-brand-midnight mb-4">
              {mode === "heating"
                ? "Reliable Furnace Repair & Installation"
                : "High-Efficiency AC Service & Installation"}
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {mode === "heating"
                ? "Idaho winters demand robust heating. Our certified technicians specialize in furnace tune-ups, rapid emergency repairs, and high-efficiency system replacements tailored for Southern Idaho homes."
                : "Beat the Magic Valley summer heat. We offer precision air conditioning tune-ups, fast leak detection and repairs, and cutting-edge cooling systems that save on monthly utility bills."}
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className={`w-5 h-5 ${
                    mode === "heating" ? "text-brand-orange" : "text-brand-sky"
                  }`}
                />
                <span className="text-sm font-medium text-slate-700">
                  {mode === "heating"
                    ? "Free Second Opinions on Heat Exchanger Replacements"
                    : "Free Estimates on High-Efficiency AC Replacements"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock
                  className={`w-5 h-5 ${
                    mode === "heating" ? "text-brand-orange" : "text-brand-sky"
                  }`}
                />
                <span className="text-sm font-medium text-slate-700">
                  {mode === "heating"
                    ? "24/7 Emergency Heating Services Available"
                    : "Prompt Same-Day Air Conditioning Diagnostics"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Award
                  className={`w-5 h-5 ${
                    mode === "heating" ? "text-brand-orange" : "text-brand-sky"
                  }`}
                />
                <span className="text-sm font-medium text-slate-700">
                  100% Satisfaction Guaranteed or Your Money Back
                </span>
              </div>
            </div>

            <a
              href="tel:2087321211"
              className={`inline-flex items-center gap-2 px-6 py-3 font-display font-semibold rounded-md transition-all duration-300 text-white ${
                mode === "heating"
                  ? "bg-brand-orange hover:bg-brand-orange/90 shadow-sm shadow-brand-orange/20 hover:translate-x-1"
                  : "bg-brand-sky hover:bg-brand-sky/90 shadow-sm shadow-brand-sky/20 hover:translate-x-1"
              }`}
            >
              Book Service Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Visual Showcase (CSS Art / Alpine Modernism representation) */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-lg flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

            <div className="relative z-10 text-center">
              {/* Thermostat Graphic */}
              <div className="w-44 h-44 rounded-full border-4 border-white shadow-md bg-white flex flex-col items-center justify-center mx-auto mb-6 relative">
                {/* Dial Ring */}
                <div
                  className={`absolute inset-1 rounded-full border-2 border-dashed transition-all duration-500 ${
                    mode === "heating" ? "border-brand-orange/40 animate-[spin_40s_linear_infinite]" : "border-brand-sky/40 animate-[spin_40s_linear_infinite]"
                  }`}
                />

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Target Temp
                </span>
                <span
                  className={`text-5xl font-display font-bold tracking-tight transition-all duration-500 ${
                    mode === "heating" ? "text-brand-orange" : "text-brand-sky"
                  }`}
                >
                  {mode === "heating" ? "72°" : "68°"}
                </span>
                <span className="text-xs font-medium text-slate-500 mt-1">
                  System: {mode === "heating" ? "HEATING" : "COOLING"}
                </span>
              </div>

              {/* Technical Spec Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-midnight text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-tight">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                <span>SYS-STATUS: OPTIMAL // 21.5 SEER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
