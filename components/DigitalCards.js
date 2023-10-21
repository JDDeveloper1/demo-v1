import {
    DocumentTextIcon,
    HomeModernIcon,
    CursorArrowRaysIcon,


} from "@heroicons/react/24/solid";

function DigitalCards() {
    const data = [
        {
            title: "Acceso a contratos profesionales",
            description:
                "+100 documentos y contratos inmobiliarios a tu alcance, redactados por abogados de Cánovas Estudio Legal, con +30 años de experiencia",
            icon: <DocumentTextIcon className="w-6 h-6" />,
        },
        {
            title: "Solución legal para tu negocio",
            description:
                "Inmodocs Pro es nuestra solución para profesionales del sector inmobiliario que desean agilizar el proceso de redacción de contrato",
            icon: <HomeModernIcon className="w-6 h-6" />,
        },
        {
            title: "Revision de Contratos",
            description:
                "Envíanos tu contrato para revisar para obtener información clave, anticipar problemas futuros y ahorrar tiempo y dinero",
            icon: <CursorArrowRaysIcon className="w-6 h-6" />,
        },

    ];

    return (
        <>
            <div className="py-5 bg-white dark:bg-gray-900">
                <div
                    className="container max-w-screen-xl px-4 mx-auto my-10"
                    id="features">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((item, index) => (
                            <div className="my-5 grid__item lg:m-5" key={index}>
                                <div className="flex items-center justify-center text-orange-600 bg-indigo-100 rounded-full w-14 h-14 dark:bg-indigo-900 dark:text-indigo-300">
                                    {item.icon}
                                </div>
                                <h3 className="pt-2 my-4 text-xl font-medium text-black dark:text-white text-opacity-90">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-400 text-opacity-70">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DigitalCards








