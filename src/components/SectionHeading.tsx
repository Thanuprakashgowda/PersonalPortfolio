export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-gray-900 mb-8 inline-flex flex-col items-start gap-3">
      <span className="title-text">{children}</span>
      <span className="h-1 bg-gradient-to-r from-blue-300 to-teal-200 block w-20"></span>
    </h2>
  );
}
