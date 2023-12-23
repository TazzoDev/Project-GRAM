import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function Buy({subtractCash, addItem}){

    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)

    const data = useOutletContext()

    const drugElements = data.drugs.map((drug, index) => 
        <div className="drug-card" key={index} onClick={() => handleDrugElementClick(drug)}>
            <img src={`src/assets/images/drugs/${drug.name}.png`} />
            <p>{drug.name}</p>
        </div>
    )


    const orderElements = order.map((item, index) =>
        <div className="drug-card" key={index}>
            <img src={`src/assets/images/drugs/${item.name}.png`} />
            <p>{item.name}</p>
            <p><input className="quantity-input" type="number" name={item.name} onChange={(e) => handleQuantityChange(index, e.target.value)} value={item.quantity}/>g</p>
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


    function handlePlaceOrder(){
        subtractCash(total)
        order.forEach(item => addItem(item))
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
                        <p>Total: ${total}</p>
                        <button onClick={handlePlaceOrder}>Place order</button>
                    </div>
                </section>
            </div>
        </div>
    )
}