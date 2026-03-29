export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-gray-900 mb-8 inline-flex items-center gap-3">
      {children}
      <span className="h-px bg-gray-200 flex-1 ml-4 block w-12 sm:w-32"></span>
    </h2>
  );
}
