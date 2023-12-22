import { useState } from "react"
import { useOutlet, useOutletContext } from "react-router-dom"

export default function Buy(){

    const [order, setOrder] = useState(
        [
            {name: "Marihuana", quantity: 100}
        ]
    )

    const data = useOutletContext()

    const drugElements = data.drugs.map((drug, index) => 
        <div className="drug-card" key={index}>
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


    return(
        <div className="buy">
            <div className="buy--drug-list">
                {drugElements}
            </div>
            <div className="buy--drug-order">
                {orderElements}
                <section className="buy--drug-order--summary-container">
                    <hr />
                    <div className="buy--drug-order--summary">
                        <p>Purchase Limit: ${data.cartel.buyLimit}</p>
                        <p>Total: $500</p>
                        <button>Place order</button>
                    </div>
                </section>
            </div>
        </div>
    )
}