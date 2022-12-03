import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ApiConfig } from '../utils/api';
import { useEffect, useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState(CurrentUserContext);

  useEffect(() => {
    ApiConfig.getUserInfo().then(data => {
      setCurrentUser(data)
    });
  }, [])

  function closeAllPopups() {
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  
  return ( 
    <CurrentUserContext.Provider value={currentUser}>
  <div className="body">
    <div className="page">
      <Header />
      <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
       />
      <Footer />
    </div>
    {/*Сначала идут переменные, потом функции, потом дополнительные классы, затем инпуты и кнопки*/}

    <PopupWithForm
    name="profile-popup"
    title="Редактировать профиль"
    button="Сохранить"
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    classNameButton="popup__save-button"
    classNameForm="popup__form-container submit-profile-form-handler-edit">
    <label>
      <input type="text" id="username" name="name" className="username popup__input popup__subtitle name-input" placeholder="Ваше имя" minLength="2" maxLength="40" required />
      <span id="username-error" className="username-error popup__error"></span>
    </label>
    <label>
      <input type="text" id="job" name="about" className="job popup__input popup__subtitle popup__subtitle_margin_small job-input" placeholder="О себе" minLength="2" maxLength="200" required />
      <span id="job-error" className="job-error popup__error popup__error_position_bottom"></span>
    </label>
    </PopupWithForm>

    <PopupWithForm
    name="update-avatar-popup"
    title="Обновить аватар"
    button="Сохранить"
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    classNameButton="popup__save-avatar-button"
    classNameTitle="popup__title_avatar-form"
    classNameContainer="popup__container_min-height"
    classNameForm="submit-avatar-form-handler-save">
    <label>
      <input id="avatar" type="text" name="avatar" placeholder="Ссылка на картинку" className="avatar popup__input popup__subtitle avatar-name-input" required />
      <span id="avatar-error" className="avatar-error popup__error"></span>
    </label>
    </PopupWithForm>
    
    <PopupWithForm
    name="confirm-popup"
    title="Вы уверены?"
    button="Да"
    isOpen={false}
    onClose={closeAllPopups}
    classNameButton="popup__confirm-button"
    classNameTitle="popup__title_confirm-form"
    classNameContainer="popup__container_min-height-confirm"
    classNameForm="submit-profile-form-handler-confirm">
    </PopupWithForm>

    <PopupWithForm
    name="photo-item-popup"
    title="Новое место"
    button="Создать"
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    classNameButton="popup__create-button"
    classNameTitle="popup__title_item-form"
    classNameForm="submit-profile-form-handler-add">
    <label>
      <input id="name" type="text" name="name" className="name popup__input popup__subtitle item-name-input" placeholder="Название" minLength="2" maxLength="40" required />
      <span id="name-error" className="name-error popup__error"></span>
    </label>
    <label>
      <input id="link" type="url" name="link" className="link popup__input popup__subtitle popup__subtitle_margin_small item-link-input" placeholder="Ссылка на картинку" required />
      <span id="link-error" className="link-error popup__error popup__error_position_bottom"></span>
    </label>
    </PopupWithForm>

    <ImagePopup
    card={selectedCard}
    onClose={closeAllPopups}
    />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
