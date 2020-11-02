import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import PopupWithForm from './popup_with_f/popup_with_form/PopupWithForm';
import ImagePopup from '../components/image_popup/ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  
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
  }


  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" className="popup__input" placeholder="Имя" name="name" value="" required id="name-input" minlength="2" maxlength="40" />
          <span className="popup__input-error" id="name-input-error"></span> 
        </label>
        <label className="popup__field">
          <input type="text" className="popup__input" placeholder="Занятие" name="job" value="" required id="job-input" minlength="2" maxlength="200" />
          <span className="popup__input-error" id="job-input-error"></span> 
        </label>
        <button className="popup__button-save" type="submit">Сохранить</button>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="text" className="popup__input" placeholder="Название" name="title" value="" required id="title-input" minlength="1" maxlength="30" />
          <span className="popup__input-error" id="title-input-error"></span>
        </label>
        <label className="popup__field">
          <input type="url" className="popup__input" placeholder="Ссылка на картинку" name="url" value="" required id="url-input" />
          <span className="popup__input-error" id="url-input-error"></span>
        </label>
        <button className="popup__button-save" type="submit">Создать</button>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" isOpen={false} onClose={closeAllPopups}>
        <button className="popup__button-save" type="submit">Да</button>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__field">
          <input type="url" className="popup__input" placeholder="Ссылка на изображение" name="url" value="" required id="url-inputAvatar" />
          <span className="popup__input-error" id="url-inputAvatar-error"></span>
        </label>
        <button className="popup__button-save" type="submit">Сохранить</button>
      </PopupWithForm>
      <ImagePopup />
    </div>

  );
}

export default App;
