'use client'
import Link from "next/link";
import { useSelector } from "react-redux";

const Page = () => {
  const { nombre, ciudad, dni, correo } = useSelector((state) => state.valores);

  return (
    <div className="m-auto mt-8 text-center">
      <h1 className="mt-4">Leer:</h1>
      <br />

      <div>
        <h2 className="m-2">Listado</h2>
        <ul className="bg-gray-300 border-solid border-2 border-gray-500  m-auto text-center bg-cover w-1/2">
          <li className="bg-auto max">{ciudad}</li>
          <li className="bg-auto max">{nombre}</li>
          <li className="bg-auto max">{dni}</li>
          <li className="bg-auto max">{correo}</li>
        </ul>
      </div>
      <button className="mt-8 mx-4 inline-block text-center bg-gray-300 p-2 m-2 rounded-md hover:bg-red-400">
        <Link href={"/escribir"}>
          <span className="m-auto  text-center"> Link Escribir</span>
        </Link>
      </button>
    </div>
  );
};

export default Page;
