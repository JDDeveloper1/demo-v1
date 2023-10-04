import Container from "@/components/container"
import SectionTitle from "@/components/sectionTitle"

function DocumentsPage() {
    return (
        <Container>
            <div className="pt-4">
                <SectionTitle
                    pretitle="Contratos - INMODOCS"
                    title="Facilitador de contratos">
                    Selecciona y Descarga tu <span className="text-inmodocs-red"> contrato</span >
                </SectionTitle>
            </div>
        </Container>
    )
}

export default DocumentsPage
