import { useEffect } from "react"

function Movies() {
    useEffect(() => {
        document.title = "Películas"
    },[])

    return (
        <main>
            <h1>Aquí va la sección de películas</h1>
        </main>
    )
}

export default Movies