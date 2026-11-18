"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LinkedinIcon, 
  GithubIcon, 
  CopyIcon, 
  CheckIcon,
  ExternalLinkIcon
} from "../Icons";

export default function ContactSection() {
  const { email, phone, location, linkedin, github } = portfolioData.personalInfo;

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const senderEmail = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Get In Touch"
        description="Whether you have an opportunity, a project proposal, or want to discuss machine learning systems, my inbox is open."
      >
        Let&apos;s Connect &amp; Collaborate
      </SectionHeading>

      <div className="bg-slate-50/90 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xs">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info with One-Click Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Contact Channels
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Click any direct channel to copy or open directly in your preferred app.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email Card with Copy Button */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-3 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center flex-shrink-0">
                    <MailIcon size={18} />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-sky-600 truncate block"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(email, "email")}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedType === "email" ? (
                    <>
                      <CheckIcon size={13} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-3 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-emerald-600"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(phone, "phone")}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 flex-shrink-0"
                  title="Copy phone number to clipboard"
                >
                  {copiedType === "phone" ? (
                    <>
                      <CheckIcon size={13} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800">
                    {location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profile Quick Links */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-sky-600 hover:border-sky-300 transition-colors shadow-2xs"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn Profile</span>
                <ExternalLinkIcon size={12} className="text-slate-400" />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors shadow-2xs"
              >
                <GithubIcon size={15} />
                <span>GitHub Profile</span>
                <ExternalLinkIcon size={12} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below to immediately open your email client with your message pre-populated.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your team, problem statement, or opportunity..."
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all bg-white resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-sky-600 transition-colors shadow-xs"
                >
                  <MailIcon size={16} />
                  <span>Send Message</span>
                </button>

                {formSubmitted && (
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckIcon size={14} />
                    Email client opened!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
