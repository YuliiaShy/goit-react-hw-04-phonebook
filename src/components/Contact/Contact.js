import PropTypes from 'prop-types';
import { Items, Text, Button } from './Contact.styled';

export default function Contact ({ id, name, number, onDelete }) {
  return (
    <Items>
      <Text>
        {name}: {number}
      </Text>
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
