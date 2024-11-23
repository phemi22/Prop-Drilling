import { useEffect, useRef } from "react"

export default function InputRef(){
    const inputRef = useRef(null)

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }, [])

    return(

        <div>
            <input 
            type="text" 
            ref={inputRef}
            />
        </div>
    )
}