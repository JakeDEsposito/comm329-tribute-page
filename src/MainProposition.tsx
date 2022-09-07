import "./MainProposition.scss"

type MainPropositionProps = {
    title: string
    body: string
}

export const MainProposition = ({title, body}: MainPropositionProps) => {
    return (
        <>
            <header className="position-relative text-center">
                <img src="https://picsum.photos/1920/1080"/>
                <div className="position-absolute top-50 start-50 translate-middle visible-text">
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
            </header>
        </>
    )
}