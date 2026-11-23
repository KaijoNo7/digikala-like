import { useState } from 'react'
import Logo from './Logo'
import {
  CartIcon,
  ChevronLeft,
  FireIcon,
  LoginIcon,
  MenuIcon,
  MoonIcon,
  PercentIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
  UserIcon,
} from './Icons'
import { categoryUrl, realCategories, toFa } from '../data/products'

export default function Header({
  query,
  onQueryChange,
  onLogoClick,
  theme,
  onToggleTheme,
  cartCount,
  onOpenCart,
  user,
  onOpenLogin,
  onLogout,
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-top wrap">
        <Logo
          onClick={(e) => {
            e.preventDefault()
            onLogoClick()
          }}
        />

        <label className="search">
          <SearchIcon />
          <input
            type="search"
            value={query}
            placeholder="جستجو در آذر دیجیتال"
            aria-label="جستجوی محصولات"
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </label>

        <div className="header-actions">
          {user ? (
            <span className="user-chip">
              <UserIcon size={18} />
              <strong>{user}</strong>
              <button onClick={onLogout}>خروج</button>
            </span>
          ) : (
            <button className="login-btn" onClick={onOpenLogin}>
              <LoginIcon size={18} />
              ورود | ثبت‌نام
            </button>
          )}

          <span className="header-divider" aria-hidden="true" />

          <button className="icon-btn" onClick={onOpenCart} aria-label="سبد خرید">
            <CartIcon />
            {cartCount > 0 && <span className="cart-count">{toFa(cartCount)}</span>}
          </button>
        </div>
      </div>

      <nav className="header-nav wrap" aria-label="منوی اصلی">
        <div
          className="mega"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button
            className="mega-trigger"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon size={18} />
            دسته‌بندی کالاها
          </button>
          {menuOpen && (
            <div className="mega-panel" onClick={() => setMenuOpen(false)}>
              {realCategories.map((c) => (
                <a key={c.id} href={categoryUrl(c.id)} className="mega-item">
                  <img src={c.image} alt="" />
                  <span>{c.name}</span>
                  <ChevronLeft size={16} />
                </a>
              ))}
              <a href={categoryUrl('all')} className="mega-item mega-all">
                <span>مشاهده همه کالاها</span>
                <ChevronLeft size={16} />
              </a>
            </div>
          )}
        </div>

        <span className="nav-sep" aria-hidden="true" />

        <a className="nav-link" href="#/amazing">
          <PercentIcon size={17} />
          شگفت‌انگیزها
        </a>
        <a className="nav-link" href="#/category/all?sort=popular">
          <StarIcon size={15} filled={false} />
          محبوب‌ترین‌ها
        </a>
        <a className="nav-link" href="#/category/all?sort=discount">
          <FireIcon size={17} />
          بیشترین تخفیف
        </a>
        <a className="nav-link nav-hide-sm" href="#/category/mobile">
          گوشی موبایل
        </a>
        <a className="nav-link nav-hide-sm" href="#/category/laptop">
          لپ‌تاپ
        </a>

        <button
          className="theme-btn"
          onClick={onToggleTheme}
          title={theme === 'dark' ? 'حالت روشن' : 'حالت تیره'}
          aria-label="تغییر پوسته"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  )
}
