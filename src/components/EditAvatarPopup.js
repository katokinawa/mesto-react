import PopupWithForm from "./PopupWithForm";
import { useRef } from 'react'


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value
        });
      }
    
    return(
    <PopupWithForm
        name="update-avatar-popup"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        classNameButton="popup__save-avatar-button"
        classNameTitle="popup__title_avatar-form"
        classNameContainer="popup__container_min-height"
        classNameForm="submit-avatar-form-handler-save">
        <label>
          <input ref={avatarRef} id="avatar" type="text" name="avatar" placeholder="Ссылка на картинку" className="avatar popup__input popup__subtitle avatar-name-input" required />
          <span id="avatar-error" className="avatar-error popup__error"></span>
        </label>
    </PopupWithForm>
    )
}
export default EditAvatarPopup;