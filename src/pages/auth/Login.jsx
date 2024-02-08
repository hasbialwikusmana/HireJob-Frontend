import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo-putih.svg";
import LoginImage from "../../assets/img/login/objek.png";
import { useState } from "react";

function Login() {
  const [isWorkerActive, setWorkerActive] = useState(true);

  const handleWorkerClick = () => {
    setWorkerActive(true);
  };

  const handleRecruiterClick = () => {
    setWorkerActive(false);
  };
  return (
    <>
      <div className="h-screen px-20 pt-12">
        <div className="flex-col md:flex md:flex-row items-center gap-16">
          <div className="w-full relative">
            <img className="bg-red absolute left-10 top-10 z-10 hidden md:block" src={Logo} width={86} height={50} alt="icon" />
            <div className="flex justify-center items-center relative text-left">
              <h1 className="absolute left-10 top-60 text-5xl text-white font-medium z-10 hidden md:block">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>
            <div
              className='before:content-[" "] before:absolute before:inset-0 before:block relative hidden md:block before:opacity-75 before:bg-[#5E50A1] bg-blue-900 bg-cover bg-no-repeat bg-center h-[90vh]'
              style={{ backgroundImage: `url(${LoginImage})` }}
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-3xl font-medium">Halo, Pewpeople</h1>
            <p className="text-[18px] mt-[16px] mb-[52px] text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

            {/* Worker/Recruiter Button */}
            <div className="flex justify-center mb-8">
              <button onClick={handleWorkerClick} className={`px-6 py-3 ${isWorkerActive ? "bg-primary text-white" : "bg-white text-primary"} border-solid border-2 border-primary font-bold`}>
                Worker
              </button>
              <button onClick={handleRecruiterClick} className={`px-6 py-3 ${isWorkerActive ? "bg-white text-primary" : "bg-primary text-white"} border-solid border-2 border-primary font-bold`}>
                Recruiter
              </button>
            </div>

            {/* {errMsg ? (
                     <div className="bg-[#f8d7da] text-[#721c24] p-4 rounded-lg w-[95%]">
                     {errMsg}
                 </div>
                   ) : null} */}
            <div className="flex flex-col gap-8 mb-[24px]">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Masukkan Alamat Email"
                  className="w-full border-2 p-3"
                  // onChange={(e) => setEmail(e.target.value)}
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
                  className="w-full border-2 p-3"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="place-self-end mb-[24px]">Lupa Kata Sandi?</button>
            <button
              // onClick={handleLogin}
              // disabled={isLoading}
              className="p-3 rounded-md bg-[#FBB017] font-bold text-white mb-[28px]"
            >
              {/* {isLoading ? "Loading..." : "Masuk"} */}
              Masuk
            </button>
            <p className="text-center">
              Anda belum punya akun?{" "}
              <Link to="/auth/register" className="text-[#FBB017]">
                Daftar disini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
