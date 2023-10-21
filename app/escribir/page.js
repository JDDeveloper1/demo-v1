'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { guardarNombre } from '@/store/slice'


  function Page() {
    const [nuevoValor, setNuevoValor] = useState({
      nombre: '',
      ciudad: '',
      dni: '',
      correo: '',
    });
    const dispatch = useDispatch();

    const modificar = () => {
      dispatch(guardarNombre(nuevoValor));
    };

    return (
      <div className='m-auto mt-8 text-center'>
        <h1 className='mt-4'>Escribir</h1>

        <input
          className='bg-gray-300 border-solid border-2 border-gray-500 hover:border-dotted mt-4'
          type='text'
          placeholder='Tu nombre'
          value={nuevoValor.nombre}
          onChange={(e) =>
            setNuevoValor({ ...nuevoValor, nombre: e.target.value })
          }
        />
        <input
          className='bg-gray-300 border-solid border-2 border-gray-500 hover:border-dotted mt-4'
          type='text'
          placeholder='Tu ciudad'
          value={nuevoValor.ciudad}
          onChange={(e) =>
            setNuevoValor({ ...nuevoValor, ciudad: e.target.value })
          }
        />
        <input
          className='bg-gray-300 border-solid border-2 border-gray-500 hover:border-dotted mt-4'
          type='text'
          placeholder='Tu dni'
          value={nuevoValor.dni}
          onChange={(e) =>
            setNuevoValor({ ...nuevoValor, dni: e.target.value })
          }
        />
        <input
          className='bg-gray-300 border-solid border-2 border-gray-500 hover:border-dotted mt-4'
          type='text'
          placeholder='Escribe tu correo'
          value={nuevoValor.correo}
          onChange={(e) =>
            setNuevoValor({ ...nuevoValor, correo: e.target.value })
          }
        />
        <br />
        <button
          className='bg-gray-300 p-2 m-2 rounded-md hover:bg-red-400'
          onClick={modificar}
        >
          modificar valor
        </button>

        <button className='mt-8 mx-4 inline-block text-center bg-gray-300 p-2 m-2 rounded-md hover:bg-red-400'>
          <Link href={'/leer'}>
            <span className='m-auto  text-center'> Link leer</span>
          </Link>
        </button>
      </div>
    );
  }

  export default Page;

 