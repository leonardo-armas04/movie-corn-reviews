import movies from '../../data/movies.json'
import series from '../../data/series.json'

function Carousel(props) {
    let elements
    const {type} = props
    switch (type) {
        case "movies":
            elements = movies
            break;
        case "series":
            elements = series
            break;
        default:
            break;
    }
    return (
        <div id={`carousel-${type}`} className="carousel slide carousel-fade">
            <div className="carousel-inner">
                {
                    elements.map((element,index) => {
                        return (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} 
                                key={element.img}>
                                <img src={`/${type}/${element.img}-carousel.jpg`} className="d-block w-100" alt="..." />
                            </div>
                        )
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${type}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${type}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel