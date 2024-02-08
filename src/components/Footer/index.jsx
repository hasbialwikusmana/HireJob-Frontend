import Logo from "../../assets/img/logo/logo-putih.svg";

function Footer() {
  return (
    <>
      <footer className="bg-primary p-10">
        <div className="w-full mx-auto">
          <img src={Logo} width={178} height={50} alt="icon" />
          <p className="mt-5 text-white">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. In euismod ipsum et dui <br /> rhoncus auctor.
          </p>
          <hr className="mt-14" />
          <div className="flex justify-between mt-3 text-white">
            <p>2020 Peworld. All right reserved</p>
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
