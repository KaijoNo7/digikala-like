// Writes the catalog from src/data/products.js to backend/products.json,
// so the API and the offline fallback always serve the same products.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { products } from '../src/data/products.js'

const target = fileURLToPath(new URL('../../backend/products.json', import.meta.url))
writeFileSync(target, JSON.stringify(products, null, 2) + '\n', 'utf-8')
console.log(`Wrote ${products.length} products to ${target}`)
