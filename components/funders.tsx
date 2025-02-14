import { BoxReveal } from "@/components/magicui/box-reveal";
import Image from "next/image";

export default function Funders() {
  return (
    <>
      <div className="items-center text-center justify-center">
        <div className="flex flex-col justify-center space-y-2 mb-5">
          <div className="lg:text-4xl flex justify-center text-2xl">
            <BoxReveal boxColor={"#empty"} duration={0.5}>
              <h1 className="font-bold">Sponsored by</h1>
            </BoxReveal>
          </div>
          <div className="flex text-center justify-center">
            <BoxReveal boxColor={"#empty"} duration={1}>
              <h1 className="text-gray-600 dark:text-gray-200  sm:text-lg text-md">
                Carrot comes to life and helps a lot of researchers across UK
                thanks to our brilliant funders.
              </h1>
            </BoxReveal>
          </div>
        </div>

        <div className="lg:flex lg:flex-row items-center lg:gap-5 mt-5 flex flex-col gap-2 lg:justify-between dark:bg-white rounded-xl p-5 mx-10">
          <div>
            {" "}
            <Image
              src="/logos/uon.png"
              alt="Logo UoN"
              height={400}
              width={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src="/logos/bc.png"
              alt="Logo CCN"
              height={500}
              width={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Image
              src="/logos/hdr.png"
              alt="Logo UKRI"
              height={400}
              width={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="lg:dark:bg-white"
            />
          </div>
          <div>
            <Image
              src="/logos/sde.jpeg"
              alt="Logo ALVE"
              height={300}
              width={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
