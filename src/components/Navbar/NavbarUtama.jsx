// NavbarUtama.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBell, FaEnvelope, FaBars } from "react-icons/fa";
import ProfileImage from "../../assets/img/profile/user.png";
import Logo from "../../assets/img/logo/logo-ungu.svg";
import Swal from "sweetalert2";
import api from "../../services/api";

function NavbarUtama() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    checkUser();
    const fetchData = async () => {
      try {
        if (userRole === "recruiter") {
          const recruiterResponse = await api.get("/recruiters/profile");
          setProfilePhoto(recruiterResponse.data.data.photo);
        } else if (userRole === "worker") {
          const workerResponse = await api.get("/workers/profile");
          setProfilePhoto(workerResponse.data.data.photo);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userRole]);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return null;
      const payload = token.split(".")[1];
      const data = JSON.parse(atob(payload));
      setUserRole(data.role);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  // GET PHOTO PROFILE DARI BACKEND

  const getLinkBasedOnRole = () => {
    return userRole === "recruiter" ? "/home" : "/";
  };

  const getProfileLinkBasedOnRole = () => {
    return userRole === "recruiter" ? "/profile-recruiter" : "/profile";
  };

  const hire = () => {
    return userRole === "recruiter" ? "/hire/recruiter" : "/hire/worker";
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Kamu akan keluar dari aplikasi",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5E50A1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluar",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  const openDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="container w-5/6 mx-auto">
        <div className="flex items-center justify-between p-5">
          <Link to={getLinkBasedOnRole()}>
            <img src={Logo} width={127} height={35} alt="Logo" />
          </Link>
          <div className="hidden md:flex gap-5 items-center">
            {isLoggedIn && (
              <>
                <FaBell className="text-neutral-400 text-2xl cursor-pointer" />

                <Link to={hire()}>
                  <FaEnvelope className="text-neutral-400 text-2xl cursor-pointer" />
                </Link>
                <div onClick={openDropdown} className="relative z-20">
                  <img src={profilePhoto ? profilePhoto : ProfileImage} width={30} height={30} className="rounded-full cursor-pointer" alt="Profile" />
                  {isDropdownOpen && (
                    <div className="absolute mt-2 bg-primary rounded-md shadow-lg right-0 w-48" onBlur={closeDropdown}>
                      <ul className="block">
                        <li className="group">
                          <Link to={getLinkBasedOnRole()} className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                            Home
                          </Link>
                        </li>

                        <li className="group">
                          <Link to={getProfileLinkBasedOnRole()} className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                            Profile
                          </Link>
                        </li>

                        <li className="group">
                          <div onClick={handleLogout} className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                            Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>{isOpen ? <FaTimes className="text-2xl text-gray-900" /> : <FaBars className="text-2xl text-gray-900" />}</button>
            {isOpen && (
              <div className="absolute mt-2 bg-primary rounded-md shadow-lg right-0 w-48">
                <ul className="block">
                  <li className="group">
                    <Link to={getLinkBasedOnRole()} className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent font-bold">
                      Home
                    </Link>
                  </li>

                  <li className="group">
                    <Link to={getProfileLinkBasedOnRole()} className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                      Profile
                    </Link>
                  </li>

                  {/* Hire */}

                  <li className="group">
                    <Link to={hire()} className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                      Hire
                    </Link>
                  </li>

                  <li className="group">
                    <div onClick={handleLogout} className="flex items-center py-3 px-6 cursor-pointer text-light hover:text-accent">
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarUtama;
