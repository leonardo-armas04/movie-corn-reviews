import { useEffect, useState } from "react"
import ContentForm from "../components/ContentForm"
import Spinner from "../components/Spinner"
import Feedback from "../components/Feedback"

function Suggestions() {
    useEffect(() => {
        document.title = "Sugerencias"
    },[])
    
    let [userName, setUserName] = useState("")
    let [sending,setSending] = useState(false)
    let [showFeedback,setShowFeedback] = useState(false)
    
    const submitForm = (e) => {
        e.preventDefault()
        const formHTML = e.target
        setUserName(formHTML.userName.value)

        setSending(true)

        setTimeout(() => {
            setSending(false)
            setShowFeedback(true)
        },1400)

        // const formData = new FormData(formHTML) --> send this to backend
    }

    return (
        <main>
            {(!sending && !showFeedback) ? <ContentForm submitForm={submitForm}/> : null}
            {sending ? <Spinner /> : null}
            {showFeedback ? <Feedback name={userName}/> : null}
        </main>
    )
}

export default Suggestions