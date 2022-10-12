import PropTypes from 'prop-types';
import { ContactsListItem } from './ContactsListItem';
import css from './ContactsList.module.css';
export const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <>
      <ul className={css.contacts_list}>
        <ContactsListItem
          onDeleteContact={onDeleteContact}
          contacts={contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      // number: PropTypes.number.isRequired,
    }).isRequired
  ),
};
