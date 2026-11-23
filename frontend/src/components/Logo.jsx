import { STORE_NAME } from '../data/products'

// Wordmark: a small flame ("Azar" = fire in Persian) plus the store name.
export default function Logo({ onClick }) {
  return (
    <a className="logo" href="#/" onClick={onClick} aria-label={`${STORE_NAME} — صفحه اصلی`}>
      <svg className="logo-mark" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--primary)" />
        <path d="M16 6c1.2 4.2 6 5.8 6 11a6 6 0 0 1-12 0c0-2.3 1.1-4 2.4-5.2.3 1.7 1.4 2.9 2.7 2.9C14.5 11.2 14.6 8.4 16 6z" fill="#fff" />
        <path d="M16 17.5c.6 1.6 2.4 2.2 2.4 4a2.4 2.4 0 0 1-4.8 0c0-1.2.9-2 2.4-4z" fill="var(--primary)" />
      </svg>
      <span className="logo-text">{STORE_NAME}</span>
    </a>
  )
}
