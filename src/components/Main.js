function Main() {
    return (
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__pen"></div>
          <img className="profile__avatar" src="#" alt="" />
          <div className="profile__title-wrapper">
            <h1 className="profile__title title">Жак-Ив Кусто</h1>
            <button type="button" id="edit-button" className="profile__edit-button"></button>
          </div>
          <p className="profile__subtitle subtitle">Исследователь океана</p>
          <button type="button" id="add-button" className="profile__add-button"></button>
        </section>
        <section className="photo-flex content__photo-flex" aria-label="photo-flex">
          <ul className="photo-flex__list">
          </ul>
        </section>
      </main>
    );
  }
  
  export default Main;
  