import {CurrentUserContext} from '../contexts/CurrentUserContext';
import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import PopupWithForm from './popup_with_form/PopupWithForm';
import EditProfilePopup from './edit_profile_popup/EditProfilePopup';
import EditAvatarPopup from './edit_avatar_popup/EditAvatarPopup';
import ImagePopup from '../components/image_popup/ImagePopup';
import api from '../utils/api';
import AddPlacePopup from './add_place_popup/AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: 'Фотография', link: '../images/no-image.jpg'});
  const [currentUser, setCurrentUser] = React.useState({name: 'Имя', about: 'Профессия', avatar: '../images/no-image.jpg'});
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
        return id !== item.id;
      });
      setCards(cardsFilter);
    })
  }

  React.useEffect(() => {
    api.getMyInfo().then((data) => {
      setCurrentUser({id: data._id, name: data.name, about: data.about, avatar: data.avatar});
    })
    .catch((err) =>{
      console.log(err);
    });
  }, [])
  
  
  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setCardPopupOpen(false);
  }

  function handleCardClick({name, link}){
    setCardPopupOpen(true);
    setSelectedCard({name: name, link: link});
  }

  function handleUpdateUser({name, about}){
    api.patchMyInfo(name, about).then((res) => {
      setCurrentUser({id: res._id, name: res.name, about: res.about, avatar: res.avatar});
      closeAllPopups();
    })
  }

  function handleUpdateAvatar({avatar}){
    api.patchMyAvatar(avatar).then((res) => {
      setCurrentUser({id: res._id, name: res.name, about: res.about, avatar: res.avatar});
      closeAllPopups();
    })
  }

  function handleAddPlaceSubmit({title, link}){
    api.postCard(title, link).then((res) => {
      const newCard = {
        key: res._id,
        id: res._id,
        name: res.name,
        link: res.link,
        likes: res.likes,
        owner: res.owner,
        likeCount: res.likes.length
      }
      setCards([newCard, ...cards])
      closeAllPopups();
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      handleCardClick={handleCardClick}
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleDeleteCard}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <PopupWithForm name="confirm" title="Вы уверены?" isOpen={false} onClose={closeAllPopups}>
        <button className="popup__button-save" type="submit">Да</button>
      </PopupWithForm>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isCardPopupOpen} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
