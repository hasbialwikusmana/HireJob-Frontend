import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../services/auth";
import Logo from "../../assets/img/logo/logo-putih.svg";
import LoginImage from "../../assets/img/login/objek.png";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isWorkerActive, setWorkerActive] = useState(true);

  const handleWorkerClick = () => {
    setWorkerActive(true);
  };

  const handleRecruiterClick = () => {
    setWorkerActive(false);
  };
  const navigate = useNavigate();

  const handleLoginWorker = async (e) => {
    e.preventDefault();
    const success = await AuthServices.loginWorker(email, password);
    if (success) {
      navigate("/");
    }
  };

  const handleLoginRecruiter = async (e) => {
    e.preventDefault();
    const success = await AuthServices.loginRecruiter(email, password);
    if (success) {
      navigate("/");
    }
  };
  return (
    <>
      <div className="h-screen md:px-20 sm:px-0 pt-12 bg-[#f6f7f8]">
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
              <div className="flex h-[40vh] flex-col gap-8 md:gap-8 mb-8 md:mb-12">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400">
                    Email
                  </label>
                  <input type="text" id="email" name="email" placeholder="Masukkan Alamat Email" className="w-full border-2 p-3 outline-primary" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm text-gray-400">
                    Password
                  </label>
                  <input type="password" id="password" name="password" placeholder="Masukkan Password" className="w-full border-2 p-3 outline-primary" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                  <button className="place-self-end mb-2 md:mb-5">Lupa Kata Sandi?</button>
                  <button onClick={handleLoginWorker} className=" w-full border-2 p-3 rounded-md bg-[#FBB017] font-bold text-white mb-10 ">
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
            ) : (
              <div className="flex h-[40vh] flex-col gap-8 md:gap-8 mb-8 md:mb-12">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400">
                    Email
                  </label>
                  <input type="text" id="email" name="email" placeholder="Masukkan Alamat Email" className="w-full border-2 p-3 outline-primary" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm text-gray-400">
                    Password
                  </label>
                  <input type="password" id="password" name="password" placeholder="Masukkan Password" className="w-full border-2 p-3 outline-primary" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                  <button className="place-self-end mb-2 md:mb-5">Lupa Kata Sandi?</button>
                  <button onClick={handleLoginRecruiter} className=" w-full border-2 p-3 rounded-md bg-[#FBB017] font-bold text-white mb-10 ">
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
