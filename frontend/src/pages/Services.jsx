import React from "react";
import logobesar from "../assets/images/logobesar.png";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Tentang Kami
          </h2>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src={logobesar} // Gantilah dengan path atau URL logo Anda
            alt="Logo"
            className=""
          />
        </div>
        <div className="text-between">
          <p className="text-gray-600">
            Website KENAL!! Merupakan sebuah situs web wadah aspirasi bagi
            masyarakat untuk dapat berinteraksi dan melakukan pertimbangan
            terhadap anggota legislatif. Website ini menyediakan beberapa fitur
            untuk membangun komunikasi yang transparan, di mana para legislator
            dapat berbagi posisi, usulan, dan pencapaian mereka. Selain itu,
            situs web yang dirancang dengan baik dapat mencakup fitur-fitur
            seperti survei, forum, dan formulir umpan balik, yang memungkinkan
            konstituen untuk menyampaikan aspirasi dan keprihatinan masyarakat
            secara langsung. Interaksi digital ini mendorong proses pengambilan
            keputusan yang lebih inklusif, memastikan bahwa anggota legislatif
            mendapat informasi tentang beragam perspektif di daerah pemilihan
            masyarakat. Secara keseluruhan, pemanfaatan situs web dalam konteks
            ini akan mendorong aksesibilitas, partisipasi, dan akuntabilitas
            dalam proses demokrasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
