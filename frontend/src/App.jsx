import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import CategoryCircles from './components/CategoryCircles'
import AmazingOffers from './components/AmazingOffers'
import PromoBanners from './components/PromoBanners'
import ProductCarousel from './components/ProductCarousel'
import BestSellers from './components/BestSellers'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import CreditsPage from './components/CreditsPage'
import CartDrawer from './components/CartDrawer'
import LoginModal from './components/LoginModal'
import Toast from './components/Toast'
import Footer from './components/Footer'
import {
  STORE_NAME,
  amazingOffers,
  bestSellers,
  categories,
  categoryName,
  products as localProducts,
} from './data/products'
import { fetchProducts, login as apiLogin } from './api'

const CART_KEY = 'azar.cart.v1'
const THEME_KEY = 'azar.theme'
const DEFAULT_TITLE = `${STORE_NAME} — فروشگاه اینترنتی کالای دیجیتال`

function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function readTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable — fall through to the default
  }
  return 'light'
}

/**
 * Minimal hash router.
 *   #/                       home
 *   #/amazing                home, scrolled to the "amazing offers" strip
 *   #/category/<id>?sort=x   category listing (id "all" = every product)
 *   #/product/<id>           product page
 *   #/credits                image credits
 */
function parseHash() {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  const [path, queryString = ''] = hash.split('?')
  const params = new URLSearchParams(queryString)
  const parts = path.split('/').filter(Boolean).map(decodeURIComponent)

  if (parts[0] === 'product' && parts[1]) return { page: 'product', id: parts[1] }
  if (parts[0] === 'category') {
    const id = categories.some((c) => c.id === parts[1]) ? parts[1] : 'all'
    return { page: 'category', id, sort: params.get('sort') ?? 'relevant' }
  }
  if (parts[0] === 'credits') return { page: 'credits' }
  if (parts[0] === 'amazing') return { page: 'home', anchor: 'amazing' }
  return { page: 'home' }
}

