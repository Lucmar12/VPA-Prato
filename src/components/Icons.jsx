export function Silhouette({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  )
}

export function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

export function Arcs() {
  return (
    <svg viewBox="0 0 520 520" aria-hidden="true" fill="none" stroke="#fff" strokeOpacity=".28" strokeWidth="3">
      <circle cx="260" cy="260" r="250" />
      <path d="M30 150Q260 270 490 150" />
      <path d="M30 370Q260 250 490 370" />
      <path d="M150 30Q270 260 150 490" />
    </svg>
  )
}
