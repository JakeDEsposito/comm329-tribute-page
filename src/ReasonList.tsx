import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import "./ReasonList.scss"

function ReasonList (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    return (
        <>
            <ul className="d-flex flex-row justify-content-between text-center text-white outside-space m-0">
                {props.children}
            </ul>
        </>
    )
}

type ReasonListItemProps = {
    index: number
    text: string
}

const ReasonListItem = ({index, text}: ReasonListItemProps) => {
    return (
        <>
            <li className="d-flex flex-column">
                <h1>{index}</h1>
                <p>{text}</p>
            </li>
        </>
    )
}

export { ReasonList, ReasonListItem }