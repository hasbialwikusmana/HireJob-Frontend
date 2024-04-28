import { FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";
import ProfileImage from "../../assets/img/profile/user.png";
import { Link } from "react-router-dom";
import NavbarUtama from "../../components/Navbar/NavbarUtama";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";
import LoadingSpinner from "../../components/LoadingSpinner";

function EditRecruiter() {
  const [photo, setPhoto] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [recruiterData, setRecruiterData] = useState({});
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    city: "",
    description: "",
    phone: "",
    instagram: "",
    linkedin: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const recruiterResponse = await api.get("/recruiters/profile");

        setRecruiterData(recruiterResponse.data.data);

        // Update form data with worker data
        const existingData = recruiterResponse.data.data;

        setFormData({
          company: existingData.company || "",
          position: existingData.position || "",
          city: existingData.city || "",
          description: existingData.description || "",
          phone: existingData.phone || "",
          instagram: existingData.instagram || "",
          linkedin: existingData.linkedin || "",
          photo: existingData.photo || "",
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        const response = await api.put("/recruiters/profile/photo", formDataToSend, {
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
        const response = await api.put("/recruiters/profile", formData);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Profile updated successfully",
        });

        setRecruiterData(response.data.data);
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
                      <img src={previewImage || recruiterData?.photo || ProfileImage} alt="Foto Profil" className="rounded-full mt-6 w-36 h-36 object-cover" />
                      <form onSubmit={handleSubmitProfile} encType="multipart/form-data">
                        <label htmlFor="photo" className="cursor-pointer relative flex items-center justify-center mt-4">
                          <FaPencilAlt className="text-secondary text-xl cursor-pointer mr-2" />
                          <span>Edit</span>
                          <input type="file" id="photo" name="photo" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                        </label>
                      </form>
                    </div>

                    <div className="desc mt-8 w-full pl-4">
                      <h1 className="text-2xl font-semibold mb-2">{recruiterData.company}</h1>
                      <p className="text-[#1F2A36] mb-4 text-[15px]">{recruiterData.position ? recruiterData.position : "-"}</p>
                      <div className="location flex gap-3 mb-2">
                        {recruiterData?.city ? (
                          <>
                            <FaMapMarkerAlt className="text-[#9EA0A5]" />
                            <p className="text-gray-600 text-[14px]">{recruiterData.city}</p>
                          </>
                        ) : (
                          <p className="text-gray-600 text-[14px]">-</p>
                        )}
                      </div>

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
                          <label htmlFor="company" className="block text-[16px] font-medium text-gray-600">
                            Nama Perusahaan
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Masukan nama perusahaan"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="position" className="block text-[16px] font-medium text-gray-600">
                            Bidang
                          </label>
                          <input
                            type="text"
                            id="position"
                            name="position"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Masukan bidang perusahaan ex: Financial"
                            value={formData.position}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="city" className="block text-[16px] font-medium text-gray-600">
                            Kota
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Masukan kota"
                            value={formData.city}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="description" className="block text-[16px] font-medium text-gray-600">
                            Deskripsi singkat
                          </label>
                          <textarea
                            type="text"
                            id="description"
                            name="description"
                            className="mt-1 p-4 border w-full h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
                            placeholder="Tuliskan deskripsi singkat"
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="instagram" className="block text-[16px] font-medium text-gray-600">
                            Instagram
                          </label>
                          <input
                            type="text"
                            id="instagram"
                            name="instagram"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Masukan nama Instagram"
                            value={formData.instagram}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-[16px] font-medium text-gray-600">
                            Nomor Telepon
                          </label>
                          <input
                            type="number"
                            id="phone"
                            name="phone"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Masukan nomor telepon"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="linkedin" className="block text-[16px] font-medium text-gray-600">
                            Linkedin
                          </label>
                          <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            className="mt-1 p-4 border w-full h-12 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Masukan nama Linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                          />
                        </div>
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

export default EditRecruiter;
