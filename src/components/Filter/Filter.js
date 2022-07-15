import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export default function Filter({ value, onFilterChange }) {
  return (
    <Label htmlFor="filter">
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
