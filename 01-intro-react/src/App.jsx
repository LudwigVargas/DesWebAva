import './App.css'
import uno from './assets/img/uno.jpg'
import dos from './assets/img/dos.jpg'
import tres from './assets/img/tres.jpg'
import cuatro from './assets/img/cuatro.jpg'
import cinco from './assets/img/cinco.jpg'
import seis from './assets/img/seis.jpg'
import Hero from './Components/Hero'
import Website from './Components/Website'
import Info from './Components/Info'
import Unete from './Components/Unete'

function App () {
  return (
    <>
      <Hero
        title='Bienvenidos Delfines'
        subtitle='Estamos aprendiendo props de React'
        buttonText='Conoce más'
        buttonLink='#contacto'
      />

      <Website
        title='Un titulo muy impactante'
        description='Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah'
        buttonText='Picale al botón'
        buttonLink='#'
      />

      <Unete
        title='Unete a nuestro equipo'
        description='Juntos podemos apoyar, buscamos personas con sentido humano que aporte su talento e ideas para mejorar su entorno laboral y personal, dejando huella en lo que más le apasiona. los colaboradores, somos los que hacemos de ésta una empresa innovadora y abierta a nuevas formas de pensar.'
      />

      <section className='cards contenedor'>
        <h2 className='titulo'>Our services</h2>
        <div className='content-cards'>
          <article className='card'>
            <i className='far fa-clone' />
            <h3>Title Card</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href='' className='cta'>Learn more</a>
          </article>
          <article className='card'>
            <i className='fas fa-database' />
            <h3>Title Card</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href='' className='cta'>Learn more</a>
          </article>
          <article className='card'>
            <i className='far fa-object-group' />
            <h3>Title Card</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a href='' className='cta'>Learn more</a>
          </article>
        </div>
      </section>

      <section className='galeria'>
        <div className='contenedor'>
          <h2 className='titulo'>Our work</h2>
          <article className='galeria-cont'>
            <img src={uno} alt='' />
            <img src={dos} alt='' />
            <img src={tres} alt='' />
            <img src={cuatro} alt='' />
            <img src={cinco} alt='' />
            <img src={seis} alt='' />
          </article>
        </div>
      </section>

      <Info
        title='Mas Informacion'
        description='Aqui encontraras toda la informacion que buscas'
        buttonText='Conoce más'
        buttonLink='#contacto'
      />

      <footer id='contacto'>
        <div className='contenedor'>
          <h2 className='titulo'>Contact us</h2>
          <form action='' className='form'>
            <input className='input' type='text' name='' id='' placeholder='Nombre' />
            <input className='input' type='email' name='' id='' placeholder='Email' />
            <textarea className='input' name='' id='' cols='30' rows='10' placeholder='Mensaje' />
            <input className='input' type='submit' value='Enviar' />
          </form>
        </div>
      </footer>
    </>
  )
}

export default App
