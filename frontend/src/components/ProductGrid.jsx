import ProductCard from './ProductCard'

export default function ProductGrid({ products, emptyText = 'کالایی با این مشخصات پیدا نشد.' }) {
  if (products.length === 0) return <p className="empty">{emptyText}</p>
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
