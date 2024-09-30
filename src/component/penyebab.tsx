import React from "react";

const Penyebab = () => {
  return (
    <div className="flex items-center justify-center pb-14 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-start text-black mb-2">
          Penyebab Banjir di Watusampu ?
        </h1>
        <p className="w-[1000px] text-lg font-medium text-slate-700 text-justify mb-4">
          Banjir di Watusampu terutama disebabkan oleh kombinasi dari faktor
          alam dan buatan. Beberapa penyebab utama meliputi:
        </p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 gap-y-12 gap-x-12">
            <p className="w-96 h-40 p-4 rounded-md shadow-xl text-lg font-medium text-white bg-slate-900 text-justify overflow-y-scroll custom-scrollbar">
              <strong className="text-orange-400">
                Curah Hujan yang Tinggi:
              </strong>{" "}
              curah hujan tinggi yang mengguyur wilayah ini sejak pagi,
              menyebabkan air mengalir dari pegunungan dengan membawa material
              lumpur yang cukup banyak.
            </p>
            <p className="w-96 h-40 p-4 rounded-md shadow-xl text-lg font-medium text-white bg-slate-900 text-justify overflow-y-scroll custom-scrollbar">
              <strong className="text-orange-400">
                Drainase yang Tidak Memadai:
              </strong>{" "}
              Sistem pembuangan air yang kurang baik memperburuk situasi karena
              air tidak dapat mengalir dengan lancar
            </p>
            <p className="w-96 h-40 p-4 rounded-md shadow-xl text-lg font-medium text-white bg-slate-900 text-justify overflow-y-scroll custom-scrollbar">
              <strong className="text-orange-400">Perubahan Iklim:</strong> Pola
              curah hujan yang tidak terprediksi juga berkontribusi terhadap
              semakin seringnya banjir di daerah ini
            </p>
            <p className="w-96 h-40 p-4 rounded-md shadow-xl text-lg font-medium text-white bg-slate-900 text-justify overflow-y-scroll custom-scrollbar">
              <strong className="text-orange-400">Penggundulan Hutan:</strong>{" "}
              Adanya aktivitas penambangan di pegunungan sekitar Watusampu
              menyebabkan hilangnya vegetasi alami yang berperan penting dalam
              menyerap air hujan, sehingga air dengan cepat mengalir ke
              pemukiman warga dan meningkatkan risiko banjir serta longsor.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Penyebab;
