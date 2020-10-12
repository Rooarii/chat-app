import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact(props){
 return (
    <b className='Contact'>
        <img className="avatar" src={props.avatar} alt={props.name}/>
        <div className='status'>
            <h4 className='name'>{props.name}</h4>
            <div className={props.online?'status-online':'status-offline'}></div>
            <p className='status-text'>{props.online?'online':'offline'}</p>
        </div>
    </b>
 )
};

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };
export default Contact;
