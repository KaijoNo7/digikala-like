import { StarIcon } from './Icons'
import {
  discountPercent,
  formatRating,
  productUrl,
  stockLabels,
  toFa,
} from '../data/products'

/** Price block used by cards: discount pill + price on one line, old price below. */
export function PriceBlock({ product, size = 'md' }) {
  const discount = discountPercent(product)
  if (product.stock === 'out_of_stock') {
    return <div className="price-block"><span className="soldout">{stockLabels.out_of_stock}</span></div>
  }
  return (
    <div className={`price-block price-${size}`}>
      <div className="price-line">
        {discount > 0 && <span className="discount-pill">{toFa(discount)}٪</span>}
        <span className="price">
          {toFa(product.price)} <small>تومان</small>
        </span>
      </div>
      {discount > 0 && <span className="price-old">{toFa(product.oldPrice)}</span>}
    </div>
  )
}

export default function ProductCard({ product, compact = false }) {
  return (
    <a className={`card ${compact ? 'card-compact' : ''}`} href={productUrl(product.id)}>
      <div className="card-media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-name">{product.name}</h3>
        <div className="card-meta">
          {product.stock === 'low_stock' ? (
            <span className="stock stock-low_stock">{stockLabels.low_stock}</span>
          ) : (
            <span />
          )}
          {product.rating != null && (
            <span className="rating">
              {formatRating(product.rating)}
              <StarIcon size={13} />
            </span>
          )}
        </div>
        <PriceBlock product={product} />
      </div>
    </a>
  )
}
