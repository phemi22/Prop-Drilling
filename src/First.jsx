import { useState, createContext } from "react";
import Second from "./Second.jsx";

export const subscriberContext = createContext()

export default function First(){

    const [subscriberName, setSubscriberName] = useState("Femi Adedokun")


    return(
        <div className="subscriber-card">
            <h1>Channel Subscription</h1>
            <subscriberContext.Provider value={subscriberName}>
                <Second />
            </subscriberContext.Provider>
        </div>
    )
}