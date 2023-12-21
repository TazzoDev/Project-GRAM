import ReputationBar from "./ReputationBar";

export default function Dashboard({rep, drugs, xp}){

    const drugElements = drugs.map((drug, index) => <DrugTab {...drug} {...xp} key={index} />)

    return(
        <section>
            <div className="rep-drugs">
                <section className="reputation">
                    <h1>REPUTATION</h1>
                    <ReputationBar {...rep} />
                </section>
                <section className="drug-offer">
                    <h1>DRUG OFFER</h1>
                    {drugElements}
                </section>
            </div>
            <div className="map">
                <img src="src/assets/map.svg"/>
            </div>
        </section>
    )
}

function DrugTab({name, cartelPrice, price, unlockLevel, level}){

    const isUnlocked = unlockLevel <= level

    return(
        <div className="drug-tab">
            <section className="drug-tab--head">
                <img src={`src/assets/images/drugs/${name}.png`} />
                <section className="drug-info">
                    <b>{name}</b>
                    {isUnlocked && <p>Cartel price: ${cartelPrice}/g</p>}
                </section>
            </section>
            { isUnlocked && <p className="drug-tab--price">Sale price: <br/>${price}/g</p>}
            { isUnlocked ? 
            <section className="drug-tab--buttons">
                <button>Edit</button>
                <button>Disable</button>
            </section>
            : <p className="drug-tab--unlockmsg">Unlock on lvl. {unlockLevel}</p>
            }
        </div>
    )
}