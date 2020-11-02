function PopupWithForm(props){
    let popupOpened = false;
    {props.isOpen ? (popupOpened = 'popup_opened') : (popupOpened = '')};
    
    return (
        <div className={`popup ${popupOpened}`} id={`popup-${props.name}`}>
          <div className="popup__container">
            <button className="popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
            <form className="popup__form" action="#" method="POST" name={props.name} novalidate>
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