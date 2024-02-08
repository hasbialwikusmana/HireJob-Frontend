import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo-putih.svg";
import LoginImage from "../../assets/img/login/objek.png";
import { useState } from "react";

function Register() {
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
            <div className="flex justify-center relative">
              <h1 className="absolute left-10 top-60 text-5xl text-white font-medium z-10 hidden md:block">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>
            <div
              className='before:content-[" "] before:absolute before:inset-0 before:block relative hidden md:block before:opacity-75 before:bg-[#5E50A1] bg-blue-900 bg-cover bg-no-repeat bg-center h-[90vh]'
              style={{ backgroundImage: `url(${LoginImage})` }}
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <h1 className="text-5xl font-medium">Halo, Pewpeople</h1>
            <p className="text-[18px] mt-[16px] mb-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

            {/* Worker/Recruiter Button */}
            <div className="flex justify-center mb-8">
              <button onClick={handleWorkerClick} className={`px-6 py-3 ${isWorkerActive ? "bg-primary text-white" : "bg-white text-primary"} border-solid border-2 border-primary font-bold`}>
                Worker
              </button>
              <button onClick={handleRecruiterClick} className={`px-6 py-3 ${isWorkerActive ? "bg-white text-primary" : "bg-primary text-white"} border-solid border-2 border-primary font-bold`}>
                Recruiter
              </button>
            </div>
            {/* {isSuccess ? (
                        <div className="bg-[#d1e7dd] text-[#0f5132] p-4 rounded-lg w-[90%] mb-[30px]">
                            <p>Login Success</p>
                        </div>
                    ) : null} */}

            {/* {errMsg ? (
                        <div className="bg-[#f8d7da] text-[#721c24] p-4 rounded-lg w-[95%]">
                            {errMsg}
                        </div>
                    ) : null} */}
            <div className="flex h-[40vh] flex-col gap-8 ">
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
                <label htmlFor="fullname" className="block text-sm text-gray-400">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Masukkan Nama Lengkap"
                  className="w-full border-2 p-3"
                  // onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="perusahaan" className="block text-sm text-gray-400">
                  Perusahaan
                </label>
                <input
                  type="text"
                  id="perusahaan"
                  name="perusahaan"
                  placeholder="Masukkan Nama Perusahaan"
                  className="w-full border-2 p-3"
                  // onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="jabatan" className="block text-sm text-gray-400">
                  Jabatan
                </label>
                <input
                  type="text"
                  id="jabatan"
                  name="jabatan"
                  placeholder="Posisi di perusahaan anda"
                  className="w-full border-2 p-3"
                  // onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="nohp" className="block text-sm text-gray-400">
                  No Handphone
                </label>
                <input
                  type="text"
                  id="nohp"
                  name="nohp"
                  placeholder="Masukkan no handphone"
                  className="w-full border-2 p-3"
                  // onChange={(e) => setPhoneNumber(e.target.value)}
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
              <div>
                <label htmlFor="confirmPassword" className="block text-sm text-gray-400">
                  Konfirmasi Password
                </label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Konfirmasi Password" className="w-full border-2 p-3" />
              </div>

              <div>
                <button className=" w-full border-2 p-3 rounded-md bg-[#FBB017] font-bold text-white mb-10 ">
                  {/* {isLoading ? "Loading..." : "Daftar"} */}
                  Daftar
                </button>

                <p className="text-center mb-10">
                  Anda sudah punya akun?{" "}
                  <Link to="/auth/login" className="text-[#FBB017]">
                    Login disini
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
