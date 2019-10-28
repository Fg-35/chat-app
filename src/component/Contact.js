import React from 'react';
import './chat-app.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        };
    }
    render() {
        return (
            <div className = "Contact">
                <img className = "avatar" src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <p className = "name">{this.props.name}</p>
                    <div className ="status" onClick={event => {const newStatus = !this.state.status;
                        this.setState({ status: newStatus });
                        }}>{this.state.status} 
                        <p className= "status-text">{this.state.status ? <p className="status-online"></p> : <p className="status-offline"></p>}</p>
                        <p className= "status-text">{this.state.status ? "Online" : "Offline"}</p>                     
                    </div>
                </div>            
            </div>
            
        );
    }
       
}

export default Contact;