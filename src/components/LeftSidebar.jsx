import { CircularProgressbar } from "react-circular-progressbar"
import { formatNumber } from "../utils"
import Clock from "./Clock"
import Contact from "./Contact"
import LevelProgressBar from "./Level"


export default function LeftSidebar({money, xp, chats}){

    const cartelChatElements = chats.cartel.map( (person, index) => <Contact {...person} key={index}/>)
   
    return (
        <div className="left-sidebar">
            <section className="ls-top">
                <img src="src/assets/LOGO.svg" />
                <Clock />
            </section>
            <hr />
            <section className="user-section">
                <div className="avatar">
                    <img src='src/assets/images/user.png'/>
                    <h2>Boss</h2>
                </div>
                <div className="money-stats">
                    <p>Bank: <b>${formatNumber(money.bank)}</b></p>
                    <p>Cash: <b>${formatNumber(money.cash)}</b></p>
                </div>
                <br />
                <div className="level-stats">
                    <LevelProgressBar {...xp}/>
                </div>
            </section>
            <section className="contacts">
                <h3>Contacts</h3>
                <section className="contacts-section">
                    <h4>Cartel</h4>
                    <hr />
                    {cartelChatElements}
                    <br/>
                    <h4>Clients</h4>
                    <hr />
                </section>
            </section>
        </div>
    )
}