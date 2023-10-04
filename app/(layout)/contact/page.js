

import Image from 'next/image'

import mail from '@/public/img/mail.svg'
import phone from '@/public/img/phone.svg'
import lineRedContact from '@/public/img/lineRedContact.svg'
import imageContact from '@/public/img/imageContact.svg'
import imageFile from '@/public/img/imageFile.svg'
import styles from './page.module.css'

import Container from "@/components/container"
import SectionTitle from "@/components/sectionTitle"

function ContactPage() {
    return (
        <Container>
            <div className="pt-4">
                <SectionTitle
                    pretitle="Contacto - INMODOCS"
                    title="¿Necesitas ayuda?">
                    Contacta con nosotros de manera
                    <span className="text-inmodocs-red"> directa  </span > vía email.
                </SectionTitle>
            </div>

            <div>
                <div className={styles.section}>
                    <div className={styles.initial_message}>
                        <h1 className={styles.title}>Contáctanos_</h1>
                        <p>Si quieres información sobre el servicio de compraventa, adjúntanos la nota simple del inmueble y escríbenos tu petición a continuación</p>
                    </div>
                    <div className={styles.info_contact}>
                        <div className={styles.info}>
                            <Image src={mail} alt="mail" width={36} height={36} priority />
                            <p>info@inmodocs.com</p>
                        </div>
                        <div className={styles.icon}>
                            <Image src={lineRedContact} alt="lineRedContact" width={36} height={36} priority />
                        </div>
                        <div className={styles.info}>
                            <Image src={phone} alt="phone" width={36} height={36} priority />
                            <p>663 289 905</p>
                        </div>

                    </div>
                </div>
                <section className={styles.section_form}>


                    <div className={styles.info_contact}>
                        <form className={styles.review_checkout}>
                            <SectionTitle className="pt-0 mt-0" title="Formulario"></SectionTitle>
                            <div className={styles.form_wrap}>

                                <div className={styles.wrap_input}>
                                    <label htmlFor='name'>Nombre</label>
                                    <input type='text' id='name' name='name' placeholder='' />
                                </div>

                                <div className={styles.wrap_input}>
                                    <label htmlFor='email'>Email</label>
                                    <input type='text' id='email' name='email' placeholder='' />
                                </div>

                                <div className={styles.wrap_input}>
                                    <label htmlFor='name'>Telefóno</label>
                                    <input type='text' id='telefono' name='telefono' placeholder='' />
                                </div>

                                <div className={styles.wrap_input}>
                                    <label htmlFor='name'>CP</label>
                                    <input type='text' id='cp' name='cp' placeholder='' required />
                                </div>
                                <div className={styles.text_file}>

                                    <div className={styles.wrap_input_text_area}>
                                        <p> <label htmlFor='textarea'>Comentarios</label> </p>
                                        <textarea type='textarea' id='textarea' name='textarea' cols={40} rows={10} placeholder='' />
                                    </div>
                                </div>

                                <div className={styles["wrap-upload"]}>
                                    <label className='my-10' htmlFor='file'>Adjuntar archivos</label>

                                    <Image className='my-5' h src={imageFile} alt="imageFile" width={36} height={36} priority />
                                    <input className='my-5' h type='file' id='name' name='name' placeholder='' />

                                </div>
                            </div>
                            <div className={styles.container_button}>
                                <button className={styles.button}>Enviar</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.info_contact_image}>
                        <Image src={imageContact} alt="imageContact" width={561} height={444.4} priority />
                    </div>
                </section>
            </div>

        </Container>
    )

}

export default ContactPage
