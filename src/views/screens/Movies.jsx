import { useEffect } from "react"
import Card from "../components/Card"
import moviesJSON from "../../data/movies.json"

function Movies() {
    useEffect(() => {
        document.title = "Películas"
    }, [])

    const movies = moviesJSON
    
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
                {
                    movies.map((movie) => {
                        return <Card type="movies"
                            key={movie._id}
                            name={movie.name}
                            year={movie.year}
                            img={movie.img}/>
                    })
                }
            </section>
        </main>
    )
}

export default Movies