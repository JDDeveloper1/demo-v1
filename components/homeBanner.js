import Image from "next/image";
import Link from "next/link";


export default function BannerHome() {
  return (
    <div className="relative isolate overflow-hidden shadow-2xl bg-gray-100 py-24 sm:py-32 rounded-xl">
      
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0a3854] to-[#3DA2DB] opacity-70"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0a3854] to-[#3DA2DB] opacity-70"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center  ">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
              <div className="flex flex-col  md:items-start items-center justify-between space-y-3 px-8">
                <h1 className="text-7xl md:text-7xl uppercase text-inmodocs-light-blue mr-32">
             
                 Investment <span className="text-5xl text-inmodocs-blue">Inmodocs </span>
                </h1>
                <p className="text-lg pt-8 uppercase md:text-3xl text-gray-500">
                  Invest safely
                </p>
                <Link href={"/"} className="text-base rounded-md bg-inmodocs-light-blue p-4 text-gray-800 focus:bg-slate-300 focus:p-4  focus:text-inmodocs-blue hover:text-inmodocs-light-blue hover:bg-inmodocs-blue  ">more information</Link>
              </div>
              <div class="flex space-x-2 md:space-x-6 md:m-4">
                <div class="md:w-20 w-10 h-60 md:h-96 overflow-hidden rounded-xl">
                  <Image 
                    src="/otherbanner100x400.jpeg"
                    height={400}
                    width={100}
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div class="md:w-60 w-28 h-60 md:h-96 overflow-hidden rounded-xl">
                  <Image
                    src="/banner200x400.jpeg"
                    height={400}
                    width={200}
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div className="md:w-28 w-16 h-60 md:h-96 overflow-hidden rounded-xl">
                  <Image
                    src="/other2banner100x400.jpeg"
                    height={400}
                    width={100}
                    className="h-full w-full"
                    alt=""
                  />
                </div>
                <div className="md:w-20 w-10 h-60 md:h-96 overflow-hidden rounded-xl">
                  <Image
                    src="/banner100x400.jpeg"
                    height={400}
                    width={100}
                    className="h-full w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
