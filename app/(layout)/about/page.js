
import Image from 'next/image'

import ImageBlog from '@/public/img/imageBannerAbout.png'
import styles from './page.module.css'

import BlockPartners from '@/components/BlockPartners.js'
import Container from "@/components/container"
import SectionTitle from "@/components/sectionTitle"


function AboutPage() {
    return (
        <Container>
            <div className="pt-4">
                <SectionTitle
                    pretitle="Somos Inmodocs"
                    title=" Conóce nuestra empresa">
                    Nuestro
                    <span className="text-inmodocs-red"> objetivo </span >es facilitar el acceso a
                    contratos profesionales en el sector inmobiliario
                    al rededor del mundo
                </SectionTitle>
            </div>

            <div>
                <section className='mb-5 px-5 text-center'   >

                    <div>

                        <Example />
                    </div>


                    <div className={styles.text}>
                        <h2 className='mb-5 px-5'></h2>

                        <h3 className='mb-5 px-5'><strong>Te ayudamos a crear tus contratos de alquiler y compraventa de inmuebles de forma rápida y fácil.</strong></h3>

                        <ul className={styles.ul}>
                            <li className={styles.li}>Conoce los contratos que necesitas para alquilar o vender tu inmueble.</li>
                            <li className={styles.li}>Descarga los contratos que necesites.</li>
                            <li className={styles.li}>Completa los datos del contrato.</li>
                            <li className={styles.li}>Descarga el contrato en PDF.</li>
                        </ul>
                        <p className={styles.p}>Somos Inmodocs, la primera legaltech especializada en Derecho Inmobiliario. Conocemos la necesidad que tienen los agentes del sector inmobiliario de profesionalizar y dar validez legal a su negocio.  Por ello, hemos decidido crear este espacio en donde cualquier particular o empresa puede acceder a contratos inmobiliarios profesionales para establecer los términos y condiciones de una venta, alquiler o cualquier otro tipo de transacción inmobiliaria, todo ello al alcance de un solo clic.</p>
                        <p className={styles.p}>En Inmodocs no sólo encontrarás contratos inmobiliarios redactados por abogados expertos en la materia, sino que también nuestros letrados están a tu disposición para revisar tus documentos y prevenir irregularidades del contrato que puedan perjudicarte.</p>
                        <p className={styles.p}>Sabemos lo valioso e importante que es tu tiempo. Por este motivo, hemos creado un sistema para agilizar la creación y gestión de contratos inmobiliarios. Sin largas esperas y sin tener que moverte de casa.</p>
                        <p className={styles.p}>De esta forma, si eres agente inmobiliario, podrás enfocarte en la captación tanto de clientes como de propiedades y en el cierre de cada negocio. Por otro lado, si eres un particular, ahorrarás tiempo y dinero.</p>
                    </div>
                </section>
                <section className='mb-5 px-5' >
                    <div className={styles.info_section}>
                        <div>
                            <h2 className={styles.info_section_h2}>¿Qué es una ‘Legaltech’?</h2>
                        </div>
                        <div className='mb-5 px-5 leading-5'>
                            <p className={styles.p_info_section}>El lenguaje evoluciona tan rápido como lo hace la sociedad. Es por eso que, a medida que emerge una nueva realidad,
                                objeto o fenómeno, necesitamos palabras que puedan definirlos correctamente.</p>
                            <p className={styles.p_info_section}>La industria del derecho no se aleja de esta tendencia, ya que, cada día, una de las profesiones más antiguas del mundo experimenta cambios y
                                se adapta más al mundo tecnológico.</p>
                            <p className={styles.p_info_section}>La tecnología legal o también llamada legaltech se refiere al uso de tecnologías con la finalidad de hacer que los servicios legales sean más ágiles, eficaces y asequibles para los clientes y los abogados.</p>
                            <p className={styles.p_info_section}>Inmodocs es la primera legaltech especializada en derecho inmobiliario en España, que busca automatizar y digitalizar los complicados procesos de creación de documentos legales inmobiliarios.</p>
                        </div>
                    </div>


                </section>
                <section className='mb-5 px-5 leading-5'  >
                    <div className={styles.text}>
                        <h3 className='mt-10 mb-5 px-5 leading-5'>
                            <strong>
                                ¿Por qué Inmodocs apuesta por la digitalización del derecho inmobiliario?
                            </strong>
                        </h3>
                        <div>

                        </div>
                        <p className={styles.p}>El panorama legal siempre se ha visto afectado por la inmensa burocracia. Para un procedimiento sencillo como lo es un contrato es necesario acudir a un abogado especializado en el sector.
                            El mundo cada día se ha vuelto más tecnológico y es por eso que la industria del derecho tiene que adaptarse a esos cambios.</p>
                        <p className={styles.p}>En Inmodocs entendemos la necesidad de los usuarios modernos de realizar los procesos de forma inmediata y sin mayores complicaciones.
                            Esa es la razón principal que nos motiva a democratizar y digitalizar el acceso a contratos inmobiliarios para que cualquier persona pueda obtener uno siempre que lo requiera desde la comodidad de su casa.</p>
                        <h3 className='mb-5 px-5 leading-5' ><strong>¿Quiénes están detrás de Inmodocs?</strong></h3>
                        <p className={styles.p}>Si buscas la mejor calidad posible en el ámbito de la documentación legal inmobiliaria, nosotros te garantizamos excelentes resultados de la mano de una firma jurídica certificada.</p>
                        <p className={styles.p}>Nuestros contratos han sido redactados por abogados de Cánovas Estudio Legal, una firma con más de 30 años de experiencia en Derecho Inmobiliario, para garantizar la validez de tus documentos.</p>
                        <p className={styles.p}>Cánovas Estudio Legal cuenta con una selección de abogados que poseen una amplia experiencia en la realización de todo tipo de contratos inmobiliarios, destacando los siguientes:</p>
                        <ul className={styles.ul}>
                            <li className={styles.li}>Contratos de compraventa de inmuebles</li>
                            <li className={styles.li}>Contratos de arrendamientos</li>
                            <li className={styles.li}>Contratos de permutas</li>
                            <li className={styles.li}>Contratos de multipropiedad</li>
                            <li className={styles.li}>Contratos de promociones inmobiliarias</li>
                        </ul>
                        <p className={styles.p}>Junto a esta firma de abogados con sede en Barcelona, nuestra meta es facilitar a las personas el acceso a profesionales de confianza que realicen este tipo de procedimientos.
                            Tenemos en cuenta la necesidad de la inmediatez en un mundo digital, así como también en un mercado tan competitivo como lo es el inmobiliario.</p>
                        <h3><strong>¿Requieres documentos legales para tu empresa inmobiliaria?</strong></h3>
                        <p className={styles.p}>En <strong>Inmodocs</strong> te brindamos cualquiera que necesites. Ofrecemos la realización y gestión de textos legales en este rubro que van desde los contratos de
                            compraventa, alquiler, construcción, reclamaciones y más.
                            No dudes en contactarnos.</p>
                    </div>
                </section>
                <section>
                    <div className={styles.block_partners}>
                        <BlockPartners />
                    </div>
                </section>
            </div>
        </Container>
    )
}

function Example() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Image className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center" src={ImageBlog} alt="canovas" width={1200} height={479} />

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
                    <h2 className="text-4xl text-center font-bold tracking-tight text-inmodocs-red sm:text-6xl">Conócenos</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-100 font-semibold">
                        Nuestro objetivo es facilitar el acceso a contratos profesionales en el sector inmobiliario.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutPage
