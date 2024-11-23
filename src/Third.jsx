import { useContext } from "react"
import { subscriberContext } from "./First.jsx"

export default function Third(){
    const subscriber = useContext(subscriberContext)

    return(
        <div className="subscriber-name">
            <p>Subscriber : {subscriber}</p>
        </div>
    )
}