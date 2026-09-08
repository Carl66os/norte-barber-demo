import './App.css'

const whatsappUrl = 'https://wa.me/56900000000'

const services = [
  { name: 'Corte clásico', detail: 'Tijera, máquina y terminación impecable.', price: '$18.000' },
  { name: 'Corte + barba', detail: 'El equilibrio perfecto para tu perfil.', price: '$28.000', featured: true },
  { name: 'Perfilado de barba', detail: 'Toalla caliente, navaja y aceites.', price: '$14.000' },
  { name: 'Servicio premium', detail: 'Corte, barba, ritual y bebida de la casa.', price: '$38.000' },
]

const styles = [
  { number: '01', title: 'Clásico', text: 'Líneas limpias. Volumen controlado. Un corte que nunca pasa de moda.', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85' },
  { number: '02', title: 'Fade', text: 'Degradados precisos que se funden con tu ritmo y tu personalidad.', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85' },
  { number: '03', title: 'Barba', text: 'Estructura, definición y cuidado para llevarla con intención.', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85' },
]

const team = [
  { name: 'Matías Rojas', role: 'Fade & diseño', initials: 'MR', image: 'https://images.unsplash.com/photo-1583195763986-0231686dcd43?auto=format&fit=crop&w=700&q=85' },
  { name: 'Tomás Vidal', role: 'Corte clásico', initials: 'TV', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=85' },
  { name: 'Benjamín Soto', role: 'Barba & ritual', initials: 'BS', image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&w=700&q=85' },
]

const gallery = [
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=85',
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Norte Barber Club, inicio"><span className="brand-mark">N</span><span>Norte <em>Barber Club</em></span></a>
        <nav aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#equipo">Equipo</a><a href="#galeria">Galería</a><a href="#contacto">Contacto</a></nav>
        <a className="header-booking" href={whatsappUrl} target="_blank" rel="noreferrer">Reservar <Arrow /></a>
      </header>
      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-noise" aria-hidden="true"></div><p className="eyebrow"><span></span> Santiago · Chile</p>
          <h1>Cortes con precisión.<br /><i>Estilo con actitud.</i></h1>
          <div className="hero-bottom"><p>Una barbería de barrio para quienes entienden que el estilo se construye en los detalles.</p><div className="hero-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Reserva por WhatsApp <Arrow /></a><a className="text-link" href="#servicios">Ver servicios <span>↓</span></a></div></div>
          <div className="hero-stamp">EST. 2024 <b>✦</b> BARRIO NORTE</div>
        </section>
        <section className="intro-strip"><p>Tu corte, tu código.</p><span>—</span><p>Sin disfraces.</p><span>—</span><p>Con oficio.</p></section>
        <section className="section services-section" id="servicios">
          <div className="section-heading"><div><p className="eyebrow"><span></span> La carta</p><h2>Servicios<br /><i>sin vueltas.</i></h2></div><p className="section-copy">Cada servicio parte con una conversación corta. Porque un buen corte no se improvisa.</p></div>
          <div className="services-grid">{services.map((service, index) => <article className={`service-card ${service.featured ? 'featured' : ''}`} key={service.name}><span className="card-number">0{index + 1}</span>{service.featured && <span className="popular-tag">Más pedido</span>}<h3>{service.name}</h3><p>{service.detail}</p><strong>{service.price}</strong></article>)}</div>
        </section>
        <section className="section styles-section">
          <div className="section-heading compact"><div><p className="eyebrow"><span></span> Hecho para ti</p><h2>Elige tu<br /><i>estilo.</i></h2></div></div>
          <div className="style-list">{styles.map((style) => <article className="style-card" key={style.title}><img src={style.image} alt={`Estilo ${style.title} de barbería`} /><div className="style-overlay"></div><div className="style-content"><span>{style.number}</span><h3>{style.title}</h3><p>{style.text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Reservar estilo ${style.title}`}><Arrow /></a></div></article>)}</div>
        </section>
        <section className="section team-section" id="equipo">
          <div className="section-heading"><div><p className="eyebrow"><span></span> Los que cortan</p><h2>Oficio, calle<br /><i>y tijera.</i></h2></div><p className="section-copy">Tres miradas, un mismo estándar: salir de acá sintiéndote más tú.</p></div>
          <div className="team-grid">{team.map((member) => <article className="team-card" key={member.name}><div className="team-photo"><img src={member.image} alt={`Barbero ${member.name}`} /><span>{member.initials}</span></div><div><h3>{member.name}</h3><p>{member.role}</p></div></article>)}</div>
        </section>
        <section className="gallery-section" id="galeria"><div className="gallery-heading"><p className="eyebrow"><span></span> Recién salidos de la silla</p><h2>El resultado<br /><i>habla solo.</i></h2><a className="text-link" href="#contacto">Visítanos <Arrow /></a></div><div className="gallery-grid">{gallery.map((image, index) => <img key={image} src={image} alt={`Corte Norte Barber Club ${index + 1}`} />)}</div></section>
        <section className="contact-section" id="contacto"><div className="contact-main"><p className="eyebrow"><span></span> Ven a conocer la casa</p><h2>Tu próximo<br />corte empieza <i>acá.</i></h2><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Reserva por WhatsApp <Arrow /></a></div><div className="contact-details"><div><span>Horario</span><p>Mar — Vie: 10:00 — 20:00<br />Sábado: 10:00 — 18:00</p></div><div><span>Dirección</span><p>Av. Italia 1240, Local 3<br />Providencia, Santiago</p></div><div><span>Contacto</span><a href={whatsappUrl} target="_blank" rel="noreferrer">+56 9 0000 0000 <Arrow /></a></div></div></section>
      </main>
      <footer><a className="brand" href="#inicio"><span className="brand-mark">N</span><span>Norte <em>Barber Club</em></span></a><p>© 2024 Norte Barber Club</p><div><a href="#instagram">Instagram</a><a href="#tiktok">TikTok</a></div></footer>
    </div>
  )
}
export default App
