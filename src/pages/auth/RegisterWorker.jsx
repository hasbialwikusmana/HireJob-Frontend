import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo/logo-putih.svg";
import LoginImage from "../../assets/img/login/objek.png";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";

function Register() {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleChanges = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/workers/register", dataRegister);

      Swal.fire({
        icon: "success",
        title: "Register success",
        text: "You will be redirected to the login page",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/auth/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <>
      <div className="h-screen md:px-20 sm:px-0 pt-12">
        <div className="flex-col md:flex md:flex-row items-center gap-16">
          <div className="w-full relative">
            <img className="bg-red absolute left-10 top-10 z-10 hidden md:block" src={Logo} width={86} height={50} alt="icon" />
            <div className="flex justify-center items-center relative text-left">
              <h1 className="absolute left-10 top-60 text-5xl text-white font-[700] z-10 hidden md:block">
                Temukan developer berbakat & terbaik <br />
                di berbagai bidang keahlian
              </h1>
            </div>
            <div
              className='before:content-[" "] before:absolute before:inset-0 before:block relative hidden md:block before:opacity-75 before:bg-[#5E50A1] bg-blue-900 bg-cover bg-no-repeat bg-center h-[90vh]'
              style={{ backgroundImage: `url(${LoginImage})` }}
            />
          </div>
          <div className="w-full lg:w-full flex flex-col justify-center p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-medium">Halo, Pewpeople</h1>
            <p className="text-[18px] md:text-lg mt-4 md:mt-6 mb-8 md:mb-12 text-secondary">
              Selamat datang di Peworld. Platform kami membantu Anda menemukan developer berbakat dan terbaik di berbagai bidang keahlian. Mari bergabung dengan kami dan mulai jelajahi peluang tanpa batas.
            </p>

            {/* Worker/Recruiter Button */}
            <div className="flex md:flex-row items-center gap-2 mb-8 md:mb-12">
              <Link to="/auth/register-worker">
                <button className="px-6 py-3 bg-primary hover:bg-hoverPrimary text-white border-solid border-2 border-primary font-bold">Worker</button>
              </Link>

              <Link to="/auth/register-recruiter">
                <button className="px-6 py-3 bg-white hover:bg-hoverPrimary hover:text-white text-primary border-solid border-2 border-primary font-bold">Recruiter</button>
              </Link>
            </div>

            <form onSubmit={handleChanges} className="flex h-[40vh] flex-col gap-8 md:gap-8 mb-8 md:mb-12">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Masukkan Alamat Email"
                  className="w-full border-2 p-3 outline-primary"
                  value={dataRegister.email}
                  onChange={(e) => setDataRegister({ ...dataRegister, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="fullname" className="block text-sm text-gray-400">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Masukkan Nama Lengkap"
                  className="w-full border-2 p-3 outline-primary"
                  value={dataRegister.name}
                  onChange={(e) => setDataRegister({ ...dataRegister, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-400">
                  No Handphone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Masukkan no handphone"
                  className="w-full border-2 p-3 outline-primary"
                  value={dataRegister.phone}
                  onChange={(e) => setDataRegister({ ...dataRegister, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan Password"
                  className="w-full border-2 p-3 outline-primary"
                  value={dataRegister.password}
                  onChange={(e) => setDataRegister({ ...dataRegister, password: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-gray-400">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Konfirmasi Password"
                  className="w-full border-2 p-3 outline-primary"
                  value={dataRegister.confirmPassword}
                  onChange={(e) => setDataRegister({ ...dataRegister, confirmPassword: e.target.value })}
                />
              </div>

              <div>
                <button type="submit" onClick={handleRegister} className=" w-full border-2 p-3 outline-primary rounded-md bg-[#FBB017] font-bold text-white mb-10 ">
                  Daftar
                </button>

                <p className="text-center mb-10">
                  Anda sudah punya akun?{" "}
                  <Link to="/auth/login" className="text-[#FBB017]">
                    Masuk disini
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
