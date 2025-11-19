import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Modules } from './pages/Modules'
import { ACS } from './pages/modules/ACS'
import { HeartFailure } from './pages/modules/HeartFailure'
import { AtrialFibrillation } from './pages/modules/AtrialFibrillation'
import { HypertensiveCrisis } from './pages/modules/HypertensiveCrisis'
import { Endocarditis } from './pages/modules/Endocarditis'
import { AorticDissection } from './pages/modules/AorticDissection'
import { PAD } from './pages/modules/PAD'
import { VTE } from './pages/modules/VTE'
import { Assessment } from './pages/Assessment'
import { Settings } from './pages/Settings'
import { Glossary } from './pages/Glossary'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/acs" element={<ACS />} />
            <Route path="/modules/heart-failure" element={<HeartFailure />} />
            <Route path="/modules/atrial-fibrillation" element={<AtrialFibrillation />} />
            <Route path="/modules/hypertensive-crisis" element={<HypertensiveCrisis />} />
            <Route path="/modules/endocarditis" element={<Endocarditis />} />
            <Route path="/modules/aortic-dissection" element={<AorticDissection />} />
            <Route path="/modules/pad" element={<PAD />} />
            <Route path="/modules/vte" element={<VTE />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/glossary" element={<Glossary />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
