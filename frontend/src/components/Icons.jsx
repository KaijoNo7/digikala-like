// Small inline SVG icon set (stroke icons, 24x24 grid). Size via the `size` prop.
const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
})

export const SearchIcon = ({ size = 20 }) => (
  <svg {...base(size)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
)
export const CartIcon = ({ size = 22 }) => (
  <svg {...base(size)}><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 7H6" /><circle cx="10" cy="20" r="1.3" /><circle cx="17" cy="20" r="1.3" /></svg>
)
export const UserIcon = ({ size = 20 }) => (
  <svg {...base(size)}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
)
export const LoginIcon = ({ size = 20 }) => (
  <svg {...base(size)}><path d="M10 17l5-5-5-5M15 12H3M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" /></svg>
)
export const MenuIcon = ({ size = 20 }) => (
  <svg {...base(size)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
)
export const MoonIcon = ({ size = 18 }) => (
  <svg {...base(size)}><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" /></svg>
)
export const SunIcon = ({ size = 18 }) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>
)
export const PercentIcon = ({ size = 18 }) => (
  <svg {...base(size)}><path d="M19 5 5 19" /><circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /></svg>
)
export const FireIcon = ({ size = 18 }) => (
  <svg {...base(size)}><path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.5 1.2 2.5 2.3 2.5C11 8 11 5.5 12 3z" /></svg>
)
export const StarIcon = ({ size = 14, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3l-5.7 3 1.1-6.3L2.8 9.5l6.4-.9z" fill={filled ? '#f9bc00' : 'none'} stroke="#f9bc00" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)
export const ChevronLeft = ({ size = 18 }) => (
  <svg {...base(size)}><path d="m15 6-6 6 6 6" /></svg>
)
export const ChevronRight = ({ size = 18 }) => (
  <svg {...base(size)}><path d="m9 6 6 6-6 6" /></svg>
)
export const CloseIcon = ({ size = 20 }) => (
  <svg {...base(size)}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const TrashIcon = ({ size = 18 }) => (
  <svg {...base(size)}><path d="M4 7h16M10 11v6M14 11v6M5 7l1 13h12l1-13M9 7V4h6v3" /></svg>
)
export const TruckIcon = ({ size = 34 }) => (
  <svg {...base(size)}><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>
)
export const HeadsetIcon = ({ size = 34 }) => (
  <svg {...base(size)}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></svg>
)
export const WalletIcon = ({ size = 34 }) => (
  <svg {...base(size)}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M16 12.5h2M3 9h15V6" /></svg>
)
export const ReturnIcon = ({ size = 34 }) => (
  <svg {...base(size)}><path d="M9 14 4 9l5-5" /><path d="M4 9h10a6 6 0 0 1 0 12h-3" /></svg>
)
export const ShieldIcon = ({ size = 34 }) => (
  <svg {...base(size)}><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
)
export const StoreIcon = ({ size = 18 }) => (
  <svg {...base(size)}><path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6" /></svg>
)
export const CheckIcon = ({ size = 16 }) => (
  <svg {...base(size)}><path d="m5 12 4.5 4.5L19 7" /></svg>
)
export const ArrowUpIcon = ({ size = 16 }) => (
  <svg {...base(size)}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
)
