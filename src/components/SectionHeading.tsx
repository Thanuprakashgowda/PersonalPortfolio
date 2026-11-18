import React from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  children,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
        {children}
      </h2>
      {description && (
        <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
