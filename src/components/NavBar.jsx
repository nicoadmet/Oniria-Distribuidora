import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";

import { navbarLinks } from "../data/navbarLinks";

import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../assets/logo-full-zoom.png";

const NavBar = ({ cart, setIsCartOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const totalItems = Object.values(cart || {}).reduce(
    (acc, item) => acc + (item.unit || 0) + (item.pack || 0),
    0
  );

  const handleSearchClick = () => {
    const catalogSection = document.getElementById("catalog");
    
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
          searchInput.focus();
          searchInput.value = ""; 
        }
      }, 300); 
    }
  };

  return (
    <>
      <nav>
        <div className="nav-container-custom flex justify-between items-center py-8 border-b border-gray-200 shadow-sm">
          
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Oniria" className="w-28" />
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-4 text-gray-600">
            {navbarLinks.map((item) => (
              <li key={item.id} className="relative h-16 flex items-center group cursor-pointer">
                <ScrollLink
                  to={item.link.replace("#", "")}
                  smooth={true}
                  duration={400}
                  spy={true}
                  className="inline-block py-1 px-3 font-semibold"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>                
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div 
            className="flex items-center gap-2"
          >
            <button 
              onClick={handleSearchClick}
              className="text-2xl p-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 cursor-pointer">
              <CiSearch />
            </button>

            <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-2xl p-2 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 cursor-pointer">
                <IoCartOutline />

                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 min-w-[20px] bg-blue-600 text-white text-[11px] font-bold px-1 rounded-md shadow-md">
                    {totalItems}
                    </span>
                )}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {openMenu ? (
              <RxCross2 onClick={() => setOpenMenu(false)} className="text-2xl cursor-pointer" />
            ) : (
              <RxHamburgerMenu onClick={() => setOpenMenu(true)} className="text-2xl cursor-pointer" />
            )}
          </div>
        </div>
      </nav>

      <ResponsiveMenu openMenu={openMenu} navbarLinks={navbarLinks} />
    </>
  );
};

export default NavBar;