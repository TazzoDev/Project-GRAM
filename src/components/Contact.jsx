export default function Contact(data){
    return(
        <div className="contact">
            <img src={data?.photoURL} />
            <p>{data.name}</p>
        </div>
    )
}