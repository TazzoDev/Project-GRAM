import { Link, useLocation } from "react-router-dom"
import Message from "./Message"
import ArrowLeft from "../assets/icons/ArrowLeft"
import SendIcon from "../assets/icons/SendIcon"

export default function Chat(){

    const {state} = useLocation()


    const messageElements = state.messages?.map((message, index) => <Message data={message} key={index}/>)

    return(
        <div className="chat">
            <div className="chat--header">
                <Link to=".."><ArrowLeft /></Link>
                <img src={"https://placehold.co/80"}/>
                <h3>{state.name}</h3>
            </div>
            <section className="chat-container">
                {messageElements}
            </section>
            <div className="chat--footer">
                <div className="chat--footer--input"/>
                <div className="chat--footer--button">
                    <SendIcon color="white" />
                </div>
            </div>
        </div>
    )
}