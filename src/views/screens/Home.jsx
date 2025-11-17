import Start from "../components/Start"
import Carousel from "../components/Carousel"
import Awa from "../components/Awa"

function Home() {
    return (
        <>
            <main>
                <Start></Start>
                <section id='carousel'>
                    <h4>Películas</h4>
                    <Carousel type="movies" />
                    <br />
                    <h4>Series</h4>
                    <Carousel type="series" />
                </section>
            </main>
            <Awa />
        </>
    )
}

export default Home