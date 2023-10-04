import Image from "next/image";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userThreeImg from "../public/img/user3.jpg";

import postOneImg from "@/public/img/imgBlog/compraventa.png";
import postTwoImg from "@/public/img/imgBlog/alquilerAgosto.png";


const posts = [
    {
        id: 1,
        title: 'Compraventa de vivienda de segunda mano',
        href: '#',
        description:
            'A menudo, nuestros clientes nos consultan sobre los riesgos que asumen al comprar una determinada vivienda de segunda mano. Antes de firmar el contrato de arras, les recomendamos solicitar la siguiente documentación a la parte vendedora o a la agencia inmobiliaria',
        date: 'Ago 17, 2023',
        datetime: '2023-08-17',
        category: { title: 'Alquiler', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Abogado / Inmodocs',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Alquiler de temporada vs. alquiler de vivienda',
        href: '#',
        description:
            'La Ley de Arrendamientos Urbanos distingue entre arrendamientos de vivienda y arrendamientos para uso distinto del de vivienda.',
        date: 'jul 16, 2023',
        datetime: '2023-07-16',
        category: { title: 'Contratos', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Nueva Ley de Vivienda 2023',
        href: '#',
        description:
            'La Ley 12/2023, de 24 de mayo, por el derecho a la vivienda, tiene como principal objetivo aportar soluciones al desajuste entre la oferta y demanda del mercado del alquiler, y con ello aporta 6 grandes cambios que repasaremos a continuación y sus afectaciones a los contratos en vigor y los de nueva creación',
        date: 'Sep 16, 2023',
        datetime: '2023-09-16',
        category: { title: 'CompraVenta', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function Example() {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-inmodocs-red hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-inmodocs-blue group-hover:text-inmodocs-red">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-inmodocs-blue">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-inmodocs-blue">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
