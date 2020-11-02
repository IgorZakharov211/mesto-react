import headerLogo from '../images/header-logo.svg';

function App() {
  return (
    <div className="page">
    <header className="header page__header">
      <img src={headerLogo} alt="Логотип" class="header__logo" />
    </header>
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar">
          <a className="profile__avatar-edit" href="#"></a>
          <img src="#" alt="Аватар" className="profile__image" />
        </div>
    	<div className="profile__text">
    	  <div className="profile__name">
    	    <h1 className="profile__title">Жак-Ив-Кусто</h1>
    	    <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
    	  </div>
    	  <p className="profile__subtitle">Исследователь океана</p>
    	</div>
    	<button className="profile__add-button" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements content__elements">
      </section>
    </main>
    <footer className="footer page__footer">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
    <div className="popup" id="popup-profile">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        <form className="popup__form" action="#" method="POST" name="profile" novalidate>
          <fieldset className="popup__fieldset">
            <h2 className="popup__heading">Редактировать профиль</h2>
            <label className="popup__field">
              <input type="text" className="popup__input" placeholder="" name="name" value="" required id="name-input" minlength="2" maxlength="40" />
              <span className="popup__input-error" id="name-input-error"></span> 
            </label>
            <label className="popup__field">
              <input type="text" className="popup__input" placeholder="" name="job" value="" required id="job-input" minlength="2" maxlength="200" />
              <span className="popup__input-error" id="job-input-error"></span> 
            </label>
            <button className="popup__button-save" type="submit">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup" id="popup-place">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        <form className="popup__form" action="#" method="POST" name="place" novalidate>
          <fieldset className="popup__fieldset">
            <h2 className="popup__heading">Новое место</h2>
            <label className="popup__field">
              <input type="text" className="popup__input" placeholder="Название" name="title" value="" required id="title-input" minlength="1" maxlength="30" />
              <span className="popup__input-error" id="title-input-error"></span>
            </label>
            <label className="popup__field">
              <input type="url" className="popup__input" placeholder="Ссылка на картинку" name="url" value="" required id="url-input" />
              <span className="popup__input-error" id="url-input-error"></span>
            </label>
            <button className="popup__button-save" type="submit">Создать</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup" id="popup-card">
      <div className="popup__container">
        <button className="popup__button-close"></button>
        <img src="images/no-image.jpg" alt="Фотография места" className="popup__pic" />
        <p className="popup__subtitle"></p>
      </div>  
    </div>
    <div className="popup" id="popup-confirm">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        <form className="popup__form" action="#" method="POST" name="confirm" novalidate>
          <fieldset className="popup__fieldset">
            <h2 className="popup__heading popup__heading_margin_small">Вы уверены?</h2>
            <button className="popup__button-save" type="submit">Да</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup" id="popup-avatar">
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        <form className="popup__form" action="#" method="POST" name="avatar" novalidate>
          <fieldset className="popup__fieldset">
            <h2 className="popup__heading">Обновить аватар</h2>
            <label className="popup__field">
              <input type="url" className="popup__input" placeholder="Ссылка на изображение" name="url" value="" required id="url-inputAvatar" />
              <span className="popup__input-error" id="url-inputAvatar-error"></span>
            </label>
            <button className="popup__button-save" type="submit">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
