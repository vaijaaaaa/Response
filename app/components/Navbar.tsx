import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/100 backdrop-blur-lg bg-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl"></span>
            <span className="text-lg font-semibold text-black">Response</span>
          </Link>

          <Link 
            href="#home" 
            className="text-black hover:text-gray-700 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
          href="#chat"
          className="text-black hover:text-gray-700 font-medium transition-colors"
          >
          Chat
          </Link>
          <Link
          href="#chat"
          className="text-black hover:text-gray-700 font-medium transition-colors"
          >
          API Key
          </Link>
        </div>
      </div>
    </nav>
  );
}
