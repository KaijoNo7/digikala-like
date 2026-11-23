import { CartIcon, CloseIcon, TrashIcon } from './Icons'
import { formatPrice, productUrl, toFa } from '../data/products'

export default function CartDrawer({ open, items, onClose, onChangeQty, onRemove }) {
  if (!open) return null

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-label="سبد خرید">
        <div className="drawer-head">
          <h2>
            سبد خرید <span className="muted">({toFa(count)} کالا)</span>
          </h2>
          <button className="close-btn" onClick={onClose} aria-label="بستن سبد خرید">
            <CloseIcon />
          </button>
        </div>

        <div className="drawer-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <CartIcon size={56} />
              <strong>سبد خرید شما خالی است!</strong>
              <span>می‌توانید برای مشاهده محصولات بیشتر به صفحه اصلی بروید.</span>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-line" key={item.id}>
                <img src={item.image} alt="" />
                <div className="cart-line-info">
                  <a className="cart-line-name" href={productUrl(item.id)} onClick={onClose}>
                    {item.name}
                  </a>
                  <div className="cart-line-price">{formatPrice(item.price * item.qty)}</div>
                  <div className="qty">
                    <button onClick={() => onChangeQty(item.id, 1)} aria-label={`افزایش ${item.name}`}>
                      +
                    </button>
                    <span>{toFa(item.qty)}</span>
                    {item.qty > 1 ? (
                      <button onClick={() => onChangeQty(item.id, -1)} aria-label={`کاهش ${item.name}`}>
                        −
                      </button>
                    ) : (
                      <button onClick={() => onRemove(item.id)} aria-label={`حذف ${item.name}`}>
                        <TrashIcon size={15} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="drawer-foot">
          <div className="total-row">
            <span>جمع سبد خرید</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button className="btn btn-primary btn-block btn-lg" disabled={items.length === 0}>
            تایید و تکمیل سفارش
          </button>
          <p className="hint">نسخه نمایشی — پرداخت پیاده‌سازی نشده است.</p>
        </div>
      </aside>
    </>
  )
}
