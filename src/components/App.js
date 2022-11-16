import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  return ( 
  <div className="body">
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
    <PopupWithForm />
    <ImagePopup />
    <template id="photo-template">
      <li id="container" className="photo-flex__item">
        <img id="linktemplate" src="#" alt="#" className="photo-flex__image" />
        <button id="like" type="button" className="photo-flex__like-button"></button>
        <div className="photo-flex__like-count">0</div>
        <h2 id="nametemplate" className="title photo-flex__title">#</h2>
        <button type="button" className="photo-flex__trash"></button>
      </li>
    </template>
  </div>
  );
}

export default App;
