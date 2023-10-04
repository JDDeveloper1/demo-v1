import Container from "@/components/container"
import SectionTitle from "@/components/sectionTitle"
import Testimonials from "@/components/blog"
import CtaRed from "@/components/ctaRed"


function BlogPage() {
    return (
        <Container>
            <div className="pt-4">
                <SectionTitle
                    pretitle="Blog - INMODOCS"
                    title="El blog de Inmodocs">
                    Encuentra aquí todas nuestras
                    <span className="text-inmodocs-red"> publicaciones y actulizaciones</span > de las últimas noticias.
                </SectionTitle>
            </div>

            <div className="pt-10">
                <Testimonials />
            </div>
            <div>
                <CtaRed className="bg-inmodocs-red" />
            </div>
        </Container>


    )
}

export default BlogPage
