
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/20/solid'

import ImageServices from '@/public/img/Imagen-servicios.png'

import Container from "@/components/container"
import SectionTitle from "@/components/sectionTitle"
import CtaBanner from '@/components/ctaBanner'

const includedFeatures = [
    'Asesoramiento integral online',
    'Estudio de la documentación del inmueble',
    'Redacción y revisión de documento de reserva',
    'Preparación de escritura pública de compraventa',
]

// const stats = [
//     { name: 'Simple no-tricks pricing', value: '12' },
//     { name: 'Full-time colleagues', value: '300+' },
//     { name: 'Hours per week', value: '40' },
//     { name: 'Paid time off', value: 'Unlimited' },
// ]

// const links = [
//     { name: 'Conocenos', href: '#' },
//     { name: 'Internship program', href: '#' },
//     { name: 'Our values', href: '#' },
//     { name: 'Meet our leadership', href: '#' },
// ]

function ServicesPage() {
    return (
        <Container>
            <div className="pt-4">
                <div className="pt-20 px-10" >
                    <Example />
                </div>
                <div>
                    <div className="mx-auto max-w-2xl sm:text-center mt-20 mb-0">
                        <h2 className="text-3xl font-bold tracking-tight text-inmodocs-red sm:text-4xl">Nuestros Servicios</h2>
                        <p className="mt-6 text-lg leading-8 text-inmodocs-blue">
                            Encuentra el servicio que más se adapte a ti
                        </p>
                    </div>
                    <CardsServices />
                </div>

                <div>
                    <CtaBanner />
                </div>
            </div>

        </Container>
    )
}





function CardsServices() {
    return (

        <div className="bg-white pb-10 sm:pb-32 rounded-3xl grid  grid-cols-1 gap-x-8 gap-y-18 ">

            <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-md">
                <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-15 lg:mx-0 lg:flex lg:max-w-none ">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-inmodocs-red uppercase"> Contratos de Compraventa</h3>
                        <p className="mt-6 text-base leading-7 text-inmodocs-blue font-semibold">
                            Lleva el mejor Asesoramiento integral online para tus contratos de compraventa
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-inmodocs-red">Qué está incluido</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-inmodocs-blue sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-inmodocs-blue" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-inmodocs-red">Paga una vez y tenlo disponible 90 días</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-inmodocs-blue">$39</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EURO</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-inmodocs-blue px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-inmodocs-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Contacta con nosotros
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Facturas y recibos disponibles para facilitar el reembolso de la empresa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-md">
                <div className="mx-auto mt-10  max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-15 lg:mx-0 lg:flex lg:max-w-none ">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-inmodocs-blue">Paga una vez tu suscripción y tenlo disponible 30 días</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-inmodocs-red">$69</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EURO</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-inmodocs-red px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-inmodocs-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get access
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Facturas y recibos disponibles para facilitar el reembolso de la empresa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-inmodocs-blue uppercase">creación de contratos</h3>
                        <p className="mt-6 text-base leading-7 text-inmodocs-red font-semibold">
                            La suscripción que te da acceso a más de 100 contratos inmobiliarios para agilizar los procesos de compraventa y alquiler de inmuebles.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-inmodocs-blue">Qué está incluido</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-inmodocs-red sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-inmodocs-blue" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-md">
                <div className="mx-auto mt-10  max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-15  lg:mx-0 lg:flex lg:max-w-none ">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-inmodocs-blue"> Revisamos tus contratos de alquiler</h3>
                        <p className="mt-6 text-base leading-7 text-inmodocs-red">
                            ¿Tienes un contrato firmado o sin firmar?
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-inmodocs-red">Qué está incluido</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-inmodocs-blue sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-inmodocs-blue" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-inmodocs-red">Paga una vez y tenlo disponible 90 días</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-inmodocs-blue">$39</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EURO</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-inmodocs-blue px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-inmodocs-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get access
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Facturas y recibos disponibles para facilitar el reembolso de la empresa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


function Example() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Image className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center" src={ImageServices} alt="canovas" width={1200} height={479} />

            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#eb5e55] to-[#0a3854] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#eb5e55] to-[#0a3854] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto  lg:mx-0">
                    <SectionTitle
                        pretitle="SERVICIOS - INMODOCS"
                        title="Servicios que se ajustan a tu necesidad ">
                        Selecciona entre las
                        <span className="text-inmodocs-red"> Utilidades </span >que tenemos preparadas para
                        ofrecerte.
                    </SectionTitle>
                </div>

            </div>
        </div>
    )
}




export default ServicesPage
