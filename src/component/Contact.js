import React from 'react';
import './chat-app.css';


function Contact (props) {
    return (
        <div className = "Contact">
            <img className = "avatar" src={props.avatar} alt={props.name}/>
            <div>
                <p className = "name">{props.name}</p>
                <div className ="status">{props.status}
                    <p className= "status-text">{props.status ? <p className="status-online"></p> : <p className="status-offline"></p>}</p>
                    <p className= "status-text">{props.status ? "Online" : "Offline"}</p>                     
                </div>
            </div>            
        </div>
        
    );   
}

export default Contact;