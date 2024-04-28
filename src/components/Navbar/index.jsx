import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo/logo-ungu.svg";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const payload = token.split(".")[1];
      const data = JSON.parse(atob(payload));
      setUserRole(data.role);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const getLinkBasedOnRole = () => (userRole === "recruiter" ? "/home" : "/");

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderAuthButtons = () => (
    <>
      <Link to="/auth/login">
        <button className="text-[#5E50A1] border rounded px-4 py-1 border-[#5E50A1] hover:bg-[#5E50A1] hover:text-white transition duration-300">Masuk</button>
      </Link>
      <Link to="/auth/register-worker">
        <button className="rounded bg-[#5E50A1] px-4 py-1 text-white hover:bg-hoverPrimary transition duration-300">Daftar</button>
      </Link>
    </>
  );

  const renderUserProfileButton = () => (
    <Link to="/profile">
      <button className="text-white bg-primary border rounded px-4 py-1 border-[#5E50A1] hover:bg-hoverPrimary hover:text-white transition duration-300">Profile</button>
    </Link>
  );

  const renderRecruiterButtons = () => (
    <>
      <Link to="/home">
        <button className="text-[#5E50A1] border rounded px-4 py-1 border-[#5E50A1] hover:bg-[#5E50A1] hover:text-white transition duration-300">Home</button>
      </Link>
      <Link to="/profile-recruiter">
        <button className="text-white bg-primary border rounded px-4 py-1 border-[#5E50A1] hover:bg-hoverPrimary hover:text-white transition duration-300">Profile</button>
      </Link>
    </>
  );

  return (
    <div className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="container w-5/6 mx-auto">
        <div className="flex items-center justify-between p-5">
          <Link to={getLinkBasedOnRole()}>
            <img src={Logo} width={127} height={35} alt="Logo" />
          </Link>
          <div className="hidden md:flex gap-5">{!isLoggedIn ? renderAuthButtons() : userRole === "worker" ? renderUserProfileButton() : renderRecruiterButtons()}</div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl text-gray-900" /> : <FaBars className="text-2xl text-gray-900" />}</button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden transition-transform duration-300 transform origin-top absolute mt-2 bg-primary rounded-md shadow-lg right-0 w-48">
            <ul className="block">
              {!isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/" className="flex items-center py-3 px-6 cursor-pointer text-accent font-bold hover:text-accent">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/login" className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                      Masuk
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/register-worker" className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                      Daftar
                    </NavLink>
                  </li>
                </>
              ) : userRole === "worker" ? (
                <li>
                  <NavLink to="/profile" className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                    Profile
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/home" className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile-recruiter" className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                      Profile
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
