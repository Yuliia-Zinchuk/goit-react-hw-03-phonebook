import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsListItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(contact => (
    <li className={css.contactItem} key={contact.id}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.btn}
        onClick={e => {
          onDeleteContact(contact.id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
};

ContactsListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    }).isRequired
  ),
};
