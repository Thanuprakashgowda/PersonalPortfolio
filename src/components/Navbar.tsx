import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="text-xl font-bold text-gray-900 tracking-tight">
          TG<span className="text-blue-600">.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-900">
          <li>
            <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-blue-600 transition-colors">Education</Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-blue-600 transition-colors">Achievements</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
