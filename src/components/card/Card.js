import React from 'react';

function Card({link, name, likeCount}){
  return(
    <div className="element">
      <a className="element__link"><img src={link} alt={name} className="element__image" /></a>
      <button className="element__remove" type="button"></button>
      <div className="element__info">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-count">{likeCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;