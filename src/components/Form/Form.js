import { useState } from 'react';
import PropTypes from 'prop-types';
import { Forms, Label, SubmitButton } from 'components/Form/Form.styled';

function Form ({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const inputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    onSubmit (name, number);
    setName('');
    setNumber('');
  };

    return (
      <Forms onSubmit={formSubmit}>
        <Label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={inputChange}
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputChange}
            required
          />
        </Label>
        <SubmitButton type="submit" disabled={number && name ? false : true}>
          Add contact
        </SubmitButton>
      </Forms>
    );
  }


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
