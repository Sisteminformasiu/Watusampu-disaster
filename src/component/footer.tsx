// import Circlefooter from "../../../public/aset/circlefooter.svg";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { TbMapShare } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

function FooterSection() {
  return (
    <div className="bg-slate-900  text-white rounded-t-[48px]">
      <div className="w-full flex flex-col md:flex-row gap-x-20 text-white px-4 md:px-16 py-6">
        <div className="w-full md:w-[30%] mb-4 md:mb-0">
          <p className="font-semibold pb-3">Desa Watusampu</p>
          <p>Kecamatan Ulujadi, Kota Palu, Sulawesi Tengah</p>
        </div>
        <div className="w-full md:w-[45%] mb-4 md:mb-0">
          <p className="font-semibold pb-3">Tentang</p>
          <div className="flex gap-2 pb-1">
            <BsTelephone className="text-xl" />
            <p>+628134xxxxx</p>
          </div>
          <div className="flex gap-2 pb-1">
            <MdOutlineEmail className="text-xl" />
            <p>watusampu_06@gmail.com</p>
          </div>
          <div className="flex gap-2 pb-1">
            <TbMapShare className="text-xl" />
            <p>Jl. Malonda Kode Pos : 94229/Watusampu</p>
          </div>
        </div>
        <div className="w-full md:w-[45%] mb-4 md:mb-0">
          <p className="font-semibold pb-3">Kontributor</p>
          <Link href="/Kontributor" legacyBehavior>
            <a className="hover:text-blue-500 underline">Halaman Kontributor</a>
          </Link>
        </div>
        <div className="pt-4">
          {/* <Image src={Circlefooter} alt="Circle footer" /> */}
        </div>
      </div>
      <hr />
      <p className="flex justify-center p-5">Copyright ® 2024 Watusampu Team</p>
    </div>
  );
}

export { FooterSection };
