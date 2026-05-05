const TemperatureSlider = ({temperature, setTemperature}) => {
  const onChangeTemperature = event => {
    setTemperature(Number(event.target.value))
  }

  return (
    <div className="control-box">
      <label htmlFor="tempRange" className="label">
        Temperature: <span>{temperature} K</span>
      </label>
      <input
        id="tempRange"
        type="range"
        min="1000"
        max="10000"
        step="100"
        value={temperature}
        onChange={onChangeTemperature}
        className="slider"
      />
      <div className="slider-scale">
        <span>1000 K</span>
        <span>Red heat</span>
        <span>10000 K</span>
      </div>
    </div>
  )
}

export default TemperatureSlider
