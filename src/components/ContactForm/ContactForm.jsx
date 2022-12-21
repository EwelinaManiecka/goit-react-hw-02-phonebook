import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  formChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  formSumbit = event => {
    event.preventDefault();
    this.props.addContacts(this.state);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className={css.container}>
        <form onSubmit={this.formSumbit}>
          <p className={css.title}>Name</p>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.formChange}
          ></input>
          <p className={css.title}>Number</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.formChange}
          ></input>
          <button className={css.btnSubmit} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
