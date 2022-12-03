import { useState, useEffect } from 'react';
import { ApiConfig } from '../utils/api';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {

const [cards, setCards] = useState([]);
const currentUser = useContext(CurrentUserContext)

function handleCardLike(card) {
  // Снова проверяем, есть ли уже лайк на этой карточке
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  
  // Отправляем запрос в API и получаем обновлённые данные карточки
  ApiConfig.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
}

function handleCardDelete(card) {
  ApiConfig.deleteCard(card._id).then((arr) => {
    const res = arr.filter((c) => {
      return c._id === card._id;
    })
    return res;
  })
}

useEffect(() => {
    ApiConfig.getInitialCards().then(data => {
      setCards(data)
    })
}, [])

    return (
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__pen"></div>
          <img className="profile__avatar" src={currentUser.avatar} alt="" onClick={props.onEditAvatar} />
          <div className="profile__title-wrapper">
            <h1 className="profile__title title">{currentUser.name}</h1>
            <button type="button" id="edit-button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle subtitle">{currentUser.about}</p>
          <button type="button" id="add-button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        <section className="photo-flex content__photo-flex" aria-label="photo-flex">
          <ul className="photo-flex__list">
            {cards.map((card) => (
              <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
  
  export default Main;
  