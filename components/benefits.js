import Image from "next/image";

import React from "react";
import Container from "./container";
import Link from "next/link";
import Benefit from "./benefit";


const Benefits = (props) => {
  const { data } = props;
  return (
    <>
      <Container className=" m-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""
            }`}>
          <div>
            <Image
              src={data.image}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""
            }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-inmodocs-blue lg:leading-tight lg:text-4xl dark:text-inmodocs-blue">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-inmodocs-blue lg:text-xl xl:text-xl dark:text-inmodocs-red">
                {data.desc}
              </p>
            </div>
            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>

          </div>
          <div className="w-full text-center lg:w-auto py-10">
            <Link
              href="/services"
              rel="noopener"
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-gray-100 bg-inmodocs-blue rounded-md p-5">
              Descubre más
            </Link>
          </div>
        </div>

      </Container>
    </>
  );
};



export default Benefits;
