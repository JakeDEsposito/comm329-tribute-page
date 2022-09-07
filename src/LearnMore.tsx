import "./LearnMore.scss"

type LearnMoreProps = {
    longText: string
    list: string[]
}

export const LearnMore = ({longText, list}: LearnMoreProps) => {
    return (
        <>
            <section className="p-3">
                <h1 className="text-center w-100">Learn More...</h1>
                <div className="d-flex flex-wrap">
                    <p className="col-lg">{longText}</p>
                    <ul className="col">
                        {list.map((item, index) => { return <li key={index}>{item}</li> })}
                    </ul>
                </div>
            </section>
        </>
    )
}