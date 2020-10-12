import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';



function Contact({name, avatar, online}){
 return (
    <div className='Contact'>
        <img className="avatar" src={avatar} alt={name}/>
        <div className='status'>
            <h4 className='name'>{name}</h4>
            <div>
                <div className={online?'status-online':'status-offline'}></div>
                <p className='status-text'>{online?'online':'offline'}</p>
            </div>
        </div> 
    </div>
 )
};

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };
export default Contact;
