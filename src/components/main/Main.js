import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import React from 'react';
import api from '../../utils/api';
import Card from '../card/Card';


function Main(props){
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  const card = '';

  React.useEffect(() => {
    api.getInitialCards().then((data) =>{
      setCards(data.map((item) => ({
        key: item._id,
        id: item._id,
        name: item.name,
        link: item.link,
        likes: item.likes,
        owner: item.owner,
        likeCount: item.likes.length
      })));
    })
    .catch((err) =>{
      console.log(err);
    });
  }, []);
  
  function changeLike(newCard, card){
    const newCards = cards.map((c) => {
      if(c.id === card.id) {
        return {
          key: newCard._id,
          id: newCard._id,
          name: newCard.name,
          link: newCard.link,
          likes: newCard.likes,
          owner: newCard.owner,
          likeCount: newCard.likes.length
        };
      } else{ 
        return c;
      }
    });
    setCards(newCards);
  }

  function handleCardLike({card}) {
    const isLiked = card.likes.some(i => i._id === currentUser.id);
    if (isLiked){
      api.deleteLike(card.id).then((newCard) => {
        changeLike(newCard, card);
      });
    } else{
      api.putLike(card.id).then((newCard) => {
        changeLike(newCard, card);
      });
    }
  } 

  function handleDeleteCard(id){
    api.deleteCard(id).then((data) => {
      console.log(data);
      const cardsFilter = cards.filter((item) => {
        console.log(item);
        return id !== item.id;
      });
      setCards(cardsFilter);
    })
  }

  return(
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar">
          <a className="profile__avatar-edit" href="#" onClick={props.onEditAvatar}></a>
          <img src={currentUser.avatar} alt="Аватар" className="profile__image" />
        </div>
    	<div className="profile__text">
    	  <div className="profile__name">
    	    <h1 className="profile__title">{currentUser.name}</h1>
          <button 
          className="profile__edit-button" 
          type="button" 
          aria-label="Редактировать" 
          onClick={props.onEditProfile}>
          </button>
    	  </div>
    	  <p className="profile__subtitle">{currentUser.about}</p>
    	</div>
    	<button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements content__elements">
        {
         cards.map(({id, name, link, likes, owner, likeCount})=>{
           return <Card key={id} id={id} name={name} link={link} likes={likes} owner={owner} likeCount={likeCount} onCardClick={props.handleCardClick} onCardLike={handleCardLike} onDeleteCard={handleDeleteCard}/>
         })
        }
      
      </section>
    </main>
  );
}


export default Main;