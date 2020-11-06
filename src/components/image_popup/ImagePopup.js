import React from 'react';

function ImagePopup(props){
    const popupOpened = props.isOpen ? 'popup_opened' : '';

    return(
      <div className={`popup ${popupOpened}`} id={`popup-${props.name}`}>
        <div className="popup__container">
          <button 
          className="popup__button-close" 
          type="button" 
          aria-label="Закрыть" 
          onClick={props.onClose}>
          </button>
          <img src={props.card.link} alt={props.card.name} className="popup__pic" />
          <p className="popup__subtitle">{props.card.name}</p>
        </div>  
      </div>
    );
}

export default ImagePopup;