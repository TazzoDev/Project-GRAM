export default function RightSidebar({inventory}){


    const inventoryElements = inventory.map((item, index) => 
        <div className="inventory-item" key={index}>
            <img src={`src/assets/images/drugs/${item.name}.png`}/>
            <section className="inventory-item--info">
                <b>{item.name}</b>
                <p>{item.quantity}g</p>
            </section>
        </div>
    )

    return (
        <div className="right-sidebar">
            <section className="inventory section">
                <h4>Inventory</h4>
                <hr />
                <div className="inventory space">
                    {inventoryElements}
                </div>
            </section>
            <section className="real-state section">
                <h4>Real State</h4>
                <hr />
                <div className="real-state space">

                </div>
            </section>
        </div>
    )
}