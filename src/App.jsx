import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"
import Main from "./components/Main"
import { useState } from "react"


function App() {

  

  const data = {
    money: {
      bank: 10008.90,
      cash: 1810.05
    },

  }

  const people = {
    cartel: [
      {name: 'mike byers', photoURl: ''},
      {name: 'eddie back', photoURl: ''},
    ],
    clients: [],
  }

  
  
  return (
    <main>
      <LeftSidebar 
        {...data}
        chats={people.cartel}
      />
      <Main />
      <RightSidebar />
    </main>
  )
}

export default App
