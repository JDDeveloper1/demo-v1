import Image from "next/image";
import Container from "./container";
import BannerHero from "../public/img/imageHome.svg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <span className="max-w-xl mb-5 text-inmodocs-red"> + de 30 años de experiencia nos avalan </span>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-inmodocs-blue">
              Crea y personaliza contratos inmobiliarios profesionales
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-500">
              Contratos inmobiliarios constantemente actualizados y adaptados a la normativa de todas las comunidades autónomas
              <br />
              Inmodocs
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/documents"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-inmodocs-red rounded-md ">
                Ver contratos
              </a>
              <a
                href="/services"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <span> Aprende más</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={BannerHero}
              width={616}
              height={617}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
}


export default Hero;