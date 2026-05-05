const ModeSelector = ({mode, setMode}) => {
  const onChangeMode = event => {
    setMode(event.target.value)
  }

  return (
    <div className="control-box">
      <label htmlFor="mode" className="label">
        Application Mode
      </label>
      <select id="mode" value={mode} onChange={onChangeMode} className="select">
        <option value="Astronomy">Astronomy</option>
        <option value="Industry">Industry</option>
        <option value="Climate">Climate</option>
      </select>
      <p className="helper-text">
        Switch the interpretation layer to frame the same spectrum for stars,
        industrial heating, or climate-focused thermal analysis.
      </p>
    </div>
  )
}

export default ModeSelector
