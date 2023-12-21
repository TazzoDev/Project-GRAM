export default function Message({data}){

    const type = data.recieved ? 'recieved' : 'sent'

    

    return(
        <div className={`message ${type}`}>
            <p>{data.text}</p>
        </div>
    )
}