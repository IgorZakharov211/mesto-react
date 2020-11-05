import React from 'react';

function Card(props){
  
  function handleClick() {
    props.onCardClick({name: props.name, link: props.link});
  }  

  return(
    <div className="element">
      <a className="element__link"><img src={props.link} alt={props.name} className="element__image" onClick={handleClick}/></a>
      <button className="element__remove" type="button"></button>
      <div className="element__info">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <p className="element__like-count">{props.likeCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;