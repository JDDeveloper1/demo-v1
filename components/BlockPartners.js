
import Link from 'next/link'
import Image from 'next/image'

import styles from './blockPartners.module.css'
import Canovas from '@/public/img/canovas.svg'
import Vector from '@/public/img/vector.svg'
import InmoDocs from '@/public/img/inmoDocs.svg'





function BlockPartners() {
    return (
        <>
            <div className={styles.objetive}>
                <h2>¿Por qué confiar en nosotros?</h2>
            </div>
            <div className={styles.block_partners}>

                <Link href="/" >
                    <div className={styles.img_wrap}>
                        <Image src={Canovas} alt="Canovas" width={300} height={125} priority />

                    </div>
                    <p>
                        Los contratos de Inmodocs han sido redactados por los abogados expertos en Derecho Inmobiliario de Cánovas Estudio Legal, quienes cuentan con + 30 años de experiencia en el sector.
                    </p>
                </Link>
                <div className={styles.icon}>
                    <Image src={Vector} alt="Vector" width={36} height={36} priority />
                </div>

                <Link href="/">
                    <div className={styles.img_wrap}>
                        <Image src={InmoDocs} alt="inmodocs" width={300} height={125} priority />
                    </div>
                    <p>
                        Nuestro distintivo de calidad garantiza que todos nuestros documentos son conformes y están actualizados con la normativa aplicable en cada comunidad autónoma.
                    </p>
                </Link>
            </div>

        </>

    )
}
export default BlockPartners