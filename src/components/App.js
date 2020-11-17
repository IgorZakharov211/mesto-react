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

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: 'Фотография', link: '../images/no-image.jpg'});
  const [currentUser, setCurrentUser] = React.useState({name: 'Имя', about: 'Профессия', avatar: '../images/no-image.jpg'});

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

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      handleCardClick={handleCardClick}
      />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input 
          type="text" 
          className="popup__input" 
          placeholder="Название" 
          name="title" 
          required 
          id="title-input"
           minLength="1" 
           maxLength="30" 
           />
          <span className="popup__input-error" id="title-input-error"></span>
        </label>
        <label className="popup__field">
          <input 
          type="url" 
          className="popup__input" 
          placeholder="Ссылка на картинку" 
          name="url" 
          required 
          id="url-input" 
          />
          <span className="popup__input-error" id="url-input-error"></span>
        </label>
        <button className="popup__button-save" type="submit">Создать</button>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" isOpen={false} onClose={closeAllPopups}>
        <button className="popup__button-save" type="submit">Да</button>
      </PopupWithForm>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isCardPopupOpen}/>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
