import { useEffect } from "react"

function NotFound() {
    useEffect(() => {
        document.title = "Error 404!"
    }, [])

    return (
        <>
            <main>
                <h1>Error 404! Not found</h1>
                <h3>Lo sentimos, no pudimos encontrar la página que buscas 🥶</h3>
                <h4>Regresa al <a href="/">inicio</a> para seguir descubriendo el contenido</h4>
                <br />
                <img src="/images/movie-1.jpg" alt="Movie 1" className="movie-img"/>
            </main>
        </>
    )
}

export default NotFound