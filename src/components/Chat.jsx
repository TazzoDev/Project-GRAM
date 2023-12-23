import { Link, useLocation, useOutletContext } from "react-router-dom"
import { useContext, useState } from "react"

import Message from "./Message"
import ArrowLeft from "../assets/icons/ArrowLeft"
import SendIcon from "../assets/icons/SendIcon"
import Buy from "./Buy"

export default function Chat({subtractCash, addItem}){

    const [interactionShown, setInteractionShown] = useState(false)

    const {state} = useLocation()


    const messageElements = state.messages?.map((message, index) => <Message data={message} key={index}/>)

    function closeInteraction(){
        setInteractionShown(false)
    }

    function openInteraction(){
        setInteractionShown(true)
    }
    
    
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
            <div className="chat--footer" onClick={openInteraction}>
                <div className="chat--footer--input"/>
                <div className="chat--footer--button">
                    <SendIcon color="white" />
                </div>
            </div>
            {interactionShown && <InteractionTab close={closeInteraction} children={<Buy subtractCash={subtractCash} addItem={addItem}/>}/>}
        </div>
    )
}
const InteractionTab = ({ close, children }) => {
    return (
      <div className="interaction-tab--overlay">
        <div className="interaction-tab">
          <span className="close" onClick={close}>&times;</span>
          {children}
        </div>
      </div>
    );
  };
  