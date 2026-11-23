import Logo from './Logo'
import ServiceBadges from './ServiceBadges'
import { ArrowUpIcon } from './Icons'
import credits from '../data/imageCredits.json'
import { STORE_NAME, categoryUrl, realCategories, toFa } from '../data/products'

// Solar Hijri year, e.g. ۱۴۰۵
const YEAR = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date())

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo />
            <p className="footer-contact">
              تلفن پشتیبانی <span dir="ltr">۰۴۱-۱۲۳۴۵۶۷۸</span>
              <span className="sep">|</span>
              ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
            </p>
          </div>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            بازگشت به بالا <ArrowUpIcon />
          </button>
        </div>

        <ServiceBadges />

        <div className="footer-cols">
          <div>
            <h3>با {STORE_NAME}</h3>
            <ul>
              <li>درباره {STORE_NAME}</li>
              <li>فرصت‌های شغلی</li>
              <li>تماس با ما</li>
              <li>همکاری با سازمان‌ها</li>
            </ul>
          </div>
          <div>
            <h3>خدمات مشتریان</h3>
            <ul>
              <li>پاسخ به پرسش‌های متداول</li>
              <li>رویه‌های بازگرداندن کالا</li>
              <li>شرایط استفاده</li>
              <li>حریم خصوصی</li>
            </ul>
          </div>
          <div>
            <h3>دسته‌بندی‌ها</h3>
            <ul>
              {realCategories.map((c) => (
                <li key={c.id}>
                  <a href={categoryUrl(c.id)}>{c.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-news">
            <h3>همراه ما باشید!</h3>
            <p>با ثبت ایمیل، از جدیدترین تخفیف‌های {STORE_NAME} باخبر شوید.</p>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="ایمیل شما" aria-label="ایمیل" dir="ltr" />
              <button className="btn btn-muted" type="submit">ثبت</button>
            </form>
          </div>
        </div>

        <div className="footer-about">
          <h3>فروشگاه اینترنتی {STORE_NAME}، بررسی، انتخاب و خرید آنلاین</h3>
          <p>
            {STORE_NAME} یک فروشگاه اینترنتی نمایشی برای خرید کالای دیجیتال است؛ از گوشی موبایل،
            تبلت و لپ‌تاپ تا ساعت هوشمند، هدفون و لوازم جانبی. هدف این پروژه نمایش یک تجربه خرید
            ساده و سریع است: جستجو و فیلتر محصولات، مقایسه قیمت و تخفیف، مشاهده مشخصات فنی و افزودن
            کالا به سبد خرید.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap">
          © {YEAR} {STORE_NAME} — پروژه نمایشی دانشجویی؛ این یک فروشگاه واقعی نیست و خرید واقعی
          انجام نمی‌شود.
          <a href="#/credits">منابع تصاویر ({toFa(credits.length)})</a>
        </div>
      </div>
    </footer>
  )
}
