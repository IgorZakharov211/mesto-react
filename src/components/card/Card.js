import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Card(props){
  console.log(props);
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.owner._id === currentUser.id;
  const cardDeleteButtonClassName = (
  `element__remove ${isOwn ? '' : 'element__remove_disabled'}`); 
  const isLiked = props.likes.some(i => i._id === currentUser.id);
  const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_active' : ''}`)

  function handleClick() {
    props.onCardClick({name: props.name, link: props.link});
  }  

  return(
    <div className="element">
      <a className="element__link">
        <img src={props.link} alt={props.name} className="element__image" onClick={handleClick}/>
      </a>
      <button className={cardDeleteButtonClassName} type="button"></button>
      <div className="element__info">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button"></button>
          <p className="element__like-count">{props.likeCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;