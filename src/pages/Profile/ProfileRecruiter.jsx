import Footer from "../../components/Footer";
import ProfileImage from "../../assets/img/profile/user.png";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarUtama from "../../components/Navbar/NavbarUtama";
import api from "../../services/api";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

function ProfileRecruiter() {
  const [recruiterData, setRecruiterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/recruiters/profile");
        setRecruiterData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch data recruiter error", error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="container-fluid bg-primary w-full h-[55vh] ">
        <NavbarUtama />

        <div className="container-edit pt-20 flex items-center justify-center mt-10 pb-12 lg:gap-10 md:gap-10 sm:gap-0">
          <section>
            <div className="wrapper-edit">
              <div className="container-edit-profile px-8 mx-auto bg-white w-[767px] md:shadow-lg sm:shadow-none rounded-md">
                <div className="flex flex-col justify-center items-center pb-10">
                  <img src={recruiterData.photo ? recruiterData.photo : ProfileImage} alt="Foto Profil" className="rounded-full mt-6 w-36 h-36 object-cover" />
                  <div className="desc mt-8 w-full pl-4 text-center">
                    <h1 className="text-2xl font-semibold mb-2">{recruiterData.name}</h1>
                    <p className="text-[#1F2A36] mb-2 text-[15px]">{recruiterData.company ? recruiterData.company : "-"}</p>

                    <div className="location flex gap-3 mb-2 justify-center">
                      {recruiterData.city && (
                        <>
                          <FaMapMarkerAlt className="text-[#9EA0A5]" />
                          <p className="text-gray-600 text-[14px]">{recruiterData.city}</p>
                        </>
                      )}
                      {!recruiterData.city && <p className="text-gray-600 text-[14px]">-</p>}
                    </div>

                    <p className="text-gray-600">{recruiterData.position ? recruiterData.position : "-"}</p>
                    <div className=" text-center text-zinc-400 text-sm font-normal font-['Open Sans'] leading-normal">
                      <p className="mt-4">{recruiterData.description ? recruiterData.description : "-"}</p>
                    </div>
                    <div className="wrapper-btn-hire mt-8">
                      <Link to={`/profile/edit-recruiter`}>
                        <button className="text-white bg-primary hover:bg-hoverPrimary w-72 p-2 rounded-md">Edit Profile</button>
                      </Link>
                    </div>

                    <div className="wrapper contact mt-10 flex flex-col items-center">
                      <div className="mail flex items-center gap-3 mb-4">
                        {/* ICON EMAIL */}
                        <FaEnvelope className="text-textSecondary w-6" />
                        <p className="text-gray-600 text-[14px] leading-5">{recruiterData.email}</p>
                      </div>
                      <div className="instagram flex items-center gap-3 mb-4">
                        <FaInstagram className="text-textSecondary w-6" />
                        <p className="text-gray-600 text-[14px] leading-5">{recruiterData.instagram ? recruiterData.instagram : "-"}</p>
                      </div>
                      <div className="Phone flex items-center gap-3 mb-4">
                        <FaWhatsapp className="text-textSecondary w-6" />
                        <p className="text-gray-600 text-[14px] leading-5">{recruiterData.phone ? recruiterData.phone : "-"}</p>
                      </div>
                      <div className="linkedin flex items-center gap-3">
                        <FaLinkedin className="text-textSecondary w-6" />
                        <p className="text-gray-600 text-[14px] leading-5">{recruiterData.linkedin ? recruiterData.linkedin : "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProfileRecruiter;
