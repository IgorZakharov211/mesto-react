import React from 'react';

function PopupWithForm(props){
    const popupOpened = props.isOpen ? 'popup_opened' : '';
    
    return (
        <div className={`popup ${popupOpened}`} id={`popup-${props.name}`}>
          <div className="popup__container">
            <button 
            className="popup__button-close" 
            type="button" 
            aria-label="Закрыть" 
            onClick={props.onClose}>
            </button>
            <form className="popup__form" action="#" method="POST" name={props.name} noValidate onSubmit={props.onSubmit}>
              <fieldset className="popup__fieldset">
                <h2 className="popup__heading">{props.title}</h2>
                {props.children}
              </fieldset>
            </form>
          </div>
      </div>
    )
}

  

export default PopupWithForm;