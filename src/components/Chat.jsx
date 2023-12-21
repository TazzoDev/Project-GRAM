import { useLocation } from "react-router-dom"
import Message from "./Message"

export default function Chat(){

    const {state} = useLocation()

    console.log(state)

    const messageElements = state.messages?.map((message, index) => <Message data={message} key={index}/>)

    return(
        <div className="chat">
            <div className="chat--header">
                <img src={"https://placehold.co/80"}/>
                <h3>{state.name}</h3>
            </div>
            {messageElements}
        </div>
    )
}