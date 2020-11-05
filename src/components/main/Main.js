import React from 'react';
import api from '../../utils/api';
import Card from '../card/Card';

function Main(props){

  const [userName, setUserName] = React.useState('Жак-Ив-Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState('../../images/profile-image.jpg');

  React.useEffect(() => {
    api.getMyInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) =>{
      console.log(err);
    });
  }, [])

  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getInitialCards().then((data) =>{
      setCards(data.map((item) => ({
        id: item._id,
        name: item.name,
        link: item.link,
        likeCount: item.likes.length
      })));
    })
    .catch((err) =>{
      console.log(err);
    });
  }, [])

  return(
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar">
          <a className="profile__avatar-edit" href="#" onClick={props.onEditAvatar}></a>
          <img src={userAvatar} alt="Аватар" className="profile__image" />
        </div>
    	<div className="profile__text">
    	  <div className="profile__name">
    	    <h1 className="profile__title">{userName}</h1>
    	    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
    	  </div>
    	  <p className="profile__subtitle">{userDescription}</p>
    	</div>
    	<button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements content__elements">
        {
         cards.map(({id, name, link, likeCount})=>{
           return <Card key={id} name={name} link={link} likeCount={likeCount} onCardClick={props.handleCardClick}/>
         })
        }
      
      </section>
    </main>
  );
}


export default Main;