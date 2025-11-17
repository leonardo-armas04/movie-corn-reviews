import { useEffect } from "react"

function Series() {
    useEffect(() => {
        document.title = "Series"
    },[])
    
    return (
        <main>
            <h1>Esta es la sección de series</h1>
        </main>
    )
}

export default Series