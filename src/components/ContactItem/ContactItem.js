import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button
        className={s.buttonList}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
