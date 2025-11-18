function Card(props) {
    const {type, name, year, img} = props
    return (
        <div className="card-item">
            <a href={`/${type}/${img}`}>
                <div className="card-img">
                    <img src={`/${type}/${img}.jpg`} alt="Movie" />
                </div>
                <h4>{name}</h4>
                <h6>{year}</h6>
            </a>
        </div>
    )
}

export default Card