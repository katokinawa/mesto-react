import { useState, useEffect } from 'react';
import { ApiConfig } from '../utils/Api';
import Card from './Card';

function Main(props) {
const [userName, setUserName] = useState('Жак-Ив Кусто')
const [userDescription, setUserDescription] = useState('Исследователь океана')
const [userAvatar, setUserAvatar] = useState('')
const [cards, setCards] = useState([]);

useEffect(() => {
    ApiConfig.getInitialCards().then(data => {
      setCards(data)
    })
    ApiConfig.getUserInfo().then(data => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
}, [])

    return (
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__pen"></div>
          <img className="profile__avatar" src={userAvatar} alt="" onClick={props.onEditAvatar} />
          <div className="profile__title-wrapper">
            <h1 className="profile__title title">{userName}</h1>
            <button type="button" id="edit-button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle subtitle">{userDescription}</p>
          <button type="button" id="add-button" className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        <section className="photo-flex content__photo-flex" aria-label="photo-flex">
          <ul className="photo-flex__list">
            {cards.map((card) => (
              <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              />
            ))}
          </ul>
        </section>
      </main>
    );
  }
  
  export default Main;
  