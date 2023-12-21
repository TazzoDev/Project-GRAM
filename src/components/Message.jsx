export default function Message({data}){

    const type = data.recieved ? 'recieved' : 'sent'

    console.log(type)

    return(
        <div className={`message ${type}`}>
            <svg  className={type} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476 82" fill="none">
                <path d="M11 8C11 3.58173 14.5817 0 19 0H468C472.418 0 476 3.58172 476 8V60.3529C476 64.7712 472.418 68.3529 468 68.3529H45.9133C45.3079 68.3529 44.706 68.4446 44.1281 68.6247L2.91549 81.4681C1.17321 82.0111 -0.32642 80.1284 0.592475 78.5517L10.1839 62.0941C10.7184 61.177 11 60.1345 11 59.0729V8Z"/>
            </svg>
            <p>{data.text}</p>
        </div>
    )
}