import React from 'react';
import './chat-app.css';

function Contact (props) {
    return (
        <div className = "avatar">
            <img src={props.image} alt={props.character}/>
        </div>
    );
        
        
    
}

export default Contact;