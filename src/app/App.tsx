import kandaysblnLogo from '../shared/assets/kandaysbln-logo-white.svg'
import './styles/index.scss'

function App() {
  return (
    <>
      <div className='top-content'>
        <a href="https://github.com/stambekovbera" target="_blank">
          <img src={ kandaysblnLogo } className="logo react" alt="kandaysbln logo"/>
        </a>
        <h1 className='title'>React + TS + Vite</h1>
      </div>
      <div className='bottom-content'>
        <h2 className='label'>Если этот шаблон оказался вам полезен и вам всё понравилось, пожалуйста, поставьте
          ⭐️ на <a className='link' target='_blank'
                   href="https://github.com/stambekovbera/kandaysbln-vr-template">GitHub</a>.
          Это
          поможет другим разработчикам найти его!</h2>
        <h2 className='label'>If you found this template helpful and enjoyed using it, please give it a ⭐️ on <a
          className='link'
          target='_blank'
          href="https://github.com/stambekovbera/kandaysbln-vr-template">GitHub</a>. It helps others
          discover it!</h2>
      </div>
    </>
  )
}

export default App
