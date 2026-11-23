import { useState } from 'react'
import ProductCarousel from './ProductCarousel'
import ServiceBadges from './ServiceBadges'
import { CheckIcon, ShieldIcon, StarIcon, StoreIcon, TruckIcon } from './Icons'
import {
  STORE_NAME,
  categoryName,
  categoryUrl,
  discountPercent,
  formatPrice,
  formatRating,
  stockLabels,
  toFa,
} from '../data/products'

const MAX_QTY = 10

export default function ProductPage({ product, catalog, cartQty, onAdd, onBuyNow }) {
  if (!product) {
    return (
      <section className="section">
        <div className="empty">
          <p>محصول مورد نظر پیدا نشد.</p>
          <a className="btn btn-primary" href="#/">
            بازگشت به صفحه اصلی
          </a>
        </div>
      </section>
    )
  }

  // Keyed by id so the quantity resets when moving to another product.
  return (
    <ProductDetails
      key={product.id}
      product={product}
      catalog={catalog}
      cartQty={cartQty}
      onAdd={onAdd}
      onBuyNow={onBuyNow}
    />
  )
}

function ProductDetails({ product, catalog, cartQty, onAdd, onBuyNow }) {
  const [qty, setQty] = useState(1)

  const discount = discountPercent(product)
  const soldOut = product.stock === 'out_of_stock'
  const saving = product.oldPrice ? product.oldPrice - product.price : 0
  const related = catalog.filter((p) => p.category === product.category && p.id !== product.id)
  const keySpecs = (product.specs ?? []).slice(0, 4)

  return (
    <>
      <nav className="breadcrumb" aria-label="مسیر صفحه">
        <a href="#/">آذر دیجیتال</a>
        <span aria-hidden="true">/</span>
        <a href={categoryUrl(product.category)}>{categoryName(product.category)}</a>
        <span aria-hidden="true">/</span>
        <span className="breadcrumb-current">{product.brand}</span>
      </nav>

      <section className="pd">
        <div className="pd-gallery">
          {discount > 0 && !soldOut && (
            <span className="pd-badge">پیشنهاد ویژه · {toFa(discount)}٪ تخفیف</span>
          )}
          <img src={product.image} alt={product.name} />
        </div>

        <div className="pd-info">
          <a className="pd-brand" href={categoryUrl(product.category)}>
            {product.brand} / {categoryName(product.category)}
          </a>
          <h1 className="pd-title">{product.name}</h1>
          {product.enName && <p className="pd-en" dir="ltr">{product.enName}</p>}

          {product.rating != null && (
            <div className="pd-rating">
              <StarIcon size={15} />
              <strong>{formatRating(product.rating)}</strong>
              <span>({toFa(product.reviews ?? 0)} امتیاز خریداران)</span>
            </div>
          )}

          {keySpecs.length > 0 && (
            <>
              <h2 className="pd-subtitle">ویژگی‌ها</h2>
              <ul className="pd-keyspecs">
                {keySpecs.map(([label, value]) => (
                  <li key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="pd-notice">
            درخواست مرجوع کردن کالا با دلیل «انصراف از خرید» تنها در صورتی قابل تایید است که کالا
            در شرایط اولیه باشد و پلمب آن باز نشده باشد.
          </div>
        </div>

        <aside className="pd-buy">
          <h2 className="pd-buy-title">فروشنده</h2>
          <div className="pd-row">
            <StoreIcon />
            <div>
              <strong>{STORE_NAME}</strong>
              <span className="muted">عملکرد عالی</span>
            </div>
          </div>
          {product.warranty && (
            <div className="pd-row">
              <ShieldIcon size={18} />
              <span>گارانتی اصالت و سلامت فیزیکی کالا · {product.warranty}</span>
            </div>
          )}
          <div className="pd-row">
            <TruckIcon size={18} />
            <div>
              <span className={`stock stock-${product.stock}`}>
                {soldOut ? stockLabels.out_of_stock : `${stockLabels[product.stock]} در انبار ${STORE_NAME}`}
              </span>
              {!soldOut && <span className="muted">ارسال آذر دیجیتال از ۱ روز کاری دیگر</span>}
            </div>
          </div>

          {!soldOut ? (
            <>
              <div className="pd-price-box">
                {discount > 0 && (
                  <div className="pd-old">
                    <span className="price-old">{toFa(product.oldPrice)}</span>
                    <span className="discount-pill">{toFa(discount)}٪</span>
                  </div>
                )}
                <div className="pd-price">
                  {toFa(product.price)} <small>تومان</small>
                </div>
                {saving > 0 && <p className="pd-saving">سود شما: {formatPrice(saving)}</p>}
              </div>

              <div className="pd-qty">
                <span>تعداد</span>
                <div className="qty">
                  <button
                    onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))}
                    aria-label="افزایش تعداد"
                    disabled={qty >= MAX_QTY}
                  >
                    +
                  </button>
                  <span>{toFa(qty)}</span>
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="کاهش تعداد"
                    disabled={qty <= 1}
                  >
                    −
                  </button>
                </div>
              </div>

              <button className="btn btn-primary btn-block btn-lg" onClick={() => onAdd(product, qty)}>
                افزودن به سبد خرید
              </button>
              <button className="btn btn-outline btn-block" onClick={() => onBuyNow(product, qty)}>
                خرید فوری
              </button>
              {cartQty > 0 && (
                <p className="pd-incart">
                  <CheckIcon /> {toFa(cartQty)} عدد از این کالا در سبد خرید شماست
                </p>
              )}
            </>
          ) : (
            <div className="pd-soldout">
              <strong>ناموجود</strong>
              <p>این کالا فعلا موجود نیست اما می‌توانید محصولات مشابه را ببینید.</p>
            </div>
          )}
        </aside>
      </section>

      <ServiceBadges small />

      <nav className="pd-tabs" aria-label="بخش‌های صفحه محصول">
        <a href="#pd-intro" onClick={jump('pd-intro')}>معرفی</a>
        {product.features?.length > 0 && <a href="#pd-features" onClick={jump('pd-features')}>ویژگی‌های کلیدی</a>}
        {product.specs?.length > 0 && <a href="#pd-specs" onClick={jump('pd-specs')}>مشخصات</a>}
      </nav>

      <section className="pd-section" id="pd-intro">
        <h2 className="pd-section-title">معرفی</h2>
        <p className="pd-desc">{product.description}</p>
      </section>

      {product.features?.length > 0 && (
        <section className="pd-section" id="pd-features">
          <h2 className="pd-section-title">ویژگی‌های کلیدی</h2>
          <ul className="pd-features">
            {product.features.map((f) => (
              <li key={f}>
                <CheckIcon /> {f}
              </li>
            ))}
          </ul>
        </section>
      )}

      {product.specs?.length > 0 && (
        <section className="pd-section" id="pd-specs">
          <h2 className="pd-section-title">مشخصات</h2>
          <dl className="specs">
            {product.specs.map(([label, value]) => (
              <div key={label} className="spec-row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <ProductCarousel
        title="کالاهای مشابه"
        link={categoryUrl(product.category)}
        products={related}
      />
    </>
  )
}

// In-page section links. The app uses the hash for routing, so scroll manually
// instead of letting the browser change the hash.
function jump(id) {
  return (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
