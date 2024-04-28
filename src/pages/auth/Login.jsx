import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Logo from "../../assets/img/logo/logo-putih.svg";
import LoginImage from "../../assets/img/login/objek.png";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", dataLogin);

      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);

      Swal.fire({
        icon: "success",
        title: "Login Sukses",
        text: "Selamat datang di Peworld, temukan developer berbakat & terbaik di berbagai bidang keahlian",
        showConfirmButton: false,
        timer: 3000,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.response.data.message,
      });
    }
  };
  return (
    <>
      <div className="h-screen md:px-20 sm:px-0 pt-12 mb-20">
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

            <form onSubmit={handleLogin} className="flex h-[40vh] flex-col gap-8 md:gap-8 mb-8 md:mb-12">
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
                  value={dataLogin.email}
                  onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })}
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
                  value={dataLogin.password}
                  onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })}
                />
              </div>

              <div>
                <button type="button" className="place-self-end mb-2 md:mb-5">
                  Lupa Kata Sandi?
                </button>
                <button type="submit" className=" w-full border-2 p-3 rounded-md bg-[#FBB017] font-bold text-white mb-10 ">
                  Masuk
                </button>
                <p className="text-center">
                  Anda belum punya akun?{" "}
                  <Link to="/auth/register-worker" className="text-[#FBB017]">
                    Daftar disini
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

export default Login;
