import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import Societa from './pages/Societa.jsx'
import Squadre from './pages/Squadre.jsx'
import Atlete from './pages/Atlete.jsx'
import Corsi from './pages/Corsi.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Contatti from './pages/Contatti.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      {/* La landing è la pagina pubblicata ora: sta fuori dal Layout, senza menu. */}
      <Route index element={<Landing />} />
      {/* Il sito completo resta qui, in attesa di foto e contenuti definitivi. */}
      <Route element={<Layout />}>
        <Route path="sito" element={<Home />} />
        <Route path="societa" element={<Societa />} />
        <Route path="squadre" element={<Squadre />} />
        <Route path="atlete" element={<Atlete />} />
        <Route path="corsi" element={<Corsi />} />
        <Route path="sponsor" element={<Sponsor />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
