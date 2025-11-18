import { useParams } from "react-router-dom"
import moviesJSON from "../../data/movies.json"
import seriesJSON from "../../data/series.json"
import NotFound from "./NotFound"

function Review(props) {
    const {reviewName} = useParams()
    const {type} = props

    const movies = moviesJSON
    const series = seriesJSON

    let contentObject

    switch (type) {
        case "movies":
            contentObject = movies.filter(movie => movie.img === reviewName)[0]
            break;
        case "series":
            contentObject = series.filter(serie => serie.img === reviewName)[0]
            break
        default:
            break;
    }

    if (!contentObject) {
        return <NotFound/>
    }

    return (
        <main>
            <h3>
                Esta página corresponde a la película de
            </h3>
            <br />
            <h2>{contentObject.name}</h2>
        </main>
    )
}

export default Review