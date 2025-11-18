import { useEffect } from "react"
import Card from "../components/Card"
import seriesJSON from "../../data/series.json"

function Series() {
    useEffect(() => {
        document.title = "Series"
    },[])
    
    const series = seriesJSON

    return (
        <main>
            <section>
                <h1>Series</h1>
                <h5>
                    Encuentra tus series favoritas en esta sección 😃
                </h5>
                <br />
            </section>
            <section id="serie-cards">
                {
                    series.map((serie) => {
                        return <Card type="series"
                            key={serie._id}
                            name={serie.name}
                            year={serie.year}
                            img={serie.img}/>
                    })
                }
            </section>
        </main>
    )
}

export default Series