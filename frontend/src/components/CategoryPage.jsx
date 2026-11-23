import { useMemo, useState } from 'react'
import ProductGrid from './ProductGrid'
import {
  categories,
  categoryName,
  categoryUrl,
  discountPercent,
  sortOptions,
  sortProducts,
  toFa,
} from '../data/products'

/**
 * Product listing used for category pages ("#/category/<id>") and for search results.
 * Filters (brand, in-stock, discounted) live in local state; the sort comes from the URL
 * so header links like "#/category/all?sort=discount" can preselect it.
 */
export default function CategoryPage({ catalog, categoryId, query, initialSort, onSortChange }) {
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [onlyDiscounted, setOnlyDiscounted] = useState(false)
  const [brands, setBrands] = useState([])
  const sort = sortOptions.some((o) => o.id === initialSort) ? initialSort : 'relevant'

  const term = query.trim().toLowerCase()
  const isSearch = term !== ''

  const base = useMemo(
    () =>
      catalog.filter((p) => {
        if (categoryId !== 'all' && p.category !== categoryId) return false
        if (!term) return true
        return [p.name, p.brand, p.enName].some((v) => (v ?? '').toLowerCase().includes(term))
      }),
    [catalog, categoryId, term],
  )

  const brandList = useMemo(() => [...new Set(base.map((p) => p.brand).filter(Boolean))], [base])

  const visible = useMemo(() => {
    const filtered = base.filter(
      (p) =>
        (!onlyAvailable || p.stock !== 'out_of_stock') &&
        (!onlyDiscounted || discountPercent(p) > 0) &&
        (brands.length === 0 || brands.includes(p.brand)),
    )
    return sortProducts(filtered, sort)
  }, [base, onlyAvailable, onlyDiscounted, brands, sort])

  const title = isSearch
    ? `نتایج جستجو برای «${query.trim()}»`
    : categoryId === 'all'
      ? 'همه محصولات'
      : categoryName(categoryId)

  const toggleBrand = (b) =>
    setBrands((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]))

  const filtersActive = onlyAvailable || onlyDiscounted || brands.length > 0

  return (
    <>
      <nav className="breadcrumb" aria-label="مسیر صفحه">
        <a href="#/">آذر دیجیتال</a>
        <span aria-hidden="true">/</span>
        <span className="breadcrumb-current">{title}</span>
      </nav>

      <div className="listing">
        <aside className="filters">
          <div className="filters-head">
            <h2>فیلترها</h2>
            {filtersActive && (
              <button
                className="link-btn"
                onClick={() => {
                  setOnlyAvailable(false)
                  setOnlyDiscounted(false)
                  setBrands([])
                }}
              >
                حذف فیلترها
              </button>
            )}
          </div>

          <div className="filter-block">
            <h3>دسته‌بندی</h3>
            <ul className="filter-cats">
              {categories.map((c) => (
                <li key={c.id}>
                  <a href={categoryUrl(c.id)} aria-current={c.id === categoryId ? 'page' : undefined}>
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {brandList.length > 1 && (
            <div className="filter-block">
              <h3>برند</h3>
              {brandList.map((b) => (
                <label key={b} className="check">
                  <input type="checkbox" checked={brands.includes(b)} onChange={() => toggleBrand(b)} />
                  {b}
                </label>
              ))}
            </div>
          )}

          <label className="switch-row">
            فقط کالاهای موجود
            <input
              type="checkbox"
              role="switch"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
            />
          </label>
          <label className="switch-row">
            فقط کالاهای تخفیف‌دار
            <input
              type="checkbox"
              role="switch"
              checked={onlyDiscounted}
              onChange={(e) => setOnlyDiscounted(e.target.checked)}
            />
          </label>
        </aside>

        <section className="listing-main">
          <div className="listing-head">
            <h1>{title}</h1>
            <span>{toFa(visible.length)} کالا</span>
          </div>
          <div className="sortbar" role="group" aria-label="مرتب‌سازی">
            <strong>مرتب‌سازی:</strong>
            {sortOptions.map((o) => (
              <button key={o.id} aria-pressed={sort === o.id} onClick={() => onSortChange(o.id)}>
                {o.name}
              </button>
            ))}
          </div>
          <ProductGrid products={visible} />
        </section>
      </div>
    </>
  )
}
