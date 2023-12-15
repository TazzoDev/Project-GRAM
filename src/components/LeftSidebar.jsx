import { formatNumber } from "../utils"
import Clock from "./Clock"
import Contact from "./Contact"


export default function LeftSidebar(data, chats){

    console.log(chats)

    const chatElements = chats.map( person => <Contact />)
   
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
                    <p>Bank: <b>${formatNumber(data.money.bank)}</b></p>
                    <p>Cash: <b>${formatNumber(data.money.cash)}</b></p>
                </div>
                <img  className="user-lvl" src="src/assets/images/Group 1.png" />
            </section>
            <section className="contacts">
                <h3>Contacts</h3>
                <section className="contacts-section">
                    <h4>Cartel</h4>
                    <hr />
                </section>
            </section>
        </div>
    )
}