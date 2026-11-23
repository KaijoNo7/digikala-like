import { categoryUrl, realCategories } from '../data/products'

export default function CategoryCircles() {
  return (
    <section className="section">
      <h2 className="section-title center">خرید بر اساس دسته‌بندی</h2>
      <div className="cat-circles">
        {realCategories.map((c) => (
          <a key={c.id} href={categoryUrl(c.id)} className="cat-circle">
            <span className="cat-circle-img">
              <img src={c.image} alt="" loading="lazy" />
            </span>
            <span>{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
