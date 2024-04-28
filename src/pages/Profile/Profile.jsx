import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/NavbarUtama";
import ProfileImage from "../../assets/img/profile/user.png";
import building from "../../assets/img/building.png";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

function Profile() {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [workerData, setWorkerData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workerResponse = await api.get("/workers/profile");

        const skillsResponse = await api.get("/skills");

        const workExperiencesResponse = await api.get("/experience");

        const portfoliosResponse = await api.get("/portfolio");

        setWorkerData(workerResponse.data.data);
        setSkills(skillsResponse.data.data);
        setWorkExperiences(workExperiencesResponse.data.data);
        setPortfolios(portfoliosResponse.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="container-fluid bg-primary w-full h-[55vh] ">
        <Navbar />

        <div className="container-edit pt-20  flex flex-col md:flex-row md:items-start justify-center  mt-10 pb-12 lg:gap-10 md:gap-10 sm:gap-0 ">
          <section>
            <div className="wrapper-edit">
              <div className="container-edit-profile px-8 bg-white w-full md:w-[400px] md:shadow-lg sm:shadow-none rounded-md">
                <div className="flex flex-col justify-center items-center pb-10">
                  <img src={workerData?.photo ? workerData?.photo : ProfileImage} alt="Foto Profil" className="rounded-full mt-6 w-36 h-36 object-cover" />
                  <div className="desc mt-8 w-full pl-4">
                    <h1 className="text-2xl font-semibold mb-2">{workerData.name}</h1>
                    <p className="text-[#1F2A36] mb-2 text-[15px]">{workerData?.job_desk ? workerData?.job_desk : "-"}</p>
                    <div className="location flex gap-3 mb-2">
                      {workerData?.domicile ? (
                        <>
                          <FaMapMarkerAlt className="text-[#9EA0A5]" />
                          <p className="text-gray-600 text-[14px]">{workerData.domicile}</p>
                        </>
                      ) : (
                        <p className="text-gray-600 text-[14px]">-</p>
                      )}
                    </div>

                    <p className="text-gray-600">{workerData?.workplace ? workerData?.workplace : "-"}</p>
                    <p className="desc-profile text-[14px] mt-2 text-gray-600 leading-relaxed">{workerData?.description ? workerData?.description : "-"}</p>
                    <div className="wrapper-btn-hire mt-8">
                      <Link to={`/profile/edit-worker`}>
                        <button className="text-white bg-primary hover:bg-hoverPrimary w-full p-2 rounded-md">Edit Profile</button>
                      </Link>
                    </div>
                    <div className="wrapper-skill mt-8">
                      <h1 className="text-2xl font-bold mb-2">Skill</h1>
                      {skills && skills.length > 0 ? (
                        <div className="skill-card mt-4 flex flex-wrap gap-2">
                          {skills.map((skills, index) => (
                            <p key={index} className="w-auto rounded-md bg-accent bg-opacity-60 border-solid border-2 border-accent text-center text-white p-1 mb-2">
                              {skills.skill_name}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-gray-600 mt-4">Belum memiliki data skill.</p>
                      )}
                    </div>
                    <div className="wrapper contact mt-10">
                      <div className="mail flex items-center gap-3 mb-4">
                        {/* ICON EMAIL */}
                        <FaEnvelope className="text-textSecondary  w-6" />
                        <p className="text-gray-600 text-[14px] leading-5">{workerData?.email}</p>
                      </div>
                      <div className="whatsapp flex items-center gap-3 mb-4">
                        <FaWhatsapp className="text-textSecondary  w-6" />
                        <p className="text-gray-600 text-[14px] leading-5">{workerData?.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container-edit-profile p-8 mt-8 md:mt-0 sm:mt-0 w-full md:w-[753px] mx-auto bg-white h-auto shadow-lg rounded-md">
              <div className="tab-buttons flex mb-4">
                <button className={`w-32 py-2 text-center ${activeTab === "portfolio" ? "border-[#5E50A1] text-primary" : "border-transparent text-[#5E50A1]"} -mr-1`} onClick={() => setActiveTab("portfolio")}>
                  <div className={`tagline border-b-4 ${activeTab === "portfolio" ? "border-[#5E50A1]" : "border-transparent"} w-[110px]`}>
                    <h1 className={`${activeTab === "portfolio" ? "text-primary font-medium" : "text-textSecondary"} text-xl pb-2`}>Portofolio</h1>
                  </div>
                </button>
                <button className={`py-2 text-center ${activeTab === "pengalaman" ? "text-primary" : "text-[#5E50A1]"} -ml-1`} onClick={() => setActiveTab("pengalaman")}>
                  <div className={`tagline border-b-4 ${activeTab === "pengalaman" ? "border-[#5E50A1]" : "border-transparent"} w-[204px]`}>
                    <h1 className={`${activeTab === "pengalaman" ? "text-primary font-medium" : "text-textSecondary"} text-xl pb-2`}>Pengalaman kerja</h1>
                  </div>
                </button>
              </div>
              {activeTab === "portfolio" && (
                <>
                  <div className="container-card-portofolio">
                    {portfolios && portfolios.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        {portfolios.map((portfolio, index) => (
                          <div key={index} className="card-portfolio rounded-md overflow-hidden border border-gray-200 shadow-md">
                            <img src={portfolio.image} alt={`portfolio ${index + 1}`} className="w-full h-36 object-cover cursor-pointer" />
                            <h4 className="text-lg text-center font-semibold text-gray-800 p-2">
                              <a href={`https://${portfolio.link_repo}`} target="_blank" rel="noopener noreferrer">
                                {portfolio.application_name}
                              </a>
                            </h4>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-gray-600 mt-4">Belum memiliki data portofolio.</p>
                    )}
                  </div>
                </>
              )}
              {activeTab === "pengalaman" && (
                <>
                  <div className="container-card-pengalaman-kerja max-w-full overflow-x-auto">
                    {workExperiences && workExperiences.length > 0 ? (
                      <div className="wrapper-card mt-4">
                        {workExperiences.map((workExperiences, index) => (
                          <div key={index} className="flex items-start gap-4 md:gap-14 mt-6 md:mt-10">
                            <img src={building} alt="icon perusahaan" className="w-[90px] h-[90px] object-cover rounded-md" />
                            <div className="desc-time flex flex-col">
                              <h4 className="text-lg font-bold text-textMain">{workExperiences.position}</h4>
                              <h5 className="text-md font-normal mb-1">{workExperiences.company}</h5>
                              <div className="time flex text-textSecondary text-[14px] gap-3 mb-2">
                                <p>{workExperiences.work_month}</p>-<p>{workExperiences.work_year}</p>
                              </div>
                              <div className="desc-diri">
                                <p className="text-[14px] text-[#1F2A36]">{workExperiences.description.length > 100 ? workExperiences.description.substring(0, 100) + "..." : workExperiences.description}</p>
                              </div>
                              {index < workExperiences.length - 1 && <hr className="border-t-2 border-[#E2E5ED] w-full md:w-[490px] mt-5" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-gray-600 mt-4">Belum memiliki data pengalaman kerja.</p>
                    )}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
