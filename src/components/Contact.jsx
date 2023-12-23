import { Link, NavLink } from "react-router-dom";

export default function Contact(data){
    return(
        <NavLink 
            to={data.name} 
            state={data}
            style={({isActive}) => {
                return {
                    background: isActive ? '#088C6F3D' : 'transparent'
                }
            }}
            className='contact'
        >
                <div className="contact-info">
                    <img src={data.photoURL ? data.photoURL : 'https://placehold.co/50'} />
                    <div className="name-area">
                        <p>{data.name}</p>
                        { data?.area &&
                            <p>{data.area}</p>
                        }
                    </div>
                </div>
                {data.unreadMessages !== 0 && 
                    <div className="new-message-indicator">
                        <b>{data.unreadMessages}</b>
                    </div>
                }
            
        </NavLink>
    )
}