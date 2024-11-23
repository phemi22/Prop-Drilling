import { useState, useRef } from "react"

export default function TheRef(){

   const count = useRef(0)

   const clickManager = ()=>{
        count.current++
        console.log(count.current)
   }

   console.log("COMPONENT RENDERS!")

    return(

        <div>
            <button onClick={clickManager}>Click To Count</button>
            <h3>{count.current}</h3>
        </div>
    )
}