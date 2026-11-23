import { HeadsetIcon, ReturnIcon, ShieldIcon, TruckIcon, WalletIcon } from './Icons'

const items = [
  { icon: TruckIcon, label: 'امکان تحویل اکسپرس' },
  { icon: HeadsetIcon, label: '۲۴ ساعته، ۷ روز هفته' },
  { icon: WalletIcon, label: 'امکان پرداخت در محل' },
  { icon: ReturnIcon, label: 'هفت روز ضمانت بازگشت کالا' },
  { icon: ShieldIcon, label: 'ضمانت اصل بودن کالا' },
]

export default function ServiceBadges({ small = false }) {
  return (
    <ul className={`services ${small ? 'services-sm' : ''}`}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label}>
          <Icon size={small ? 26 : 38} />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
