function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  } 
    return (
        <div id="photo-template">
        <li id="container" className="photo-flex__item">
          <img id="linktemplate" src={card.link} alt={card.name} className="photo-flex__image" onClick={handleClick} />
          <button id="like" type="button" className="photo-flex__like-button"></button>
          <div className="photo-flex__like-count">{card.likes.length}</div>
          <h2 id="nametemplate" className="title photo-flex__title">{card.name}</h2>
          <button type="button" className="photo-flex__trash"></button>
        </li>
      </div>
    );
  }
  
  export default Card;
  