import { useRef } from "react"

export default function Focus(){
    let inputRef=useRef(null)
    function handleFocus(){
        return inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="click the button to focus me"/>
            <br></br>
            <br></br>
            <button onClick={handleFocus}>Focus the input</button>
        </div>
    )
}