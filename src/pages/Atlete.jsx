import { useState } from 'react'
import Meta from '../components/Meta.jsx'
import { PageHero, Person } from '../components/ui.jsx'

const filters = [
  { id: 'tutte', label: 'Tutte' },
  { id: 'minivolley', label: 'Minivolley' },
  { id: 'under12', label: 'Under 12' },
  { id: 'altra', label: '[Altra squadra]' },
]

// Segnaposto: sostituisci con le atlete vere (nome, ruolo, numero, squadra, foto)
const teamCycle = ['minivolley', 'under12', 'altra']
const players = Array.from({ length: 12 }, (_, i) => ({ id: i, team: teamCycle[i % 3] }))

export default function Atlete() {
  const [team, setTeam] = useState('tutte')
  const visible = players.filter((p) => team === 'tutte' || p.team === team)

  return (
    <>
      <Meta title="Le atlete – Volley Prato Academy" description="Le atlete di Volley Prato Academy, squadra per squadra." />
      <PageHero title="Le atlete">Le ragazze di Volley Prato Academy, squadra per squadra.</PageHero>

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <div className="chips" role="group" aria-label="Filtra per squadra">
            {filters.map((f) => (
              <button key={f.id} className="chip" type="button" aria-pressed={team === f.id} onClick={() => setTeam(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid-4">
            {visible.map((p) => (
              <Person key={p.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
