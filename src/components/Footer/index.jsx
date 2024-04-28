import Logo from "../../assets/img/logo/logo-putih.svg";

function Footer() {
  return (
    <>
      <footer className="bg-primary p-10">
        <div className="w-5/6 mx-auto">
          <img src={Logo} width={178} height={50} alt="icon" />
          <p className="mt-5 text-white">
            Peworld adalah platform pencarian kerja untuk para profesional. <br /> Temukan pekerjaan impianmu dan kembangkan karir bersama kami. <br /> Hubungi kami untuk informasi lebih lanjut.
          </p>
          <hr className="mt-14" />
          <div className="flex justify-between mt-3 text-white">
            <p>© 2020 Peworld. All right reserved</p>
            <span className="flex gap-10">
              <button className="text-white">Telepon</button>
              <button className="text-white">Email</button>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
