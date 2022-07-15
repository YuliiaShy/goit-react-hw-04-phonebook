import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { List } from './ContactList.styled';

export default function ContactList ({ list, onDelete}) {
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}
  
ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};

