import React from 'react';
import './card-list.styles.css';
import PropTypes from 'prop-types';
import {Card} from "../card/card";

export const CardList = (props) => {
  console.log(props, 'props');
  return (
    <div className='card-list'>
      {
        props?.listMonsters?.length > 0 && props?.listMonsters.map(monster => (
          <Card monster={monster} key={monster.id}/>
        ))
      }
    </div>
  );
};


CardList.propTypes = {
  listMonsters: PropTypes.array,
};


