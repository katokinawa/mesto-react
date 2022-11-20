
function ImagePopup({card, onClose}) {

    return (
      <section className={`popup photo-fullscreen-popup ${card ? 'popup_opened' : ''}`}>
        <div className=" popup__container-image">
          <img className="popup__image" src={card?.link} alt={card?.name} />
          <h2 className="popup__title-image title">{card?.name}</h2>
          <button type="button" className="popup__close-button" onClick={onClose}></button>
        </div>
      </section>
    );
  }
  
  export default ImagePopup;
  