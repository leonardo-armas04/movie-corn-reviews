import { useEffect } from "react"
import Card from "../components/Card"

function Movies() {
    useEffect(() => {
        document.title = "Películas"
    }, [])

    return (
        <main>
            <section>
                <h1>Películas</h1>
                <h5>
                    Descubre nuevo contenido interesante aquí 😃
                </h5>
                <br />
            </section>
            <section id="movie-cards">
                <Card></Card>
                <Card></Card>
            </section>

        </main>
    )
}

export default Movies