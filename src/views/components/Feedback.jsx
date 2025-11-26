function Feedback(props) {
    const {name} = props
    return (
        <div className="feedback">
            <h2>Gracias por tus sugerencias <span>{name}</span></h2>
            <p>Estaremos trabajando para traer pronto el contenido que deseas 😃</p>
            <img src="/images/movie-2.jpg" alt="Movie 2" className="movie-img"/>
        </div>
    )
}

export default Feedback