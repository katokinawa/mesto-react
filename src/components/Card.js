import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  
  const currentUser = useContext(CurrentUserContext)
  
    // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `${isOwn ? 'photo-flex__trash' : 'photo-flex__trash_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `photo-flex__like-button ${isLiked ? 'photo-flex__like-button_active' : ''}`
    );

  
    function handleClick() {
      onCardClick(card);
    }  
    function handleLikeClick() {
      onCardLike(card);
    }
    function handleDeleteClick() {
      onCardDelete(card);
    }
    return (
        <section id="photo-template">
        <li id="container" className="photo-flex__item">
          <img src={card.link} alt={card.name} className="photo-flex__image" onClick={handleClick} />
          <button id="like" type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <div className="photo-flex__like-count">{card.likes.length}</div>
          <h2 id="nametemplate" className="title photo-flex__title">{card.name}</h2>
          <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
        </li>
      </section>
    );
  }
  
  export default Card;
  