import { FaEdit, FaMapMarkerAlt, FaPencilAlt, FaPlus, FaTimes, FaTrash } from "react-icons/fa";
import ProfileImage from "../../assets/img/profile/user.png";
import { Link } from "react-router-dom";
import NavbarUtama from "../../components/Navbar/NavbarUtama";
import Footer from "../../components/Footer";
import Cloud from "../../assets/img/profile/cloud.png";
import Example from "../../assets/img/profile/highresimage.png";
import Expand from "../../assets/img/profile/size.png";
import IconPerusahaan from "../../assets/img/building.png";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";
import LoadingSpinner from "../../components/LoadingSpinner";

function EditWorker() {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [workerData, setWorkerData] = useState({});
  const [skills, setSkills] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [selectedPortfolioType, setSelectedPortfolioType] = useState("");
  const [editingPortfolioId, setEditingPortfolioId] = useState(null);
  const [experienceId, setExperienceId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    job_desk: "",
    domicile: "",
    workplace: "",
    description: "",
  });

  const [formDataSkill, setFormDataSkill] = useState({
    skill_name: "",
  });

  const [formDataExperience, setFormDataExperience] = useState({
    company: "",
    position: "",
    work_month: "",
    work_year: "",
    description: "",
  });

  const [formDataPortfolio, setFormDataPortfolio] = useState({
    application_name: "",
    link_repo: "",
    portfolio_type: "",
    image: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const workerResponse = await api.get("/workers/profile");
        const userId = workerResponse.data.data.id;
        const skillsResponse = await api.get(`/skills/${userId}`);
        const workExperiencesResponse = await api.get(`/experience/${userId}`);
        const portfoliosResponse = await api.get(`/portfolio/${userId}`);

        setWorkerData(workerResponse.data.data);
        setSkills(skillsResponse.data.data);
        setWorkExperiences(workExperiencesResponse.data.data);
        setPortfolios(portfoliosResponse.data.data);

        // Update form data with worker data
        const existingData = workerResponse.data.data;
        const existingDataSkill = skillsResponse.data.data;
        const existingDataExperience = workExperiencesResponse.data.data;
        const existingDataPortfolio = portfoliosResponse.data.data;
        setFormData({
          name: existingData.name || "",
          job_desk: existingData.job_desk || "",
          domicile: existingData.domicile || "",
          workplace: existingData.workplace || "",
          description: existingData.description || "",
          photo: existingData.photo || "",
        });
        setFormDataSkill({
          skill_name: existingDataSkill.skill_name || "",
        });
        setFormDataExperience({
          company: existingDataExperience.company || "",
          position: existingDataExperience.position || "",
          work_month: existingDataExperience.work_month || "",
          work_year: existingDataExperience.work_year || "",
          description: existingDataExperience.description || "",
        });

        setFormDataPortfolio({
          application_name: existingDataPortfolio.application_name || "",
          link_repo: existingDataPortfolio.link_repo || "",
          portfolio_type: existingDataPortfolio.portfolio_type || "",
          image: existingDataPortfolio.image || "",
        });
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

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormDataPortfolio({
      ...formDataPortfolio,
      image: selectedImage,
    });

    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImage(null);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputSkill = (e) => {
    setFormDataSkill({
      ...formDataSkill,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputExperience = (e) => {
    setFormDataExperience({
      ...formDataExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputPortfolio = (e) => {
    setFormDataPortfolio({
      ...formDataPortfolio,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setSelectedPortfolioType(e.target.value);
  };

  const handleDeleteClick = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan menghapus skill ini",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/skills/${id}`);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Skill dihapus",
        });
        setSkills(skills.filter((skill) => skill.id !== id));
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Gagal menghapus skill",
        });
      }
    }
  };

  const handleDeleteClickExperience = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan menghapus pengalaman kerja ini",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/experience/${id}`);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Pengalaman kerja dihapus",
        });
        setWorkExperiences(workExperiences.filter((exp) => exp.id !== id));
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Gagal menghapus pengalaman kerja",
        });
      }
    }
  };

  // Fungsi untuk menghapus portfolio
  const handleDeletePortfolio = async (id) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan menghapus portfolio ini",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus",
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/portfolio/${id}`);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Portfolio dihapus",
        });
        // Perbarui state portfolios setelah penghapusan
        setPortfolios(portfolios.filter((portfolio) => portfolio.id !== id));
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Gagal menghapus portfolio",
        });
      }
    }
  };

  const handleSubmitSkill = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/skills", {
        skill_name: formDataSkill.skill_name,
        worker_id: workerData.id,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Skill ditambahkan",
      });

      setSkills([...skills, response.data.data]);
      setFormDataSkill({
        ...formDataSkill,
        skill_name: "",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.response.data.message,
      });
    }
  };

  const handleEditExperience = (id) => {
    // Temukan pengalaman kerja yang akan diedit berdasarkan ID
    const experienceToEdit = workExperiences.find((experience) => experience.id === id);
    setFormDataExperience({
      position: experienceToEdit.position,
      company: experienceToEdit.company,
      work_month: experienceToEdit.work_month,
      work_year: experienceToEdit.work_year,
      description: experienceToEdit.description,
    });

    setExperienceId(id);
    setIsEditing(true);
  };

  const handleSubmitExperience = async () => {
    try {
      const response = await api.post("/experience", {
        position: formDataExperience.position,
        company: formDataExperience.company,
        work_month: formDataExperience.work_month,
        work_year: formDataExperience.work_year,
        description: formDataExperience.description,
        worker_id: workerData.id,
      });

      setWorkExperiences([...workExperiences, response.data.data]);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Experience added successfully",
      });

      setFormDataExperience({
        ...formDataExperience,
        position: "",
        company: "",
        work_month: "",
        work_year: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.response.data.message,
      });
    }
  };

  const handleUpdateExperience = async () => {
    try {
      const response = await api.put(`/experience/${experienceId}`, {
        position: formDataExperience.position,
        company: formDataExperience.company,
        work_month: formDataExperience.work_month,
        work_year: formDataExperience.work_year,
        description: formDataExperience.description,
      });

      const updatedExperiences = workExperiences.map((experience) => {
        if (experience.id === experienceId) {
          return response.data.data;
        }
        return experience;
      });
      setWorkExperiences(updatedExperiences);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Experience updated successfully",
      });

      // Reset form and state
      setFormDataExperience({
        ...formDataExperience,
        position: "",
        company: "",
        work_month: "",
        work_year: "",
        description: "",
      });
      setExperienceId("");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.response.data.message,
      });
    }
  };

  // Fungsi untuk menangani klik edit pada portofolio
  const handleEditPortfolio = (id) => {
    const editedPortfolio = portfolios.find((portfolio) => portfolio.id === id);

    setFormDataPortfolio({
      application_name: editedPortfolio.application_name,
      link_repo: editedPortfolio.link_repo,
      image: editedPortfolio.image,
    });
    setSelectedPortfolioType(editedPortfolio.portfolio_type);
    setImage(editedPortfolio.image);
    setEditingPortfolioId(id);
    setIsEditing(true);
  };

  const handleSubmitPortfolio = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formDataPortfolio.image);
      formDataToSend.append("application_name", formDataPortfolio.application_name);
      formDataToSend.append("link_repo", formDataPortfolio.link_repo);
      formDataToSend.append("portfolio_type", selectedPortfolioType);
      formDataToSend.append("worker_id", workerData.id);

      const response = await api.post("/portfolio", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPortfolios([...portfolios, response.data.data]);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Portfolio added successfully",
      });

      // Reset form and state
      setFormDataPortfolio({
        ...formDataPortfolio,
        application_name: "",
        link_repo: "",
        image: "",
      });
      setSelectedPortfolioType("");
      setImage("");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.response.data.message,
      });
    }
  };

  const handleUpdatePortfolio = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formDataPortfolio.image);
      formDataToSend.append("application_name", formDataPortfolio.application_name);
      formDataToSend.append("link_repo", formDataPortfolio.link_repo);
      formDataToSend.append("portfolio_type", selectedPortfolioType);
      formDataToSend.append("worker_id", workerData.id);

      const response = await api.put(`/portfolio/${editingPortfolioId}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const updatedPortfolios = portfolios.map((portfolio) => {
        if (portfolio.id === editingPortfolioId) {
          return response.data.data;
        }
        return portfolio;
      });
      setPortfolios(updatedPortfolios);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Portfolio updated successfully",
      });

      // Reset form and state
      setFormDataPortfolio({
        ...formDataPortfolio,
        application_name: "",
        link_repo: "",
        image: "",
      });
      setSelectedPortfolioType("");
      setImage("");
      setEditingPortfolioId(""); // Clear the portfolioId state
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error.response.data.message,
      });
    }
  };

  // Fungsi untuk menangani perubahan foto
  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    if (selectedPhoto) {
      setPhoto(selectedPhoto);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedPhoto);
    }
  };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();

    try {
      // Jika foto telah diubah
      if (photo) {
        const formDataToSend = new FormData();
        formDataToSend.append("photo", photo);

        const token = localStorage.getItem("token");
        const response = await api.put("/workers/profile/photo", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Profile photo updated successfully",
        });

        setFormData({
          ...formData,
          photo: response.data.data.photo,
        });
      } else {
        // Jika foto tidak diubah
        const response = await api.put("/workers/profile", formData);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Profile updated successfully",
        });

        setWorkerData(response.data.data);
      }
    } catch (error) {
      console.error(error);

      // Tampilkan pesan error sesuai kondisi
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: photo ? "Failed to update profile photo" : "Failed to update profile",
      });
    }
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container-fluid bg-primary w-full h-[55vh] ">
          <NavbarUtama />

          <div className="container-edit pt-20 flex flex-col md:flex-row md:items-start justify-center mt-10 pb-12 lg:gap-10 md:gap-10 sm:gap-0">
            <section>
              <div className="wrapper-edit">
                <div className="container-edit-profile px-8 bg-white w-full md:w-[400px] md:shadow-lg sm:shadow-none rounded-md">
                  <div className="flex flex-col justify-center items-center pb-10">
                    <div className="relative">
                      <img src={previewImage || workerData?.photo || ProfileImage} alt="Foto Profil" className="rounded-full mt-6 w-36 h-36 object-cover" />
                      <form onSubmit={handleSubmitProfile} encType="multipart/form-data">
                        <label htmlFor="photo" className="cursor-pointer relative flex items-center justify-center mt-4">
                          <FaPencilAlt className="text-secondary text-xl cursor-pointer mr-2" />
                          <span>Edit</span>
                          <input type="file" id="photo" name="photo" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                        </label>
                      </form>
                    </div>

                    <div className="desc mt-8 w-full pl-4">
                      <h1 className="text-2xl font-semibold mb-2">{workerData.name}</h1>
                      <p className="text-[#1F2A36] mb-4 text-[15px]">{workerData.job_desk ? workerData.job_desk : "-"}</p>
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
                      <p className="text-gray-600">{workerData.description ? workerData.description : "-"}</p>
                      <div className="wrapper-btn-hire mt-8">
                        {/* SIMPAN DAN BATAL */}

                        <button type="submit" onClick={handleSubmitProfile} className="w-full text-white bg-primary hover:bg-hoverPrimary p-3 font-bold rounded-md">
                          Simpan
                        </button>

                        <Link to="/profile">
                          <button className="w-full bg-white text-primary border-2 border-primary font-bold hover:bg-hoverPrimary hover:text-white p-3 rounded-md mt-3">Batal</button>
                        </Link>
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
                        <h1 className="text-3xl mb-4">Data diri</h1>
                        <hr className="border-b-2 border-[#C4C4C4] my-1" />
                      </div>
                      <form className="form-edit-profile mt-8" onSubmit={handleSubmitProfile}>
                        <div className="mb-4">
                          <label htmlFor="nama-lengkap" className="block text-[16px] font-medium text-gray-600">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                            placeholder="Masukan nama lengkap"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="jobdesk" className="block text-[16px] font-medium text-gray-600">
                            Job desk
                          </label>
                          <input
                            type="text"
                            id="job_desk"
                            name="job_desk"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                            placeholder="Masukan job desk"
                            value={formData.job_desk}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="Domisili" className="block text-[16px] font-medium text-gray-600">
                            Domisili
                          </label>
                          <input
                            type="text"
                            id="domicile"
                            name="domicile"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                            placeholder="Masukan domisili"
                            value={formData.domicile}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="Tempat kerja" className="block text-[16px] font-medium text-gray-600">
                            Tempat kerja
                          </label>
                          <input
                            type="text"
                            id="workplace"
                            name="workplace"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                            placeholder="Masukan tempat kerja"
                            value={formData.workplace}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="deskripsi" className="block text-[16px] font-medium text-gray-600">
                            Deskripsi singkat
                          </label>
                          <textarea
                            type="text"
                            id="description"
                            name="description"
                            className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-primary resize-none"
                            placeholder="Tuliskan deskripsi singkat"
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* SKILL */}
                <div className="container-edit-profile px-8 bg-white w-full md:w-[750px] md:shadow-lg sm:shadow-none rounded-md mb-10">
                  <div className="flex flex-col justify-center items-center pb-10">
                    <div className="desc mt-8 w-full">
                      <div className="hadline">
                        <h1 className="text-3xl mb-4">Skill</h1>
                        <hr className="border-b-2 border-[#C4C4C4] my-1" />
                      </div>
                      <div className="card-skill relative p-2 md:p-4">
                        <div className="wrapper-skill grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mb-2">
                          {skills.map((skill, index) => (
                            <div key={skill.id + index} className="relative">
                              <div className="w-full h-full p-2 rounded-md bg-accent bg-opacity-60 border-solid border-2 border-accent text-center text-white text-xs md:text-sm">{skill.skill_name}</div>
                              <button onClick={() => handleDeleteClick(skill.id)} className="btn-delete absolute top-0 right-0 p-1">
                                <FaTimes size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                        <hr />
                      </div>

                      <form className="form-edit-profile mt-8">
                        <div className="mb-4">
                          <div className="flex items-center">
                            <input
                              type="text"
                              id="skill-name"
                              name="skill_name"
                              className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                              placeholder="Java"
                              value={formDataSkill.skill_name}
                              onChange={handleInputSkill}
                            />
                            <button type="button" onClick={handleSubmitSkill} className="ml-2 w-20 h-12 bg-amber-400 rounded shadow flex items-center justify-center transition-all duration-300 hover:bg-amber-500 hover:shadow-md">
                              <div className="text-white text-sm font-bold font-open-sans">Simpan</div>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* PENGALAMAN KERJA */}
                <div className="container-edit-profile px-8 bg-white w-full md:w-[750px] md:shadow-lg sm:shadow-none rounded-md mb-10">
                  <div className="flex flex-col justify-center items-center pb-10">
                    <div className="desc mt-8 w-full">
                      <div className="hadline">
                        <h1 className="text-3xl mb-4">Pengalaman Kerja</h1>
                        <hr className="border-b-2 border-[#C4C4C4] my-1" />
                      </div>

                      {workExperiences && workExperiences.length > 0 ? (
                        <div>
                          {workExperiences.map((experience, index) => (
                            <div key={experience.id + index} className="card-pengalaman-kerja relative">
                              <div className="wrapper-pengalaman-kerja flex flex-col gap-4 md:flex-row md:items-center md:gap-10 mt-12 mb-4">
                                <img src={IconPerusahaan} alt="icon perusahaan" className="w-[60px] h-[60px]" />
                                <div className="desc-time flex-1">
                                  <h4 className="text-lg">{experience.position}</h4>
                                  <h5 className="text-lg mb-1">{experience.company}</h5>
                                  <div className="time flex text-[#9EA0A5] text-[14px] gap-3 mb-2">
                                    <p>
                                      {experience.work_month} - {experience.work_year}
                                    </p>
                                    {/* <p>{experience.duration}</p> */}
                                  </div>
                                  <div className="desc-diri">
                                    <p className="text-[12px]">{experience.description}</p>
                                  </div>
                                </div>
                                <div className="edit-delete flex gap-3">
                                  <button className="text-[#9EA0A5] hover:text-amber-500" onClick={() => handleEditExperience(experience.id)}>
                                    <FaEdit />
                                  </button>
                                  <button className="text-[#9EA0A5] hover:text-amber-500" onClick={() => handleDeleteClickExperience(experience.id)}>
                                    <FaTrash />
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center mt-4">Belum ada pengalaman kerja</p>
                      )}

                      <form className="form-edit-profile mt-8">
                        <div className="mb-4">
                          <label htmlFor="posisi" className="block text-[16px] font-medium text-gray-600">
                            Posisi
                          </label>
                          <input
                            type="text"
                            id="position"
                            name="position"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                            placeholder="Masukkan posisi Anda"
                            value={formDataExperience.position}
                            onChange={handleInputExperience}
                          />
                        </div>

                        <div className="mb-4 flex">
                          <div className="flex-1 mr-2">
                            <label htmlFor="nama-perusahaan" className="block text-[16px] font-medium text-gray-600">
                              Nama Perusahaan
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                              placeholder="Masukkan nama perusahaan"
                              value={formDataExperience.company}
                              onChange={handleInputExperience}
                            />
                          </div>

                          <div className="flex-1 ml-2">
                            <label htmlFor="bulan-tahun" className="block text-[16px] font-medium text-gray-600">
                              Bulan
                            </label>
                            <input
                              type="text"
                              id="work_month"
                              name="work_month"
                              className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                              placeholder="Contoh: Januari"
                              value={formDataExperience.work_month}
                              onChange={handleInputExperience}
                            />
                          </div>

                          <div className="flex-1 ml-2">
                            <label htmlFor="bulan-tahun" className="block text-[16px] font-medium text-gray-600">
                              Tahun
                            </label>
                            <input
                              type="text"
                              id="work_year"
                              name="work_year"
                              className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                              placeholder="Contoh: 2018"
                              value={formDataExperience.work_year}
                              onChange={handleInputExperience}
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="deskripsi" className="block text-[16px] font-medium text-gray-600">
                            Deskripsi Singkat
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-primary resize-none"
                            placeholder="Deskripsikan pekerjaan Anda"
                            value={formDataExperience.description}
                            onChange={handleInputExperience}
                          />
                        </div>

                        <button
                          type="button"
                          onClick={isEditing ? handleUpdateExperience : handleSubmitExperience}
                          className="w-full flex items-center justify-center bg-amber-400 text-white py-3 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:border-primary"
                        >
                          {isEditing ? (
                            <>
                              <FaEdit className="mr-2" />
                              <span>Edit Pengalaman Kerja</span>
                            </>
                          ) : (
                            <>
                              <FaPlus className="mr-2" />
                              <span>Tambah Pengalaman Kerja</span>
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Portofolio */}
                <div className="container-edit-profile px-8 bg-white w-full md:w-[750px] md:shadow-lg sm:shadow-none rounded-md">
                  <div className="flex flex-col justify-center items-center pb-10">
                    <div className="desc mt-8 w-full">
                      <div className="hadline">
                        <h1 className="text-3xl mb-4">Portofolio</h1>
                        <hr className="border-b-2 border-[#C4C4C4] my-1" />
                      </div>

                      {portfolios && portfolios.length > 0 ? (
                        <div>
                          {portfolios.map((portfolio) => (
                            <div key={portfolio.id} className="card-portofolio relative">
                              <div className="wrapper-portofolio flex flex-col gap-4 md:flex-row md:items-center md:gap-10 mt-12 mb-4">
                                <img src={portfolio.image} alt="icon perusahaan" className="w-[60px] h-[60px]" />
                                <div className="desc-time flex-1">
                                  <h4 className="text-lg">{portfolio.application_name}</h4>
                                  <div className="time flex text-[#9EA0A5] text-[14px] gap-3 mb-2">
                                    <p>
                                      <a href={portfolio.link_repo} target="_blank" rel="noopener noreferrer">
                                        {portfolio.link_repo}
                                      </a>
                                    </p>
                                    <span> - </span>
                                    <p>{portfolio.portfolio_type}</p>
                                  </div>
                                  {/* EDIT DAN DELETE */}
                                  <div className="edit-delete flex gap-3">
                                    <button className="text-[#9EA0A5] hover:text-amber-500" onClick={() => handleEditPortfolio(portfolio.id)}>
                                      <FaEdit />
                                    </button>
                                    <button className="text-[#9EA0A5] hover:text-amber-500" onClick={() => handleDeletePortfolio(portfolio.id)}>
                                      <FaTrash />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-gray-600 mt-4">Belum memiliki data portofolio.</p>
                      )}

                      <form className="form-portfolio mt-8" encType="multipart/form-data">
                        <div className="mb-4">
                          <label htmlFor="nama-aplikasi" className="block text-[16px] font-medium text-gray-600">
                            Nama Aplikasi
                          </label>
                          <input
                            type="text"
                            id="nama-aplikasi"
                            name="application_name"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                            placeholder="Masukkan nama aplikasi"
                            required
                            value={formDataPortfolio.application_name}
                            onChange={handleInputPortfolio}
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="link-repository" className="block text-[16px] font-medium text-gray-600">
                            Link Repository
                          </label>
                          <input
                            type="text"
                            id="link-repository"
                            name="link_repo"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-primary"
                            placeholder="Masukkan link repository"
                            required
                            value={formDataPortfolio.link_repo}
                            onChange={handleInputPortfolio}
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-[16px] font-medium text-gray-600">Type Portofolio</label>
                          <div className="flex mt-4">
                            <div className="mr-4">
                              <input
                                type="radio"
                                id="aplikasi-mobile"
                                name="portfolio_type"
                                value="Aplikasi mobile"
                                checked={selectedPortfolioType === "Aplikasi mobile"}
                                onChange={handleRadioChange}
                                className="mr-2 focus:ring focus:border-primary"
                              />
                              <label htmlFor="aplikasi-mobile">Aplikasi mobile</label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="aplikasi-web"
                                name="portfolio_type"
                                value="Aplikasi web"
                                checked={selectedPortfolioType === "Aplikasi web"}
                                onChange={handleRadioChange}
                                className="mr-2 focus:ring focus:border-primary"
                              />
                              <label htmlFor="aplikasi-web">Aplikasi web</label>
                            </div>
                          </div>
                        </div>

                        <div className="container-upload-image mb-10">
                          <label htmlFor="upload-image" className="block text-[16px] font-medium text-gray-600">
                            Upload gambar
                          </label>
                          <div className="wrapper-upload-image flex flex-col justify-center items-center border-dashed border-2 border-[#9EA0A5] pb-8 mt-5">
                            <input type="file" id="upload-image" name="image" accept="image/png, image/jpeg" onChange={handleImageChange} className="hidden" />
                            <label htmlFor="upload-image" className="cursor-pointer">
                              {image ? (
                                <div className="preview-image mt-5">
                                  <img src={image} alt="Preview" className="w-full h-full object-cover rounded-md" />
                                </div>
                              ) : (
                                <>
                                  <div className="wrapper-cloud flex flex-col justify-center items-center">
                                    <img src={Cloud} alt="cloud icon" className="w-[40%]" />
                                    <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                                    <p>Atau cari untuk mengupload file dari direktorimu.</p>
                                  </div>
                                  <div className="desc flex justify-center items-center mt-5 gap-7">
                                    <div className="example-image flex items-center gap-4">
                                      <img src={Example} alt="" />
                                      <p className="w-[100px] text-[12px]">High-Res Image PNG, JPG, or GIF</p>
                                    </div>
                                    <div className="expand-image flex items-center gap-4">
                                      <img src={Expand} alt="" />
                                      <p className="text-[12px]">
                                        Size
                                        <br />
                                        1080x1920 or 600x800
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )}
                            </label>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={isEditing ? handleUpdatePortfolio : handleSubmitPortfolio}
                          className="w-full flex items-center justify-center bg-amber-400 text-white py-3 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:border-primary"
                        >
                          {isEditing ? (
                            <>
                              <FaEdit className="mr-2" />
                              <span>Edit Portofolio</span>
                            </>
                          ) : (
                            <>
                              <FaPlus className="mr-2" />
                              <span>Tambah Portofolio</span>
                            </>
                          )}
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
      )}
    </>
  );
}

export default EditWorker;
