import React from 'react';
import './Contact';
import Contact from './Contact';

const ContactList = ({users}) => {
    return (
        users.map(user => (
            <Contact {...user}/>
        ))
    )
};
export default ContactList;