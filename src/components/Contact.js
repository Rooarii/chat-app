import React from 'react';
import './Contact';
const name='Harold Crawford';
const avatar = 'https://randomuser.me/api/portraits/men/79.jpg';
// const connected = true;

function Contact(){
 return (
     <b className='Contact'>
         <img src={avatar} alt={name}/>
         <div>
             <h3>{name}</h3>
         </div>
     </b>
 )
};

export default Contact;