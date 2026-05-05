const InfoPanel = ({temperature, peakData, mode}) => {
  const wienPeak = (2.897e6 / temperature).toFixed(2)
  const wavelengthShift = peakData.wavelength < 450 ? 'Toward violet/UV' : 'Toward red/IR'

  return (
    <div className="card info-card">
      <div className="panel-head">
        <div>
          <div className="section-kicker">Live Analysis</div>
          <h2 className="section-title">Spectrum Summary</h2>
        </div>
      </div>

      <div className="metric-grid">
        <div className="metric-tile">
          <div className="metric-label">Mode</div>
          <span className="metric-value">{mode}</span>
        </div>
        <div className="metric-tile">
          <div className="metric-label">Temperature</div>
          <span className="metric-value">{temperature} K</span>
        </div>
        <div className="metric-tile">
          <div className="metric-label">Graph Peak</div>
          <span className="metric-value">{peakData.wavelength} nm</span>
        </div>
        <div className="metric-tile">
          <div className="metric-label">Wien Peak</div>
          <span className="metric-value">{wienPeak} nm</span>
        </div>
        <div className="metric-tile">
          <div className="metric-label">Peak Intensity</div>
          <span className="metric-value">{peakData.intensity}</span>
        </div>
        <div className="metric-tile">
          <div className="metric-label">Classical Trend</div>
          <span className="metric-value">Rises without bound at short λ</span>
        </div>
        <div className="metric-tile">
          <div className="metric-label">Spectral Shift</div>
          <span className="metric-value">{wavelengthShift}</span>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
