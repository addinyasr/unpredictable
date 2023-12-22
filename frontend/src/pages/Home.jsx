import React from "react";
import heroImg01 from "../assets/images/dpr-removebg.png";
import icon01 from "../assets/images/aspirasi_figma.png";
import icon02 from "../assets/images/visimisi_logo.png";
import icon03 from "../assets/images/tanya_figma.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import CalegList from "../components/Caleg/CalegList";
import aboutImg from "../assets/images/logodprbaru.png";


const Home = () => {
  return (
    <>
      {/* ========== hero section ====== */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ======== hero content ========= */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Pemilu Legislatif 2024.
                </h1>
                <p className="text__para">
                  Layanan penyampaian aspirasi kepada para anggota dewan secara
                  online.
                </p>
                <Link to="/signup">
                <button className="btn">Daftar Untuk Beraspirasi</button>
                </Link>
              </div>

              {/* =========== hero counter =========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    5 Years
                  </h2>
                  <span className="w-[135px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Berkarya Untuk Indonesia.</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Provinsi di Indonesia.</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    1 Years
                  </h2>
                  <span className="w-[135px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Lembaga.</p>
                </div>
              </div>
            </div>
            {/* ===== hero content ===== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={aboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== hero selection end ===== */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Membangun Masyarakat Pemilih Cerdas
            </h2>
            <p className="text__para text- text-center ">
              Mempertimbangkan berdasarkan visi misi dari masing-masing calon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Memilih Anggota Parlemen
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Masyarakat dapat melihat aspirasi atau komentar terkait
                  anggota parlemen
                </p>

                <Link
                  to="/caleg"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Visualisai Visi dan Misi
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Menampilkan Visi dan Misi dari para calon kandidat
                </p>

                <Link
                  to="/caleg"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Kirimi Aspirasi
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Masyarakat dapat memberikan aspirasi melalui form ini
                </p>

                <Link
                  to="/caleg"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* ========= about content ============= */}
            <div className="w-full lg:w-1/2 xl:w-[670px]">
              <h2 className="heading text-center">DPR - RI</h2>
              <p className="text__para decoration-from-font">
                Dewan Perwakilan Rakyat Republik Indonesia, umumnya disebut
                Dewan Perwakilan Rakyat adalah salah satu lembaga tinggi negara
                dalam sistem ketatanegaraan Indonesia yang merupakan lembaga
                perwakilan rakyat. DPR terdiri atas anggota partai politik
                peserta pemilihan umum yang dipilih melalui pemilihan umum.
              </p>
            </div>

            {/* ======== about img =========== */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px]">
              <img className="object-right" src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
};

export default Home;
