export default function Video({appearing}){
  return(
    <section className="video">
      <h2 className="section-title">Видео на TED</h2>
      <p className="section-subtitle">Для тех, кто любит прокрастинировать</p>
      <div className='video__iframes'>
        <iframe className={`video__iframe ${appearing ? 'video__iframes_appears' : ''}`} src="https://www.youtube.com/embed/5MgBikgcWnY" title="YouTube video player" allowFullScreen></iframe>
        <iframe className={`video__iframe ${appearing ? 'video__iframes_appears': ''}`} src="https://www.youtube.com/embed/arj7oStGLkU" title="YouTube video player" allowFullScreen></iframe>
      </div>
    </section>
  )
}