import ilustracion from '../assets/img/ilustracion.svg'
const Hero = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className='info-last'>
      <div className='contenedor last-section'>
        <div className='contenedor-textos-main'>
          <h2 className='titulo left'>{title}</h2>
          <p className='parrafo'>{description}</p>
          <a href={buttonLink} className='cta'>{buttonText}</a>
        </div>
        <img src={ilustracion} alt='' />
      </div>

      <div className='svg-wave' style={{ height: '150px', overflow: 'hidden' }}>
        <svg
          viewBox='0 0 500 150' preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z'
            style={{ stroke: 'none', fill: '#f5576c' }}
          />
        </svg>
      </div>
    </section>
  )
}
export default Hero
