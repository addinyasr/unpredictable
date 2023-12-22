import DoctorCard from "../../components/Caleg/CalegCard";
import { doctors } from "../../assets/data/doctors";
import icon01 from "../../assets/images/PDP.png";
import icon02 from "../../assets/images/PK.png";
import icon03 from "../../assets/images/PKK.png";
import icon04 from "../../assets/images/anggota1.png";
import icon05 from "../../assets/images/anggota2.png";
import icon06 from "../../assets/images/gambarbaru.png";

const Caleg = () => {
  return (
    <>
      <section className="bg-[#fff]">
        <div className="container text-center">
          <h2 className="heading">Membangun Masyarakat Pemilih Cerdas</h2>
          <p className="text__para text">
            Mempertimbangkan berdasarkan visi misi dari masing-masing calon
          </p>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Cari Disini!"
            />
          </div>
        </div>
      </section>
      {/* ========= Card Parlemen ========== */}
      <section>
        <div className="heading px-9 col-10 text-lg ">
          DAFTAR PARTAI DI PARLEMEN
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-lg text-center px-10">PARTAI DEMOKRASI PERUBAHAN</h2>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-lg text-center px-10">PARTAI DEMOKRASI PERUBAHAN</h2>
              </div>
            </div>
            
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-lg text-center px-10">PARTAI DEMOKRASI PERUBAHAN</h2>
              </div>
            </div>

          </div>
          
      </section>

      {/* ========= End Card Parlemen ======== */}

      {/* ============ Anggota Parlemen Card ============  */}
      <section>
        <div className="heading px-9 col-10 text-lg ">
          DAFTAR ANGGOTA PARLEMEN
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon04} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-lg text-center px-10">H. Syaifuddin, S.Sos.</h2>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon05} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-lg text-center px-10">Heru widodo, S.Psi.</h2>
              </div>
            </div>
            
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon06} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-lg text-center px-10">Drs. H. Guntur Sasono, M.Si.</h2>
              </div>
            </div>

          </div>
          
      </section>

      {/* ========== End Anggota Parlemen ===========  */}
    </>
  );
};

export default Caleg;
