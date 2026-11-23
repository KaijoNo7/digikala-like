import { useState } from 'react'

export default function LoginModal({ open, onClose, onSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (!open) return null

  async function handleSubmit(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    const result = await onSubmit(username, password)
    setBusy(false)
    if (result.ok) {
      setUsername('')
      setPassword('')
    } else {
      setError(result.message)
    }
  }

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal" role="dialog" aria-label="ورود">
        <div className="modal-head">
          <h2>ورود به حساب کاربری</h2>
          <button className="close-btn" onClick={onClose} aria-label="بستن">
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">نام کاربری</label>
            <input
              id="username"
              value={username}
              autoComplete="off"
              dir="ltr"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">رمز عبور</label>
            <input
              id="password"
              type="password"
              value={password}
              autoComplete="off"
              dir="ltr"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <p className="demo-note">
            اطلاعات ورود آزمایشی: <strong dir="ltr">admin / admin</strong>. این فقط یک ورود نمایشی
            است و حساب کاربری واقعی یا احراز هویت امن ندارد.
          </p>
          <button className="btn btn-primary btn-block" type="submit" disabled={busy}>
            {busy ? 'در حال بررسی...' : 'ورود'}
          </button>
        </form>
      </div>
    </>
  )
}
