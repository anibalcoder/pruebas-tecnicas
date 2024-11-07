import { useCatFactWithGif } from './hooks/useCatFactWithGif'
import './App.css'

function App () {
  const { fact, urlGif, getCatFactWithGif } = useCatFactWithGif()

  return (
    <section className='catFactWithGif'>
      <button
        onClick={() => getCatFactWithGif()}
        className='catFactWithGif__button'
      >
        Change cat fact with gif
      </button>

      <div className='catFactWithGif__content'>
        <img
          className='catFactWithGif__image'
          src={urlGif.url}
          alt={urlGif.alt_text}
        />
        <p className='catFactWithGif__text'>
          {fact}
        </p>
      </div>
    </section>
  )
}

export default App
