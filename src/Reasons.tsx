import "./Reason.scss"

type ReasonProps = {
    imgsrc: string
    title: string
    body: string
}

const Reason = ({imgsrc, title, body}: ReasonProps) => {
    return (
        <>
            <article className="d-flex flex-wrap">
                <img src={imgsrc}/>
                <header className="col-md">
                    <h1>{title}</h1>
                    <p>{body}</p>
                </header>
            </article>
        </>
    )
}

export { Reason }