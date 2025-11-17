function Footer() {
    return (
        <footer>
            <div id="footer-content">
                <div id="social">
                    <h5>Síguenos en</h5>
                    <div id="icons">
                        <a href="https://www.instagram.com" target="_blank">
                            <img src="/images/instagram_pixel.png" alt="Instagram pixel icon" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="/images/facebook_pixel.png" alt="Facebook pixel icon" />
                        </a>
                    </div>
                </div>
                <div id="links">
                    <a href="#">Sugerencias de contenido</a>
                    <a href="#">Sobre nosotros</a>
                    <a href="/movies">Películas</a>
                    <a href="/series">Series</a>
                </div>
            </div>
            <p>© All rights reserved</p>
        </footer>
    )
}

export default Footer