import React from 'react';

function ImagePopup(){
    return(
    <div className="popup" id="popup-card">
      <div className="popup__container">
        <button className="popup__button-close"></button>
        <img src="images/no-image.jpg" alt="Фотография места" className="popup__pic" />
        <p className="popup__subtitle"></p>
      </div>  
    </div>
    );
}

export default ImagePopup;