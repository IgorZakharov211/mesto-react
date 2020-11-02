function Main(props){

  return(
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar">
          <a className="profile__avatar-edit" href="#" onClick={props.onEditAvatar}></a>
          <img src="#" alt="Аватар" className="profile__image" />
        </div>
    	<div className="profile__text">
    	  <div className="profile__name">
    	    <h1 className="profile__title">Жак-Ив-Кусто</h1>
    	    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
    	  </div>
    	  <p className="profile__subtitle">Исследователь океана</p>
    	</div>
    	<button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements content__elements">
      </section>
    </main>
  );
}


export default Main;