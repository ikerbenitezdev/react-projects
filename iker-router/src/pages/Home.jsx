import { Link }  from '../components/Link'

export default function HomePage() {
    return (
      <>    
      <h2 className='title'>Home</h2>
      <p>Esto es la página principal de ejemplo</p>
      <img src="https://blogimage.vantagecircle.com/content/images/2022/02/mensaje-de-bienvenida.png" alt="placeholder" />
      <Link to="/about">Go to About</Link>
      </>
    )
  }
  