import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from './Icons'
import { heroSlides } from '../data/products'

const INTERVAL = 5000

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = heroSlides.length

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL)
    return () => clearInterval(timer)
  }, [paused, count])

  const go = (delta) => setIndex((i) => (i + delta + count) % count)

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="پیشنهادهای ویژه"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-track" style={{ transform: `translateX(${index * 100}%)` }}>
        {heroSlides.map((s, i) => (
          <a
            key={s.id}
            className="hero-slide"
            href={s.link}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
          >
            <img src={s.image} alt="" />
            <div className="hero-copy">
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <span className="hero-cta">{s.cta}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="hero-arrows">
        <button onClick={() => go(-1)} aria-label="اسلاید قبلی">
          <ChevronRight />
        </button>
        <button onClick={() => go(1)} aria-label="اسلاید بعدی">
          <ChevronLeft />
        </button>
      </div>

      <div className="hero-dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`اسلاید ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
