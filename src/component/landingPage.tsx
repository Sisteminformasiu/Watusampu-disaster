import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <div
            style={{
              backgroundImage:
                "url(https://www.celebesta.com/wp-content/uploads/2024/06/IMG-20240630-WA0006.jpg)",
            }}
            className="w-[1000px] bg-black h-96  flex items-end p-12 rounded-md"
          >
            <div className="w-96 h-40 bg-white flex flex-col p-5 gap-y-2 rounded-sm">
              <p className="w-[70px] rounded-sm bg-slate-800 font-medium text-white text-center">
                Disaster
              </p>
              <h1 className="text-3xl font-bold text-start text-black">
                Bencana Banjir Watusampu 2024
              </h1>
              <p className="font-semibold text-sm text-start text-slate-600">
                Watusampu, Palu, Sulawesi Tengah
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-start text-black mb-2">
              Daerah Watusampu ?
            </h1>
            <div className="flex justify-between items-center">
              <p className="w-[450px] text-lg font-medium text-slate-700 text-justify">
                &ldquo; Watusampu merupakan salah satu kelurahan yang terletak
                di Kecamatan Palu Barat dan Ulujadi, Kota Palu, Sulawesi Tengah,
                Indonesia. Kelurahan ini menjadi wilayah terakhir dari Kota Palu
                sebelum memasuki Kabupaten Donggala.&ldquo;
                <br />
                <br />
                Di sekitarnya, terdapat tambang pasir, batuan, dan kerikil yang
                tersebar di kawasan pesisir Palu hingga Donggala. Aktivitas
                penambangan di wilayah ini berdampak pada lingkungan sekitar,
                termasuk pemukiman warga, dengan adanya debu tambang yang kerap
                terangkat ke udara. Situasi ini menimbulkan tantangan dalam
                menjaga kualitas udara dan kesehatan bagi masyarakat setempat.
              </p>
              <Image
                src="/aset/watusampu-map.png"
                alt=""
                width={500}
                height={200}
                className="h-[370px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
