import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ApiConfig } from '../utils/api';
import { useEffect, useState } from 'react';
import EditProfilePopup from './EditProfilePopup';

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

  function handleUpdateUser({name, about}) {
    ApiConfig.setUserInfo(name, about).then((c) => {
      setCurrentUser(c)
      closeAllPopups();
    })
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

    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
       />

    {/*Сначала идут переменные, потом функции, потом дополнительные классы, затем инпуты и кнопки*/}
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
