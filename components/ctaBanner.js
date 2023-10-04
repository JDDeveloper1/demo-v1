export default function CtaBanner() {
    return (

        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-inmodocs-red px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-24 lg:pt-0">
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#0a3854-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stopColor="#0a3854" />
                            <stop offset={1} stopColor="#0a3854" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-inmodocs-blue sm:text-4xl">
                        Crea y personaliza contratos tus
                        inmobiliarios profesionales.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-100">
                        Actualizados y adaptados a la normativa de todas las comunidades autónomas
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">

                        <a href="/documents" className="text-sm font-semibold leading-6 text-inmodocs-blue">
                            Aprende más <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div className="relative mr-10   h-80 lg:mt-2">
                    <img
                        className="absolute mt-20  max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        src="https://inmodocs.com/wp-content/themes/inmodocs/markup/dist/img/search-block-img.png"
                        alt="App screenshot"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </div>

    )
}