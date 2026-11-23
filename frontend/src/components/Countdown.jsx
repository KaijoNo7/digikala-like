import { useEffect, useState } from 'react'
import { toFa } from '../data/products'

// Counts down to local midnight — the "offer ends today" timer.
function remaining() {
  const now = new Date()
  const end = new Date(now)
  end.setHours(24, 0, 0, 0)
  const s = Math.max(0, Math.floor((end - now) / 1000))
  return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
}

const pad = (n) => toFa(n).padStart(2, '۰')

export default function Countdown() {
  const [time, setTime] = useState(remaining)

  useEffect(() => {
    const timer = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(timer)
  }, [])

  const [h, m, s] = time
  return (
    <div className="countdown" dir="ltr" aria-label="زمان باقی‌مانده پیشنهاد">
      <span>{pad(h)}</span>:<span>{pad(m)}</span>:<span>{pad(s)}</span>
    </div>
  )
}
