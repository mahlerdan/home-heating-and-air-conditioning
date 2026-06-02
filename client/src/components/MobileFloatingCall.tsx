import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileFloatingCall() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-3 flex gap-3 md:hidden z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <a
        href="tel:2087321211"
        className="flex-1 bg-brand-orange hover:bg-brand-orange/90 text-white py-3 px-4 rounded-md font-display font-bold text-center flex items-center justify-center gap-2 transition-colors"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        Call Now: (208) 732-1211
      </a>
      <a
        href="sms:2082681999"
        className="bg-brand-midnight hover:bg-brand-midnight/90 text-white py-3 px-4 rounded-md font-display font-bold text-center flex items-center justify-center gap-2 transition-colors"
        aria-label="Text us"
      >
        <MessageSquare className="w-5 h-5" />
        Text Us
      </a>
    </div>
  );
}
