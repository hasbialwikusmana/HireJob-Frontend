import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero1 from "../../assets/img/home/1.svg";
import Hero2 from "../../assets/img/home/2.svg";
import Hero3 from "../../assets/img/home/3.svg";
import Testimoni1 from "../../assets/img/testimoni/1.png";
import Testimoni2 from "../../assets/img/testimoni/2.png";
import Testimoni3 from "../../assets/img/testimoni/3.png";
import { FaCheckCircle } from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      {/* Section 1 */}
      <section className="container mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <h1 className="text-4xl font-bold md:text-6xl">
            Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
          </h1>
          <p className="mt-10 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> In euismod ipsum et dui rhoncus auctor.
          </p>
          <Link href="/detail">
            <button className="bg-[#5E50A1] px-5 py-3 rounded text-white">Mulai Dari Sekarang</button>
          </Link>
        </div>

        <div className="order-first md:order-last">
          <img src={Hero1} width={600} height={600} alt="hero-image" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="container mx-auto md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <img src={Hero2} width={600} height={600} alt="hero-image" />
        </div>

        <div>
          <h1 className="text-4xl md:text-start text-center md:text-5xl mb-10">
            Kenapa harus mencari tallent <br /> di peworld
          </h1>

          {["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."]?.map((item, id) => (
            <div className="flex items-center w-3/4 mx-auto gap-5 mb-5 justify-left md:justify-start" key={id}>
              <FaCheckCircle className="text-[#5E50A1]" width={20} height={20} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="container mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10 p-5">
        <div>
          <h1 className="text-4xl mb-5">Skill Tallent</h1>
          <p className="text-lg text-center md:text-start mb-5">
            Lorem ipsum dolor sit amet, <br /> In euismod ipsum et dui rhoncus auctor.
          </p>
          <div className="grid grid-cols-2">
            <div>
              {["Java", "Kotlin", "PHP", "Javascript"]?.map((item, id) => (
                <div className="flex items-center gap-5 mb-5" key={id}>
                  <FaCheckCircle className="text-accent" width={20} height={20} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div>
              {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"]?.map((item, id) => (
                <div className="flex items-center gap-5 mb-5" key={id}>
                  <FaCheckCircle className="text-accent" width={20} height={20} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img src={Hero3} width={600} height={600} alt="hero-image" />
        </div>
      </section>

      {/* Section 4 */}
      <section className=" bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="font-semibold text-4xl mb-20 text-textMain">Their Opinion About Peworld</h2>
          <div className="grid grid-cols-1 md:grid-cols-3   gap-8 mx-auto">
            {/* Testimonial Item 1 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              {/* image */}
              <img src={Testimoni1} width={100} height={100} className="rounded-full mx-auto mb-4" alt="hero-image" />
              {/* nama */}
              <p className="text-textMain font-bold text-2xl mb-2">Harry Styles</p>
              {/* kerjaan */}
              <p className="text-gray-600 text-lg mb-4">Web Developer</p>
              {/* testimoni */}
              <p className="text-gray-600 text-lg mb-0 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>

            {/* Testimonial Item 2 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img src={Testimoni2} width={100} height={100} className="rounded-full mx-auto mb-4" alt="hero-image" />
              <p className="text-textMain font-bold text-2xl mb-2">Niall Horan</p>
              {/* kerjaan */}
              <p className="text-gray-600 text-lg mb-4">Web Developer</p>
              {/* testimoni */}
              <p className="text-gray-600 text-lg mb-0 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Testimonial Item 3 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img src={Testimoni3} width={100} height={100} className="rounded-full mx-auto mb-4" alt="hero-image" />
              {/* nama */}
              <p className="text-textMain font-bold text-2xl mb-2">Louis Tomlinson</p>
              {/* kerjaan */}
              <p className="text-gray-600 text-lg mb-4">Web Developer</p>
              {/* testimoni */}
              <p className="text-gray-600 text-lg mb-0 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5E50A1] mt-10 mb-20 w-2/3 p-5 md:p-11 mx-auto rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl text-center md:flex md:justify-between md:items-center">
        <h1 className="text-2xl mb-10 md:mb-0 md:3xl text-white">
          Lorem ipsum
          <br />
          dolor sit amet
        </h1>
        <div>
          <Link href="/detail">
            <button className="bg-slate-100 text-[#5E50A1] font-bold md:p-3 p-2 rounded-md">Mulai Dari Sekarang</button>
          </Link>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
