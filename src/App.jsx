import { useState } from "react"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"

//component imports
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"
import Dashboard from "./components/Dashboard"
import Chat from "./components/Chat"




function App() {

  const [data, setData] = useState({
    money: {
      bank: 10008.90,
      cash: 1810.05
    },
    xp: {
      level: 2,
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
    ],
    inventory: [
      {
        name: "Marihuana",
        quantity: 100
      },
      {
        name: "Amphetamine",
        quantity: 35
      }

    ]


  })


  const people = {
    cartel: [
      { name: 'Mike Byers',
        photoURl: '', 
        unreadMessages: 2, 
        messages: [
          {
            recieved: true,
            text: "Hey! Listen up. We got MJ and Amp in stock, send me a message to order from me."
          },
          {
            recieved: false,
            text: "Comign right up. AAAAAAA"
          },
        ]
      },
      {name: 'Eddie Back', photoURl: '', unreadMessages: 0},
    ],
    clients: [
      
    ],
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Home data={data} people={people}/>}> 
      <Route index element={<Dashboard {...data}/>}/>
      <Route path="/:name" element={<Chat />}/>
    </Route>
  ))


  return (
      <RouterProvider router={router}/>
  )
}

function Home({data, people}){
  return(
    <main>
      <LeftSidebar 
        {...data}
        chats={people}
      />
      <Outlet />
      <RightSidebar inventory={data.inventory}/>
    </main>
  )
}

export default App


