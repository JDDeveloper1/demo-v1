

import Link from 'next/link';
import Image from 'next/image';



import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Blog from "../components/blogHome";
import Cta from "../components/cta";
// import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Trusted from "../components/Trusted";
import DigitalCards from "../components/DigitalCards";
import Hero from '@/components/hero';




function PageHome() {
  return (
    <div>
      <div className="pt-20">
        <Hero />
      </div>


      <div className="pt-20">
        <SectionTitle
          pretitle="Inmodocs "
          title=" Generando confianza en nuestros clientes ">
          más de
          <span className="text-inmodocs-red"> 1000 </span >clientes ya confian en nosotros
          al rededor del mundo
        </SectionTitle>
        <Trusted />
      </div>

      <div className="pt-20">
        <Cta />
      </div>

      <div className="pt-20">
        <SectionTitle
          pretitle="Nuestros Servicios -Inmodocs "
          title="Descubre los servicios que tenemos diseñados para ti">
          <p className='text-inmodocs-red'>
            Selecciona entre los servicios que te preparamos,
            creados para que se adapte a tus necesidades y las de tu empresa
          </p>

        </SectionTitle>

        <Benefits className="mt-0" data={benefitOne} />
      </div>


      {/* 
        <SectionTitle
          pretitle="slider info"
        >Accece a nuestra exclusiva area de clientes</SectionTitle>
        <TrendingSlider /> */}

      <div className="pt-20">
        <SectionTitle className="m-15"
          pretitle="Inmodocs"
          title="¿Por qué necesitas inmodocs?">
        </SectionTitle>

        <DigitalCards />
      </div>


      <div className="pt-20">
        <SectionTitle className="m-15"
          pretitle="Mira este video - Inmodocs"
          title="¿Requieres documentos legales para tu empresa inmobiliaria?">
          En Inmodocs te brindamos cualquiera que necesites. Ofrecemos la realización y gestión de textos legales en este rubro que van
          desde los contratos de compraventa, alquiler, construcción, reclamaciones y más. No dudes en contactarnos.
        </SectionTitle>

        <Video />
      </div>

      <div className="py-20">
        <SectionTitle className="m-10"
          pretitle="Blog Inmodocs"
          title=" Accede a nuestro Blog">
          Aqui encontraras todas nuestras publicaciones y actulizaciones de la comunidad
        </SectionTitle>
        <Link href={"/blog"}>
          <Blog />
        </Link>
        <div className="flex-shrink-0 w-full text-center pt-10 lg:w-auto">
          <a
            href="/blog"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-inmodocs-blue bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Descubre más
          </a>
        </div>
      </div>

      {/* <PopupWidget /> */}

    </div>
  )
}

export default PageHome
