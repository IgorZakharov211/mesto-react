import React from 'react';
import PopupWithForm from '../popup_with_form/PopupWithForm';

function AddPlacePopup(props){
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleTitleChange(e){
    setTitle(e.target.value);
  }
    
  function handleLinkChange(e){
    setLink(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.onAddPlace({title, link});
  }



  return(
    <PopupWithForm name="place" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
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
          value={title}
          onChange={handleTitleChange}
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
          value={link}
          onChange={handleLinkChange} 
          />
          <span className="popup__input-error" id="url-input-error"></span>
        </label>
        <button className="popup__button-save" type="submit">Создать</button>
      </PopupWithForm>
  )
}

export default AddPlacePopup;