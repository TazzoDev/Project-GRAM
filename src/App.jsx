import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"

import { useState } from "react"

import Dashboard from "./components/Dashboard"


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
    },
    rep: {
      maxRep: 100,
      reputation: 20,
      prices: 13
    },
    drugs: [
      {
        name: 'Marihuana',
        cartelPrice: 3,
        price: 8,
        disabled: false,
        unlockLevel:1,
      },
      {
        name: 'Amphetamine',
        cartelPrice: 7,
        price: 12,
        disabled: false,
        unlockLevel:1,
      },
      {
        name: 'Ecstasy',
        cartelPrice: 6,
        price: 12,
        disabled: false,
        unlockLevel: 3,
      },
      {
        name: 'Cocaine',
        cartelPrice: 30,
        price: 50,
        disabled: false,
        unlockLevel: 8,
      },
      {
        name: 'Crystal Meth',
        cartelPrice: 5,
        price: 12,
        disabled: false,
        unlockLevel: 10,
      },
    ]

  })


  const people = {
    cartel: [
      {name: 'Mike Byers', photoURl: '', unreadMessages: 2},
      {name: 'Eddie Back', photoURl: '', unreadMessages: 0},
    ],
    clients: [
      
    ],
  }

  
  return (
    <main>
      <LeftSidebar 
        {...data}
        chats={people}
      />
      <Dashboard  {...data}/>
      <RightSidebar />
    </main>
  )
}

export default App
