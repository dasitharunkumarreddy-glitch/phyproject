import {useMemo, useState} from 'react'
import TemperatureSlider from './components/TemperatureSlider'
import RadiationChart from './components/RadiationChart'
import InfoPanel from './components/InfoPanel'
import InsightBox from './components/InsightBox'
import ModeSelector from './components/ModeSelector'
import {generateSpectrumData, getPeakData} from './utils/physics'
import './App.css'

const modeCopy = {
  Astronomy:
    'Compare stellar temperatures and watch the peak shift through the visible spectrum.',
  Industry:
    'Model heat signatures for furnaces, metals, and thermal monitoring scenarios.',
  Climate:
    'Explore how thermal emission moves across infrared-heavy regions used in Earth science.',
}

const App = () => {
  const [temperature, setTemperature] = useState(3000)
  const [mode, setMode] = useState('Astronomy')

  const spectrumData = useMemo(
    () => generateSpectrumData(temperature),
    [temperature],
  )

  const peakData = useMemo(() => getPeakData(spectrumData), [spectrumData])
  const wienPeak = (2.897e6 / temperature).toFixed(0)

  return (
    <div className="app-shell">
      <div className="app-container">
        <header className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">Physics Visualization Studio</div>
            <h1>Blackbody Radiation</h1>
            <p>
              An interactive spectrum explorer for studying how temperature
              reshapes emitted radiation, peak wavelength, and real-world
              applications from stars to thermal systems.
            </p>
            <div className="hero-badges">
              <div className="hero-badge">
                {temperature} K
                <span>Active temperature</span>
              </div>
              <div className="hero-badge">
                {peakData.wavelength} nm
                <span>Graph peak</span>
              </div>
              <div className="hero-badge">
                {mode}
                <span>Current mode</span>
              </div>
            </div>
          </div>

          <div className="hero-spotlight">
            <div>
              <div className="spotlight-label">Wien Prediction</div>
              <span className="spotlight-value">{wienPeak} nm</span>
            </div>
            <p className="spotlight-copy">{modeCopy[mode]}</p>
          </div>
        </header>

        <div className="top-controls">
          <TemperatureSlider
            temperature={temperature}
            setTemperature={setTemperature}
          />
          <ModeSelector mode={mode} setMode={setMode} />
        </div>

        <div className="grid-layout">
          <div className="card chart-card">
            <RadiationChart data={spectrumData} peakData={peakData} />
          </div>

          <div className="side-panel">
            <InfoPanel
              temperature={temperature}
              peakData={peakData}
              mode={mode}
            />
            <InsightBox
              temperature={temperature}
              peakData={peakData}
              mode={mode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
