import { useRef } from 'react'
import ProductCard from './ProductCard'
import { ChevronLeft, ChevronRight } from './Icons'

/** Horizontally scrolling row of product cards with arrow buttons. */
export default function ProductCarousel({ title, link, linkLabel = 'مشاهده همه', products }) {
  const ref = useRef(null)
  // In RTL, scrolling "forward" means a negative scrollLeft.
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * -ref.current.clientWidth * 0.8, behavior: 'smooth' })

  if (products.length === 0) return null
  return (
    <section className="section carousel-box">
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        {link && (
          <a className="see-all" href={link}>
            {linkLabel} <ChevronLeft size={16} />
          </a>
        )}
      </div>
      <div className="carousel">
        <button className="carousel-btn carousel-prev" onClick={() => scroll(-1)} aria-label="قبلی">
          <ChevronRight />
        </button>
        <div className="carousel-track" ref={ref}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>
        <button className="carousel-btn carousel-next" onClick={() => scroll(1)} aria-label="بعدی">
          <ChevronLeft />
        </button>
      </div>
    </section>
  )
}
