import React from "react";
import aboutImg from "../../assets/images/logobesar.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ======== about img =========== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
          </div>

          {/* ========= about content ============= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading text-center"> Tentang Aplikasi Ini</h2>
            <p className="text__para decoration-from-font">
              SEBAGAI BENTUK PENYEDIAAN LAYANAN ASPIRASI KEPADA PUBLIK MAKA KAMI
              BEKERJASAMA DENGAN (PARLEMEN TERKAIT) UNTUK MENGHADIRKAN KENAL!
              SEBAGAI PLATFORM YANG MAMPU MENJAWAB KEBUTUHAN PUBLIK.
            </p>

            <Link to="/services">
              <button className="btn">Selengkapnya</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
