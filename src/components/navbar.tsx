import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent border-gray-200 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16 w-full">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-gray-900">Eyeglasses</a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8 bg-black rounded-2xl h-9 w-[5in] mt-4 justify-center">
              <a href="#" className="text-white hover:text-slate-200 px-3 py-1 rounded-md text-md font-medium">Home</a>
              <a href="#" className="text-white hover:text-slate-200 px-3 py-1 rounded-md text-md font-medium">Shop</a>
              <a href="#" className="text-white hover:text-slate-200 px-3 py-1 rounded-md text-md font-medium">About</a>
              <a href="#" className="text-white hover:text-slate-200 px-3 py-1 rounded-md text-md font-medium">Contact</a>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={!isOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Shop</a>
          <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
