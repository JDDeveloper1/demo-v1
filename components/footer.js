import Link from "next/link";
import React from "react";
import Container from "./container";
import Image from "next/image";

export default function Footer() {
  const navigation = [
    "Documentos",
    "Servicios",
    "conocenos",
    "Contacto",
    "FAQ",
    "Blog",
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative mt-7">
      <Container className="bg-orange-700 ">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 pt-10 mx-auto mt-3 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-gray-100 dark:text-gray-100">
                <span>Demo Inmodocs</span>
                <span> <small>By</small> JDDeveloper1</span>
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-100 dark:text-gray-400">
              Landing page Demo   <small> By JDDeveloper1 </small>
            </div>
            <Image
              src="/img/logo.png"
              alt="N"
              width="120"
              height="120"
              className="m-2 rounded-xl"
            />
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-100 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-100 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="my-10 text-sm text-center text-gray-100 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by
          <a
            href="https://github.com/JDDeveloper1"
            target="_blank"
            rel="noopener">
            JDDeveloper1
          </a>
        </div>
      </Container>
      {/* Do not remove this */}

    </div>
  );
}






