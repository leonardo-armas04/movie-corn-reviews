import { useParams } from "react-router-dom"
import moviesJSON from "../../data/movies.json"
import seriesJSON from "../../data/series.json"
import NotFound from "./NotFound"
import { useEffect } from "react"

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

    let {name, description} = contentObject
    description = description.split("\n")

    useEffect(() => {
        document.title = name
    },[])

    return (
        <main>
            <h1>{contentObject.name}</h1>
            <div className="review-img-mobile">
                <img src={`/${type}/${contentObject.img}-carousel.jpg`} alt="Movie" />
            </div>
            <section className="review-img-txt">
                <img src={`/${type}/${contentObject.img}.jpg`} alt="" />
                <div className="paragraphs">
                    {
                        description.map(((paragraph,index) => {
                            return <p key={index}>{paragraph}</p>
                        }))
                    }
                </div>
            </section>
        </main>
    )
}

export default Review