export default function App() {
  const [catalog, setCatalog] = useState(localProducts)
  const [apiOnline, setApiOnline] = useState(null)
  const [theme, setTheme] = useState(readTheme)
  const [route, setRoute] = useState(parseHash)
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState(readCart)
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [toast, setToast] = useState('')

  // Load the catalog from the backend; fall back to the local data file.
  useEffect(() => {
    let cancelled = false
    fetchProducts()
      .then((data) => {
        if (cancelled) return
        if (Array.isArray(data.products) && data.products.length > 0) {
          setCatalog(data.products)
        }
        setApiOnline(true)
      })
      .catch(() => {
        if (!cancelled) setApiOnline(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    function onHashChange() {
      const next = parseHash()
      setRoute((prev) => {
        // Only jump to the top when the page changes, not when e.g. the sort changes.
        if (prev.page !== next.page || prev.id !== next.id) window.scrollTo(0, 0)
        return next
      })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // "#/amazing" scrolls to the offers strip once the home page has rendered.
  useEffect(() => {
    if (route.anchor) document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'smooth' })
  }, [route])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart))
    } catch {
      // ignore
    }
  }, [cart])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2000)
    return () => clearTimeout(timer)
  }, [toast])

  const currentProduct =
    route.page === 'product' ? catalog.find((p) => p.id === route.id) ?? null : null

  useEffect(() => {
    if (currentProduct) document.title = `${currentProduct.name} | ${STORE_NAME}`
    else if (route.page === 'category') document.title = `${categoryName(route.id)} | ${STORE_NAME}`
    else document.title = DEFAULT_TITLE
  }, [currentProduct, route])

  const offers = useMemo(() => amazingOffers(catalog), [catalog])
  const topSellers = useMemo(() => bestSellers(catalog), [catalog])
  const byCategory = (id) => catalog.filter((p) => p.category === id)

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const isSearching = query.trim() !== ''

  function addToCart(product, qty = 1) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id)
      if (found) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      }
      const { id, name, price, image } = product
      return [...prev, { id, name, price, image, qty }]
    })
    setToast(`«${product.name}» به سبد خرید اضافه شد`)
  }

  function buyNow(product, qty = 1) {
    addToCart(product, qty)
    setCartOpen(true)
  }

  function changeQty(id, delta) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    )
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  // Search results are shown on the listing page; leave product/credits pages when typing.
  function handleQueryChange(value) {
    setQuery(value)
    if (route.page === 'product' || route.page === 'credits') window.location.hash = '#/'
  }

  function setSort(sort) {
    const id = route.page === 'category' ? route.id : 'all'
    window.location.replace(`#/category/${id}${sort === 'relevant' ? '' : `?sort=${sort}`}`)
  }

  async function handleLogin(username, password) {
    try {
      const { ok, data } = await apiLogin(username, password)
      if (ok && data.ok) {
        setUser(data.username ?? username)
        setLoginOpen(false)
        setToast(`با نام ${data.username ?? username} وارد شدید`)
        return { ok: true }
      }
      return { ok: false, message: data.detail ?? 'نام کاربری یا رمز عبور اشتباه است.' }
    } catch {
      return { ok: false, message: 'ارتباط با سرور برقرار نشد. بک‌اند را روی پورت ۸۰۰۰ اجرا کنید.' }
    }
  }

  let page
  if (route.page === 'product') {
    page = (
      <ProductPage
        product={currentProduct}
        catalog={catalog}
        cartQty={cart.find((i) => i.id === currentProduct?.id)?.qty ?? 0}
        onAdd={addToCart}
        onBuyNow={buyNow}
      />
    )
  } else if (route.page === 'credits') {
    page = <CreditsPage />
  } else if (route.page === 'category' || isSearching) {
    const id = route.page === 'category' ? route.id : 'all'
    page = (
      <CategoryPage
        key={id}
        catalog={catalog}
        categoryId={id}
        query={query}
        initialSort={route.sort ?? 'relevant'}
        onSortChange={setSort}
      />
    )
  } else {
    page = (
      <>
        <HeroSlider />
        <CategoryCircles />
        <AmazingOffers products={offers} />
        <PromoBanners />
        <ProductCarousel title="گوشی‌های موبایل" link="#/category/mobile" products={byCategory('mobile')} />
        <BestSellers products={topSellers} />
        <ProductCarousel title="لپ‌تاپ و تبلت" link="#/category/laptop" products={[...byCategory('laptop'), ...byCategory('tablet')]} />
        <ProductCarousel title="هدفون، اسپیکر و ساعت هوشمند" link="#/category/audio" products={[...byCategory('audio'), ...byCategory('wearable')]} />
        <ProductCarousel title="لوازم جانبی و گیمینگ" link="#/category/accessory" products={[...byCategory('accessory'), ...byCategory('gaming')]} />
      </>
    )
  }

  return (
    <>
      <Header
        query={query}
        onQueryChange={handleQueryChange}
        onLogoClick={() => {
          setQuery('')
          window.location.hash = '#/'
        }}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        user={user}
        onOpenLogin={() => setLoginOpen(true)}
        onLogout={() => {
          setUser(null)
          setToast('از حساب کاربری خارج شدید')
        }}
      />

      <main className="wrap main">
        {page}

        <p className="api-status">
          <span className={`dot ${apiOnline === true ? 'dot-on' : apiOnline === false ? 'dot-off' : ''}`} />
          {apiOnline === true
            ? 'فهرست محصولات از بک‌اند پایتون بارگذاری شد'
            : apiOnline === false
              ? 'بک‌اند در دسترس نیست — نمایش داده‌های نمونه محلی'
              : 'در حال اتصال به بک‌اند...'}
        </p>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
      />

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onSubmit={handleLogin} />

      <Toast message={toast} />
    </>
  )
}
