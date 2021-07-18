import React from 'react';
import PropTypes from 'prop-types';
import './card.styles.css';

export const Card = (props) => {
  const {monster} = props;
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster"/>
      <h2>{monster?.name}</h2>
      <p>{monster?.email}</p>
    </div>
  )
};

Card.propTypes = {
  monster: PropTypes.object,
};
