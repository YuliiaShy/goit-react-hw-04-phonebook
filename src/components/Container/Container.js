import React from 'react';
import PropTypes from 'prop-types';
import { Div } from './Container.styled';

export default function Container({ children }) {
  return (
    <Div>
      {children}
    </Div>
  );
}

Container.propType = {
  children: PropTypes.object.isRequired,
};
