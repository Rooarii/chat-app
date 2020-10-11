import React from 'react';
import './Contact.css';

const name='Harold Crawford';
const avatar = 'https://randomuser.me/api/portraits/men/79.jpg';
const connected = true;

function Contact(){
 return (
    <b className='Contact'>
        <img class="avatar" src={avatar} alt={name}/>
        <div className='status'>
            <h4 className='name'>{name}</h4>
            <div className='status-online'></div>
            <p className='status-text'>{connected?'online':'offline'}</p>
        </div>
    </b>
 )
};

export default Contact;
