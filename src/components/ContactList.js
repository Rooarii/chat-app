import React from 'react';
import './Contact';
import Contact from './Contact';

const ContactList = ({users}) => {
    return (
        users.map(user => (
            <li key={user.name}>
                <Contact {...user}/>
            </li>
        ))
    )
};
export default ContactList;