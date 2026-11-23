import { useRef } from 'react'
import Countdown from './Countdown'
import { ChevronLeft, ChevronRight } from './Icons'
import { PriceBlock } from './ProductCard'
import { productUrl } from '../data/products'

export default function AmazingOffers({ products }) {
  const ref = useRef(null)
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * -ref.current.clientWidth * 0.8, behavior: 'smooth' })

  if (products.length === 0) return null
  return (
    <section className="amazing" id="amazing">
      <div className="amazing-track" ref={ref}>
        <div className="amazing-intro">
          <h2>
            پیشنهاد
            <br />
            شگفت‌انگیز
          </h2>
          <Countdown />
          <span className="amazing-pct" aria-hidden="true">٪</span>
          <a href="#/category/all?sort=discount" className="amazing-all">
            مشاهده همه <ChevronLeft size={16} />
          </a>
        </div>
        {products.map((p) => (
          <a key={p.id} className="amazing-card" href={productUrl(p.id)}>
            <img src={p.image} alt={p.name} loading="lazy" />
            <h3>{p.name}</h3>
            <PriceBlock product={p} />
          </a>
        ))}
        <a className="amazing-card amazing-more" href="#/category/all?sort=discount">
          <span className="amazing-more-icon"><ChevronLeft size={22} /></span>
          مشاهده همه
        </a>
      </div>
      <button className="carousel-btn carousel-prev" onClick={() => scroll(-1)} aria-label="قبلی">
        <ChevronRight />
      </button>
      <button className="carousel-btn carousel-next" onClick={() => scroll(1)} aria-label="بعدی">
        <ChevronLeft />
      </button>
    </section>
  )
}
