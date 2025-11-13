import Start from "./Start"
import Carousel from "./Carousel"
import Awa from "./Awa"

function Home() {
    return (
        <>
            <main>
                <Start></Start>
                <div id='carousel'>
                    <h4>Películas</h4>
                    <Carousel type="movies" />
                    <br />
                    <h4>Series</h4>
                    <Carousel type="series" />
                </div>
            </main>
            <Awa />
        </>
    )
}

export default Home