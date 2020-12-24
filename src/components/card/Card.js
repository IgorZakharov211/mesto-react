import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';


function Card(props){
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.owner._id === currentUser.id;
  const cardDeleteButtonClassName = (
  `element__remove ${isOwn ? '' : 'element__remove_disabled'}`); 
  const isLiked = props.likes.some(i => i._id === currentUser.id);
  const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_active' : ''}`)

  function handleClick() {
    props.onCardClick({name: props.name, link: props.link});
  } 

  function handleCardLike(){
    const card = {
      key: props.id,
      id: props.id,
      name: props.name,
      link: props.link,
      likes: props.likes,
      owner: props.owner,
      likeCount: props.likes.length}
    props.onCardLike({card});
  }

  function handleDeleteCard(){
    props.onDeleteCard(props.id);
  }

  return(
    <div className="element">
      <a className="element__link">
        <img src={props.link} alt={props.name} className="element__image" onClick={handleClick}/>
      </a>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteCard}></button>
      <div className="element__info">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleCardLike}></button>
          <p className="element__like-count">{props.likeCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;