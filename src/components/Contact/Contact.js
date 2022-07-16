import PropTypes from 'prop-types';
import { Items,  Button } from './Contact.styled';

export default function Contact ({ id, name, number, onDelete }) {
  return (
    <Items>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Items>
  );
}
  
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
