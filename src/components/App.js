import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { ApiConfig } from '../utils/api';
import { useEffect, useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(CurrentUserContext);

  useEffect(() => {
    ApiConfig.getInitialCards().then(data => {
      setCards(data)
    })
    ApiConfig.getUserInfo().then(data => {
      setCurrentUser(data)
    });
}, [])

  function handleAddPlaceSubmit(name, link) {
    ApiConfig.generateCard(name, link)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
    })
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    ApiConfig.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  
  function handleCardDelete(card) {
    ApiConfig.deleteCard(card._id).then(() => {
      setCards(cards.filter((c) => {
        return c._id !== card._id;
      }));
    })
  }

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
  
  function handleUpdateAvatar({avatar}) {
    ApiConfig.setUserAvatar(avatar).then((c) => {
      setCurrentUser(c);
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
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}

       />
      <Footer />
    </div>

    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
       />

    {/*Сначала идут переменные, потом функции, потом дополнительные классы, затем инпуты и кнопки*/}

    <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      onUpdateAvatar={handleUpdateAvatar}
     />

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
    
    <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
    />
    <ImagePopup
    card={selectedCard}
    onClose={closeAllPopups}
    />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
