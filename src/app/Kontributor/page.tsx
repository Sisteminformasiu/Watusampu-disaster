import Image from "next/image";
import Link from "next/link";
import kontributorData from "./_db/kontributorData";

function Page() {
  return (
    <div className="pt-32 mx-12 flex flex-col items-center justify-center pb-14 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center font-bold text-[40px] text-black">
        Kontributor
      </h1>
      <div className="pt-10 flex justify-center">
        <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 rounded-lg">
          {kontributorData.map((kontributor) => (
            <div
              key={kontributor.id}
              className="mb-6 rounded-2xl border shadow"
            >
              <div className="relative w-full h-0 pb-[100%]">
                <Image
                  alt={kontributor.name}
                  src={kontributor.image}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-4">
                <h5 className="mb-2 text-xl font-bold text-[#32343A]">
                  {kontributor.name}
                </h5>
                <p className="mb-3 font-normal">{kontributor.nim}</p>
                <p className="mb-3 font-normal text-[#71747B] flex gap-x-2 items-center">
                  <Image
                    alt="instagram"
                    src="/aset/instagram.png"
                    width={30}
                    height={30}
                  />
                  {kontributor.instagram}
                </p>
                <p className="mb-3 font-normal text-[#71747B] flex gap-x-2 items-center">
                  <Image
                    alt="linkedin"
                    src="/aset/linkedin.png"
                    width={30}
                    height={30}
                  />
                  {kontributor.linkedin ? (
                    <Link href={kontributor.linkedin} passHref legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {kontributor.username_linkedin}
                      </a>
                    </Link>
                  ) : (
                    "No LinkedIn"
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
