import React from 'react';
import PopupWithForm from '../popup_with_form/PopupWithForm';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';



function EditProfilePopup(props){
  const [name, setName] = React.useState('Имя');
  const [description, setDescription] = React.useState('Профессия');
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleDescriptionChange(e){
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  return(
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <label className="popup__field">
          <input 
          type="text" 
          className="popup__input" 
          placeholder="Имя" 
          name="name" 
          required 
          id="name-input" 
          minLength="2" 
          maxLength="40" 
          value={name}
          onChange={handleNameChange}
          />
          <span className="popup__input-error" id="name-input-error"></span> 
        </label>
        <label className="popup__field">
          <input 
          type="text" 
          className="popup__input" 
          placeholder="Занятие" 
          name="job" 
          required 
          id="job-input" 
          minLength="2" 
          maxLength="200"
          value={description}
          onChange={handleDescriptionChange}
          />
          <span className="popup__input-error" id="job-input-error"></span> 
        </label>
        <button className="popup__button-save" type="submit">Сохранить</button>
      </PopupWithForm>
  )
}

export default EditProfilePopup;