import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

import postOneImg from "@/public/img/imgBlog/compraventa.png";
import postTwoImg from "@/public/img/imgBlog/alquilerAgosto.png";
import postThreeImg from "@/public/img/imgBlog/proteccionCompraventa.png";
import postFourImg from "@/public/img/imgBlog/aspectosClaves.png";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 lg:col-1">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <ImagePost className="scale-75 translate-x-4 skew-y-3 md:transform-none" imagePost={postOneImg} />
            <h1 className="text-2xl text-inmodocs-red ">Compraventa de vivienda de segunda mano Agosto - Julio 2023</h1>
            <p className="text-2lg leading-normal ">
              A menudo, nuestros  <Mark>clientes</Mark> nos consultan sobre los riesgos que asumen al comprar una determinada vivienda de segunda mano.
              Antes de firmar el contrato de arras, les recomendamos solicitar la siguiente documentación a la parte vendedora o a la agencia inmobiliaria:
              1. Cédula de habitabilidad La cédula de habitabilidad es un documento que emite la […].
            </p>
            <Avatar
              image={userOneImg}
              name="Sarah Ramirez"
              title="Abogada de Inmodocs"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <ImagePost className="scale-75 translate-x-4 skew-y-3 md:transform-none " imagePost={postTwoImg} />
            <h1 className="text-2xl text-inmodocs-red py-5">Alquiler de temporada vs. alquiler de vivienda Ago  2023 </h1>
            <p className="text-2lg leading-normal pt-2 ">
              La Ley de <Mark>Arrendamientos</Mark> Urbanos distingue entre arrendamientos de vivienda y arrendamientos para uso distinto del de vivienda.
              Alquiler de vivienda de temporada El arrendamiento de vivienda de temporada está calificado como de uso distinto del de vivienda en el art.
              3.2: “En especial, tendrán esta consideración los arrendamientos de fincas urbanas celebrados por temporada, […].
            </p>

            <Avatar
              image={userTwoImg}
              name="Luis M. Zanabria "
              title="Abogado de Inmodocs"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <ImagePost className="scale-75 translate-x-4 skew-y-3 md:transform-none " imagePost={postThreeImg} />
            <h1 className="text-2xl text-inmodocs-red py-5">Compraventa de vivienda de protección oficial Jul 2023</h1>
            <p className="text-2lg leading-normal pt-2 ">
              Las < Mark>viviendas</Mark> de protección oficial tienen unas características determinadas, por lo que, en el momento de transmitirlas, pueden tener unas limitaciones de precio o bien estar sometidas a la autorización de la Administración competente.
              Dependiendo del año en que fueron construidas, las viviendas de protección oficial están sometidas a una legislación u otra, lo que […]
            </p>

            <Avatar
              image={userThreeImg}
              name="Manuel Helguera"
              title="Abogado de Inmodocs"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-8 rounded-2xl py-8 dark:bg-trueGray-800">
            <ImagePost className="scale-75 translate-x-4 skew-y-3 md:transform-none " imagePost={postFourImg} />
            <h1 className="text-2xl text-inmodocs-red">Nueva Ley de Vivienda 2023  Jun - Jul 2023 </h1>
            <p className="text-2lg leading-normal pt-2 ">
              <Mark>La Ley 12/2023,</Mark> de 24 de mayo, por el derecho a la vivienda, tiene como principal objetivo aportar soluciones al desajuste entre la oferta y demanda del mercado del alquiler,
              y con ello aporta 6 grandes cambios que repasaremos a continuación y sus afectaciones a los contratos en vigor y los de nueva creación: 1. […].
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Ramirez"
              title="Abogada de Inmodocs"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="500"
          height="400"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function ImagePost(props) {
  return (
    <div>
      <Image
        src={props.imagePost}
        width="100%"
        height="100%"
        alt="Image Post"
        placeholder="blur"
      />
    </div>
  )
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-inmodocs-red bg-indigo-100 rounded-md ring-inmodocs-red ring-1 dark:ring-inmodocs-red dark:bg-inmodocs-red dark:text-inmodocs-blue">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;