import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function Buy({subtractCash, addItem}){

    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    const [showInsufficientCash, setShowInsufficientCash] = useState(false)

    const data = useOutletContext()

   

    const drugElements = data.drugs.map((drug, index) => 
        {
            if((data.xp.level >= drug.unlockLevel) && (!drug.disabled)){ 
                return <div className="drug-card" key={index} onClick={() => handleDrugElementClick(drug)}>
                    <img src={`src/assets/images/drugs/${drug.name}.png`} />
                    <p>{drug.name}</p>
                </div>
            }
        }
    )


    const orderElements = order.map((item, index) =>
        <div className="drug-card" key={index}>
            <img src={`src/assets/images/drugs/${item.name}.png`} />
            <p>{item.name}</p>
            <p>
                <input 
                    className="quantity-input" 
                    type="number" 
                    name={item.name} 
                    onChange={(e) => handleQuantityChange(index, e.target.value)} 
                    value={item.quantity} 
                    min='1' 
                    onInput={(e) => e.target.value = Math.abs(e.target.value)}
                />
                g
            </p>
        </div>
    )

    function handleQuantityChange(index, quantity){
        const newOrder = [...order]

        newOrder[index].quantity = quantity

        setOrder(newOrder)
    }

    function handleDrugElementClick(drug){
        setOrder(oldOrder => ([
            ...oldOrder,
            {...drug, quantity: 1}
        ]))
    }

    useEffect(() => {
        setTotal(() => {
            let total = 0
            order.map(item => total += item.cartelPrice * item.quantity)
            return total
        })
    },[order])

    useEffect(() => {
        if(data.money.cash < total) setShowInsufficientCash(true)
        else setShowInsufficientCash(false)
    },[total])

    function handlePlaceOrder(){
        if(data.money.cash >= total){
            subtractCash(total)
            order.forEach(item => {
                if(item.quantity > 0) addItem(item)
            })
        } 
    }

    return(
        <div className="buy">
            <div className="buy--drug-list">
                {drugElements}
            </div>
            <div className="buy--drug-order">
                <section className="buy--order--cart">
                {orderElements}
                </section>
                <section className="buy--drug-order--summary-container">
                    <hr />
                    <div className="buy--drug-order--summary">
                        <p>Purchase Limit: ${data.cartel.buyLimit}</p>
                        <p>Total: ${total} <br /> {showInsufficientCash && <span>Not enough cash!</span>}</p>
                        <button onClick={handlePlaceOrder}>Place order</button>
                    </div>
                </section>
            </div>
        </div>
    )
}