import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import PopupWithForm from './popup_with_form/PopupWithForm';
import ImagePopup from '../components/image_popup/ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: 'Фотография', link: '../images/no-image.jpg'});
  
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

  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      handleCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" className="popup__input" placeholder="Имя" name="name" required id="name-input" minLength="2" maxLength="40" />
          <span className="popup__input-error" id="name-input-error"></span> 
        </label>
        <label className="popup__field">
          <input type="text" className="popup__input" placeholder="Занятие" name="job" required id="job-input" minLength="2" maxLength="200" />
          <span className="popup__input-error" id="job-input-error"></span> 
        </label>
        <button className="popup__button-save" type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" className="popup__input" placeholder="Название" name="title" required id="title-input" minLength="1" maxLength="30" />
          <span className="popup__input-error" id="title-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="url" className="popup__input" placeholder="Ссылка на картинку" name="url" required id="url-input" />
          <span className="popup__input-error" id="url-input-error"></span>
        </label>
        <button className="popup__button-save" type="submit">Создать</button>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" isOpen={false} onClose={closeAllPopups}>
        <button className="popup__button-save" type="submit">Да</button>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="url" className="popup__input" placeholder="Ссылка на изображение" name="url" required id="url-inputAvatar" />
          <span className="popup__input-error" id="url-inputAvatar-error"></span>
        </label>
        <button className="popup__button-save" type="submit">Сохранить</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isCardPopupOpen}/>
    </div>

  );
}

export default App;
