function ContentForm(props) {
    const {submitForm} = props
    return (
        <>
            <section id="suggestionsForm">
                <h1>Ayúdanos a seguir creciendo</h1>
                <h5>Aquí puedes compartir aquellas películas o series que te gustaría ver</h5>

                <form action="/sugerencias" onSubmit={submitForm}>
                    <label htmlFor="userName">Nombre</label>
                    <input type="text" id="userName" name="userName" maxLength={45} />
                    <br />

                    <label htmlFor="">Correo electrónico</label>
                    <input type="email" id="userEmail" name="userEmail" maxLength={45} />
                    <br />

                    <label htmlFor="contentType">Tipo de contenido</label>
                    <select id="contentType" name="contentType">
                        <option value="movies">Película</option>
                        <option value="series">Serie</option>
                    </select>
                    <br />

                    <label htmlFor="contentName">Título que te gustaría ver</label>
                    <input type="text" id="contentName" name="contentName" maxLength={255} />
                    <br />
                    <button>Enviar</button>
                </form>
            </section>
        </>
    )
}

export default ContentForm