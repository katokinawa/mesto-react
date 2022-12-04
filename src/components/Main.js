import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete}) {

const currentUser = useContext(CurrentUserContext)

    return (
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__pen"></div>
          <img className="profile__avatar" src={currentUser.avatar} alt="" onClick={onEditAvatar} />
          <div className="profile__title-wrapper">
            <h1 className="profile__title title">{currentUser.name}</h1>
            <button type="button" id="edit-button" className="profile__edit-button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle subtitle">{currentUser.about}</p>
          <button type="button" id="add-button" className="profile__add-button" onClick={onAddPlace}></button>
        </section>
        <section className="photo-flex content__photo-flex" aria-label="photo-flex">
          <ul className="photo-flex__list">
            {cards.map((card) => (
              <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
  
  export default Main;
  