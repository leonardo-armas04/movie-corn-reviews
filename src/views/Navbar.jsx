function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/cine.png" alt="Cine"/>
                    <p>Movie corn</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Movies</a>
                        <a className="nav-link" href="#">Series</a>
                    </div>
                </div>
            </div>
        </nav>
        // <nav>
        //     <div className="container-fluid">
        //         <a href="/"><img src="/cine.png" alt="Cine"/>Movie Corn</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <a href="#">Movies</a>
        //             <a href="#">Series</a>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar