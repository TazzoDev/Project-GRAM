import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function Buy(){

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
            <p>{item.quantity}g</p>
        </div>
    )

    function handleDrugElementClick(drug){
        setOrder(oldOrder => ([
            ...oldOrder,
            {...drug, quantity: 5}
        ]))
    }

    useEffect(() => {
        setTotal(() => {
            let total = 0
            order.map(item => total += item.cartelPrice * item.quantity)
            return total
        })
    },[order])


    console.log(order)

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
                        <button>Place order</button>
                    </div>
                </section>
            </div>
        </div>
    )
}