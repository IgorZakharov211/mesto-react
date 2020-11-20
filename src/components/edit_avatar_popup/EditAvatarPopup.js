import React from 'react';
import PopupWithForm from '../popup_with_form/PopupWithForm';

function EditAvatarPopup(props){
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
        <label className="popup__field">
          <input 
          type="url" 
          className="popup__input" 
          placeholder="Ссылка на изображение" 
          name="url" 
          required 
          id="url-inputAvatar"
          ref={avatarRef} 
          />
          <span className="popup__input-error" id="url-inputAvatar-error"></span>
        </label>
        <button className="popup__button-save" type="submit">Сохранить</button>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;