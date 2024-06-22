import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
const Header = ({ logo }) => {
    const location = useLocation();
    let title = '';

    if (location.pathname.includes('card')) {
        title = 'Card University';
    } else if (location.pathname.includes('list')) {
        title = 'List University';
    } else if (location.pathname.includes('/blog')) {
        title = 'Blog University';
    } else if (location.pathname.includes('video')) {
        title = 'Video University';
    } 

  return ( //
    <header className="bg-white p-4 flex items-center justify-center">
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="logo w-32 h-16 mr-2" />
            {title && <h1 className="text-xl font-bold text-black ">{title}</h1>}
        </div>
    </header>
  );
};

export default Header;

