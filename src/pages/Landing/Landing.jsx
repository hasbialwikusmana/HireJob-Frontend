import { Link } from "react-router-dom";
import Hero1 from "../../assets/img/home/1.svg";
import Hero2 from "../../assets/img/home/2.svg";
import Hero3 from "../../assets/img/home/3.svg";
import Testimoni1 from "../../assets/img/testimoni/1.png";
import Testimoni2 from "../../assets/img/testimoni/2.png";
import Testimoni3 from "../../assets/img/testimoni/3.png";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
function Arrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#5E50A1",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
}

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Section 1 */}
      <section className="container w-5/6 pt-20 mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <h1 className="text-4xl font-bold md:text-6xl">
            Talenta terbaik negri <br /> untuk perubahan <br /> revolusi 4.0
          </h1>
          <p className="mt-10 mb-10">
            Di era revolusi industri 4.0, kebutuhan akan talenta digital berkualitas <br /> menjadi semakin penting. Temukan talenta terbaik di bidang teknologi, <br /> desain, dan bisnis untuk membawa perusahaan Anda ke tingkat berikutnya.
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
      <section className="container w-5/6 mx-auto md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10">
        <div>
          <img src={Hero2} width={600} height={600} alt="hero-image" />
        </div>

        <div>
          <h1 className="text-4xl md:text-start text-center md:text-5xl mb-10">
            Kenapa harus mencari <br />
            tallent di peworld ?
          </h1>

          {["Akses ke talenta terbaik dari seluruh negeri.", "Proses seleksi yang ketat untuk memastikan kualitas.", "Kemudahan dalam mencari dan menyaring kandidat.", "Dukungan penuh untuk memastikan kepuasan kedua belah pihak."]?.map(
            (item, id) => (
              <div className="flex items-center w-3/4 mx-auto gap-5 mb-5 justify-left md:justify-start" key={id}>
                <FaCheckCircle className="text-[#5E50A1]" width={20} height={20} />
                <p>{item}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Section 3 */}
      <section className="container w-5/6 mx-auto text-center md:text-left flex flex-col md:flex md:flex-row justify-around items-center mt-10 p-5">
        <div>
          <h1 className="text-4xl mb-5">Skill Tallent</h1>
          <p className="text-lg text-center md:text-start mb-5">Kemampuan Talenta yang Kami Tawarkan</p>
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
      <section className="bg-[#f6f7f8] py-16">
        <div className="container w-5/6 mx-auto text-center">
          <h2 className="font-semibold text-4xl mb-20 text-textMain">Apa Kata Mereka Tentang Peworld?</h2>
          <div className="relative">
            <Slider {...settings}>
              {/* Testimonial Item 1 */}
              <div className="p-4">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <img src={Testimoni1} width={100} height={100} className="rounded-full mx-auto mb-4 border-4 border-amber-400 border-opacity-40" alt="hero-image" />
                  <p className="text-textMain font-bold text-2xl mb-2">Harry Styles</p>
                  {/* kerjaan */}
                  <p className="text-gray-600 text-lg mb-4">Web Developer</p>
                  {/* testimoni */}
                  <p className="text-gray-600 text-lg mb-0 leading-7">Mencari talenta teknologi yang tepat untuk startup kami menjadi sangat mudah dengan Peworld. Prosesnya cepat dan efisien!</p>
                </div>
              </div>

              {/* Testimonial Item 2 */}
              <div className="p-4">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <img src={Testimoni2} width={100} height={100} className="rounded-full mx-auto mb-4 border-4 border-amber-400 border-opacity-40" alt="hero-image" />
                  <p className="text-textMain font-bold text-2xl mb-2">Niall Horan</p>
                  {/* kerjaan */}
                  <p className="text-gray-600 text-lg mb-4">Web Developer</p>
                  {/* testimoni */}
                  <p className="text-gray-600 text-lg mb-0 leading-7">Peworld membantu kami menemukan developer berbakat dalam waktu singkat. Sangat direkomendasikan!</p>
                </div>
              </div>

              {/* Testimonial Item 3 */}
              <div className="p-4">
                <div className="bg-white p-6 rounded-md shadow-md">
                  <img src={Testimoni3} width={100} height={100} className="rounded-full mx-auto mb-4 border-4 border-amber-400 border-opacity-40" alt="hero-image" />
                  {/* nama */}
                  <p className="text-textMain font-bold text-2xl mb-2">Louis Tomlinson</p>
                  {/* kerjaan */}
                  <p className="text-gray-600 text-lg mb-4">Web Developer</p>
                  {/* testimoni */}
                  <p className="text-gray-600 text-lg mb-0 leading-7">Kualitas talenta yang kami dapatkan dari Peworld luar biasa. Mereka benar-benar memahami kebutuhan kami.</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5E50A1] mt-10 mb-20 w-2/3 p-5 md:p-11 mx-auto rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl text-center md:flex md:justify-between md:items-center">
        <h1 className="text-2xl mb-10 md:mb-0 md:3xl text-white text-left">Siap Membawa Perusahaan Anda ke Tingkat Berikutnya?</h1>
        <div>
          <Link href="/detail">
            <button className="bg-slate-100 text-[#5E50A1] font-bold md:p-3 p-2 rounded-md">Mulai Dari Sekarang</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
