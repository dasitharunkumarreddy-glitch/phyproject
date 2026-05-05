const getInsight = (temperature, mode) => {
  if (mode === 'Astronomy') {
    if (temperature < 3500) {
      return 'This object behaves like a cooler red star. Peak radiation appears at longer wavelengths.'
    }
    if (temperature < 6000) {
      return 'This is similar to a medium-temperature star like the Sun, with visible spectrum dominance.'
    }
    return 'This resembles a very hot blue star. Peak wavelength shifts toward shorter wavelengths.'
  }

  if (mode === 'Industry') {
    if (temperature < 2500) {
      return 'The system is in a moderate thermal range. Suitable for many industrial heating processes.'
    }
    if (temperature < 5000) {
      return 'High thermal radiation detected. Continuous monitoring is important to avoid overheating.'
    }
    return 'Extreme heat zone. This can indicate dangerous furnace or material stress conditions.'
  }

  if (temperature < 2800) {
    return 'This range is useful for studying Earth-like thermal emission and infrared-based climate analysis.'
  }
  if (temperature < 4500) {
    return 'Thermal emission is increasing. This helps explain energy balance and radiation transfer.'
  }
  return 'Very high emission level. Good for understanding radiation intensity changes with rising temperature.'
}

const classicalInsight = () =>
  'The Planck spectrum stays finite at short wavelengths, while the classical curve would keep rising toward the ultraviolet.'

const InsightBox = ({temperature, peakData, mode}) => (
  <div className="card insight-card">
    <div className="panel-head">
      <div>
        <div className="section-kicker">Interpretation</div>
        <h2 className="section-title">Smart Insight</h2>
      </div>
    </div>
    <p>{getInsight(temperature, mode)}</p>
    <p>{classicalInsight()}</p>
    <div className="insight-highlight">
      Peak focus: {peakData.wavelength} nm at {temperature} K
    </div>
  </div>
)

export default InsightBox
