import './App.css'
import Stars from './components/Stars'
import walle from './img/walle.webp'
import knocking from './img/knocking-on-heavens-door.webp'
import greenBook from './img/green-book.webp'
import intouchables from './img/intouchables.webp'
import trianspotting from './img/trainspotting.webp'


function App() {

  return (
    <>
      <div className='film-card'>
        <h1 className="film-name">Film #1</h1>
        <img className='film-cart' src={walle} alt="film cart" />
        <div className='rating-info'>
          <span>Rating:</span>
          <Stars count={5}/>
        </div>
      </div>
      <div className='film-card'>
        <h1 className="film-name">Film #2</h1>
        <img className='film-cart' src={trianspotting} alt="film cart" />
        <div className='rating-info'>
          <span>Rating:</span>
          <Stars count={3}/>
        </div>
      </div>
      <div className='film-card'>
        <h1 className="film-name">Film #3</h1>
        <img className='film-cart' src={intouchables} alt="film cart" />
        <div className='rating-info'>
          <span>Rating:</span>
          <Stars count={1}/>
        </div>
      </div>
      <div className='film-card'>
        <h1 className="film-name">Film #4</h1>
        <img className='film-cart' src={knocking} alt="film cart" />
        <div className='rating-info'>
          <span>Rating:</span>
          <Stars count={4}/>
        </div>
      </div>
      <div className='film-card'>
        <h1 className="film-name">Film #5</h1>
        <img className='film-cart' src={greenBook} alt="film cart" />
        <div className='rating-info'>
          <span>Rating:</span>
          <Stars count={0}/>
        </div>
      </div>
    </>
  )
}

export default App
