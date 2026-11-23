import { promoBanners } from '../data/products'

export default function PromoBanners() {
  return (
    <section className="promos">
      {promoBanners.map((b) => (
        <a key={b.id} href={b.link} className="promo">
          <img src={b.image} alt="" loading="lazy" />
          <div className="promo-copy">
            <strong>{b.title}</strong>
            <span>{b.text}</span>
          </div>
        </a>
      ))}
    </section>
  )
}
