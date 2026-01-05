import React from 'react';

const Header: React.FC = () => {
  // NOTE: Styling uses Tailwind CSS classes commonly associated with Netflix headers
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo and Primary Navigation */}
        <div className="flex items-center space-x-8">
          {/* Netflix Logo (Styled) */}
          <a href="/" className="text-4xl font-extrabold text-red-600 tracking-wider cursor-pointer">
            NETFLIX
          </a>

          {/* Primary Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-white text-sm font-semibold">
            <a href="/" className="hover:text-gray-300 transition duration-150">Home</a>
            <a href="/tv-shows" className="text-gray-400 hover:text-white transition duration-150">TV Shows</a>
            <a href="/movies" className="text-gray-400 hover:text-white transition duration-150">Movies</a>
            <a href="/new-popular" className="text-gray-400 hover:text-white transition duration-150">New & Popular</a>
            <a href="/my-list" className="text-gray-400 hover:text-white transition duration-150">My List</a>
          </nav>
        </div>

        {/* Secondary Navigation (Search/User Icon) */}
        <div className="flex items-center space-x-6">
          {/* Search Icon Placeholder */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white cursor-pointer hover:text-gray-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          {/* Notification Icon Placeholder (Optional) */}
           <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white cursor-pointer hover:text-gray-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>


          {/* User Profile/Avatar Placeholder */}
          <div className="h-8 w-8 bg-gray-500 rounded cursor-pointer">
            {/* Standard Netflix profile icon styling */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;