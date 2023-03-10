import React, { useState } from 'react';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';
import Navlinks from '../pages/Shared/Navlinks';

const Main = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;

    if (scrollTop > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div ref={scrollRef} className="drawer-content" onScroll={handleScroll} >
          <Navbar isSticky={isSticky}></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[80%] lg:w-[40%] bg-white dark:bg-gray-800 text-[#05264e]">
            <Navlinks></Navlinks>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;