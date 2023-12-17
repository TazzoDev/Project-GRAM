import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"
import Main from "./components/Main"
import { useState } from "react"
import { addXp } from "./utils"


function App() {

  const [data, setData] = useState({
    money: {
      bank: 10008.90,
      cash: 1810.05
    },
    xp: {
      level: 1,
      points: 90,
      nextLevelPoints: 100
    }
  })


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
        chats={people}
      />
      <Main />
      <RightSidebar />
    </main>
  )
}

export default App
