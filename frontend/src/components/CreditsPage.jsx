import credits from '../data/imageCredits.json'
import { toFa } from '../data/products'

/** Attribution for every photo used on the site (required by the CC BY / BY-SA licenses). */
export default function CreditsPage() {
  return (
    <>
      <nav className="breadcrumb" aria-label="مسیر صفحه">
        <a href="#/">آذر دیجیتال</a>
        <span aria-hidden="true">/</span>
        <span className="breadcrumb-current">منابع تصاویر</span>
      </nav>
      <section className="pd-section credits">
        <h1 className="pd-section-title">منابع و مجوز تصاویر</h1>
        <p className="muted">
          همه {toFa(credits.length)} تصویر این سایت از ویکی‌مدیا کامنز (Wikimedia Commons) با مجوزهای
          آزاد تهیه شده‌اند. نام محصولات این فروشگاه نمایشی ساختگی است و تصاویر صرفاً برای نمایش
          نوع کالا استفاده شده‌اند.
        </p>
        <div className="credits-grid">
          {credits.map((c) => (
            <figure key={c.image} className="credit">
              <img src={c.image} alt="" loading="lazy" />
              <figcaption dir="ltr">
                <a href={c.source} target="_blank" rel="noreferrer">{c.file}</a>
                <span>by {c.author}</span>
                {c.license_url ? (
                  <a href={c.license_url} target="_blank" rel="noreferrer">{c.license}</a>
                ) : (
                  <span>{c.license}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
