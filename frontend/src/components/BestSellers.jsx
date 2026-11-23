import { FireIcon } from './Icons'
import { productUrl, toFa } from '../data/products'

/** Ranked list in three columns, like a "top sellers" board. */
export default function BestSellers({ products }) {
  return (
    <section className="section bestsellers">
      <div className="section-head">
        <h2 className="section-title">
          <FireIcon size={22} /> پرفروش‌ترین کالاها
        </h2>
      </div>
      <ol className="bs-grid">
        {products.map((p, i) => (
          <li key={p.id}>
            <a href={productUrl(p.id)} className="bs-item">
              <img src={p.image} alt="" loading="lazy" />
              <span className="bs-rank">{toFa(i + 1)}</span>
              <span className="bs-name">{p.name}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
