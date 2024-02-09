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
      <div className="h-screen md:px-20 sm:px-0 pt-12">
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
          <div className="w-full lg:w-full flex flex-col justify-center p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-medium">Halo, Pewpeople</h1>
            <p className="text-[18px] md:text-lg mt-4 md:mt-6 mb-8 md:mb-12 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

            {/* Worker/Recruiter Button */}
            <div className="flex md:flex-row items-center gap-2 mb-8 md:mb-12">
              <button
                onClick={handleWorkerClick}
                className={`px-6 py-3 ${isWorkerActive ? "bg-primary hover:bg-hoverPrimary text-white" : "bg-white hover:bg-hoverPrimary hover:text-white text-primary"} border-solid border-2 border-primary font-bold`}
              >
                Worker
              </button>
              <button
                onClick={handleRecruiterClick}
                className={`px-6 py-3 ${isWorkerActive ? "bg-white hover:bg-hoverPrimary hover:text-white text-primary" : "bg-primary hover:bg-hoverPrimary text-white"} border-solid border-2 border-primary font-bold`}
              >
                Recruiter
              </button>
            </div>

            {isWorkerActive ? (
              // Worker Form
              <div className="flex h-[40vh] flex-col gap-8 md:gap-8 mb-8 md:mb-12">
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
                    className="w-full border-2 p-3 outline-primary"
                    // onChange={(e) => setFullname(e.target.value)}
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
                    className="w-full border-2 p-3 outline-primary"
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
                    className="w-full border-2 p-3 outline-primary"
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm text-gray-400">
                    Konfirmasi Password
                  </label>
                  <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Konfirmasi Password" className="w-full border-2 p-3 outline-primary" />
                </div>

                <div>
                  <button className=" w-full border-2 p-3 outline-primary rounded-md bg-[#FBB017] font-bold text-white mb-10 ">Daftar</button>

                  <p className="text-center mb-10">
                    Anda sudah punya akun?{" "}
                    <Link to="/auth/login" className="text-[#FBB017]">
                      Masuk disini
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              // Recruiter Form
              <div className="flex h-[40vh] flex-col gap-8 md:gap-8 mb-8 md:mb-12">
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
                    className="w-full border-2 p-3 outline-primary"
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
                    className="w-full border-2 p-3 outline-primary"
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
                    className="w-full border-2 p-3 outline-primary"
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
                    className="w-full border-2 p-3 outline-primary"
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
                    className="w-full border-2 p-3 outline-primary"
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm text-gray-400">
                    Konfirmasi Password
                  </label>
                  <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Konfirmasi Password" className="w-full border-2 p-3 outline-primary" />
                </div>

                <div>
                  <button className=" w-full border-2 p-3 outline-primary rounded-md bg-accent hover:bg-hoverAccent font-bold text-white mb-10 ">Daftar</button>

                  <p className="text-center mb-10">
                    Anda sudah punya akun?{" "}
                    <Link to="/auth/login" className="text-[#FBB017]">
                      Masuk disini
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {/* <div className="flex h-[40vh] flex-col gap-8 ">
             
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
