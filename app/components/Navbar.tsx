import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl">💡</span>
            <span className="text-lg font-semibold text-black">Response</span>
          </Link>

     
          <Link 
            href="#home" 
            className="text-black hover:text-black font-medium"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}