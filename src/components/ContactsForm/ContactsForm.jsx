import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ContactsForm.module.css';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const {
      state: { name, number },
      handleChange,
    } = this;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.inputForm}>
          <span>Name</span>
          <input
            className={css.input}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.inputForm}>
          <span>Number</span>
          <input
            className={css.input}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
