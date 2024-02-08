import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo/logo-ungu.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-5">
          <Link to="/">
            <img src={Logo} width={127} height={35} alt="Logo" />
          </Link>
          <div className="hidden md:flex gap-5">
            <Link to="/auth/login">
              <button className="text-[#5E50A1] border rounded px-4 py-1 border-[#5E50A1] hover:bg-[#5E50A1] hover:text-white transition duration-300">Masuk</button>
            </Link>
            <Link to="/auth/register">
              <button className="rounded bg-[#5E50A1] px-4 py-1 text-white hover:bg-hoverPrimary transition duration-300">Daftar</button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl text-gray-900" /> : <FaBars className="text-2xl text-gray-900" />}</button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden transition-transform duration-300 transform origin-top`}>
          <div className="absolute mt-2 bg-primary rounded-md shadow-lg right-0 w-48 ">
            <ul className="block">
              <li className="group xl:hidden lg:hidden md:hidden">
                <NavLink to="/" className={`flex items-center py-3 px-6 cursor-pointer hover:text-accent ${location.pathname === "/" ? "text-accent font-bold" : ""}`}>
                  Home
                </NavLink>
              </li>
              <li className="group xl:hidden lg:hidden  md:hidden">
                <NavLink to="/recipes/list" className={`flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent `}>
                  Masuk
                </NavLink>
              </li>
              <li className="group xl:hidden lg:hidden md:hidden">
                <NavLink to="/auth/register" className={`flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent`}>
                  Daftar
                </NavLink>
              </li>
              <li className="group">
                <div className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">Logout</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
