import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

export default ContactList;
