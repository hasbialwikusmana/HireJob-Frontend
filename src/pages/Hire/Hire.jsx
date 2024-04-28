import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/NavbarUtama";
import ProfileImage from "../../assets/img/profile/user.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Hire() {
  const { id } = useParams();
  const [workerData, setWorkerData] = useState(null);
  const [skills, setSkills] = useState([]);
  const [formHire, setFormHire] = useState({
    message_purpose: "hire",
    name: "",
    email: "",
    phone: "",
    description: "",
    worker_id: id,
  });

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const workerResponse = await api.get(`/workers/${id}`);

        const skillsResponse = await api.get(`/skills/${id}`);

        setWorkerData(workerResponse.data.data);
        setSkills(skillsResponse.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorker();
  }, [id]);

  const handleChange = (e) => {
    setFormHire({
      ...formHire,
      [e.target.name]: e.target.value,
    });
  };

  const handleHire = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/hire`, formHire);
      Swal.fire({
        icon: "success",
        title: "Hire Success",
        text: response.data.message,
      });
      setFormHire({
        message_purpose: "hire",
        name: "",
        email: "",
        phone: "",
        description: "",
        worker_id: id,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Hire Failed",
        text: error.response.data.message,
      });
    }
  };

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
                    <h1 className="text-2xl font-semibold mb-2">{workerData?.name}</h1>
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
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrapper-edit">
              {/* DATA DIRI */}
              <div className="container-edit-profile px-8 bg-white w-full md:w-[750px] md:shadow-lg sm:shadow-none rounded-md mb-10">
                <div className="flex flex-col justify-center items-center pb-10">
                  {/* DATA DIRI FORM */}
                  <div className="desc mt-8 w-full">
                    <div className="hadline">
                      <h1 className="text-3xl mb-4">Hubungi {workerData?.name}</h1>
                      {/* description */}
                      <div className="desc-profile text-[14px] mt-2 text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                      </div>
                    </div>
                    <form className="form-edit-profile mt-8">
                      {/* tujuan pesan ini select option */}
                      <div className="mb-4">
                        <label htmlFor="tujuan-pesan" className="block text-[16px] font-medium text-gray-600">
                          Tujuan Pesan
                        </label>
                        <select id="message_purpose" name="message_purpose" className="mt-1 p-4 border w-full h-auto rounded-md focus:outline-none focus:ring focus:border-primary" value={formHire.message_purpose} onChange={handleChange}>
                          <option value="project">Project</option>
                          <option value="hire">Hire</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="nama-lengkap" className="block text-[16px] font-medium text-gray-600">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                          placeholder="Masukkan nama lengkap"
                          value={formHire.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-[16px] font-medium text-gray-600">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                          placeholder="Masukkan email"
                          value={formHire.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="no-handphone" className="block text-[16px] font-medium text-gray-600">
                          No Handphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                          placeholder="Masukkan no handphone"
                          value={formHire.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="deskripsi" className="block text-[16px] font-medium text-gray-600">
                          Deskripsi
                        </label>
                        <textarea
                          type="text"
                          id="description"
                          name="description"
                          className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-primary resize-none"
                          placeholder="Deskripsikan/jelaskan lebih detail"
                          value={formHire.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button type="button" onClick={handleHire} className="w-full flex items-center justify-center bg-amber-400 text-white py-3 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:border-primary">
                        <span>Hire</span>
                      </button>
                    </form>
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

export default Hire;
