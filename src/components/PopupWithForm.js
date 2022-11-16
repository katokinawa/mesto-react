
function PopupWithForm() {
    return (
<>
    <section className="popup profile-popup">
      <div className="popup__container">
        <h2 className="title popup__title">Редактировать профиль</h2>
        <form name="edit" className="popup__form popup__form-container submit-profile-form-handler-edit" noValidate>
          <label>
            <input type="text" id="username" name="name" className="username popup__input popup__subtitle name-input" placeholder="Ваше имя" minLength="2" maxLength="40" required />
            <span id="username-error" className="username-error popup__error"></span>
          </label>
          <label>
            <input type="text" id="job" name="about" className="job popup__input popup__subtitle popup__subtitle_margin_small job-input" placeholder="О себе" minLength="2" maxLength="200" required />
            <span id="job-error" className="job-error popup__error popup__error_position_bottom"></span>
          </label>
          <button type="submit" name="save" className="popup__button popup__save-button">Сохранить</button>
        </form>
        <button type="button" className="popup__close-button"></button>
      </div>
    </section>
    <section className="popup update-avatar-popup">
      <div className="popup__container popup__container_min-height">
        <h2 className="title popup__title popup__title_avatar-form">Обновить аватар</h2>
        <form name="avatar" className="popup__form popup__form-container submit-avatar-form-handler-save" noValidate>
          <label>
            <input id="avatar" type="text" name="avatar" placeholder="Ссылка на картинку" className="avatar popup__input popup__subtitle avatar-name-input" required />
            <span id="avatar-error" className="avatar-error popup__error"></span>
          </label>
          <button type="submit" name="save-avatar" className="popup__button popup__save-avatar-button">Сохранить</button>
        </form>
        <button type="button" className="popup__close-button"></button>
      </div>
    </section>
    <section className="popup confirm-popup">
      <div className="popup__container popup__container_min-height-confirm">
        <h2 className="title popup__title popup__title_confirm-form">Вы уверены?</h2>
        <form name="confirm" className="popup__form popup__form-container submit-profile-form-handler-confirm" noValidate>
          <button type="submit" className="popup__button popup__confirm-button">Да</button>
        </form>
        <button type="button" className="popup__close-button"></button>
      </div>
    </section>
    <section className="popup photo-item-popup">
      <div className="popup__container popup__container_align-items_start">
        <h2 className="title popup__title popup__title_item-form">Новое место</h2>
        <form name="add" className="popup__form popup__form-container submit-profile-form-handler-add" noValidate>
          <label>
            <input id="name" type="text" name="name" className="name popup__input popup__subtitle item-name-input" placeholder="Название" minLength="2" maxLength="40" required />
            <span id="name-error" className="name-error popup__error"></span>
          </label>
          <label>
            <input id="link" type="url" name="link" className="link popup__input popup__subtitle popup__subtitle_margin_small item-link-input" placeholder="Ссылка на картинку" required />
            <span id="link-error" className="link-error popup__error popup__error_position_bottom"></span>
          </label>
          <button type="submit" name="create" className="popup__button popup__create-button">Создать</button>
        </form>
        <button type="button" className="popup__close-button"></button>
      </div>
    </section>
</>
    );
  }
  
  export default PopupWithForm;
  