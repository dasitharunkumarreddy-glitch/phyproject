const C1 = 3.74177e-16
const C2 = 1.4388e-2
const RJ_CONSTANT = 2 * 299792458 * 1.380649e-23

export const planckLaw = (wavelengthNm, temperature) => {
  const wavelengthM = wavelengthNm * 1e-9

  const numerator = C1 / Math.pow(wavelengthM, 5)
  const denominator = Math.exp(C2 / (wavelengthM * temperature)) - 1

  return numerator / denominator
}

export const rayleighJeansLaw = (wavelengthNm, temperature) => {
  const wavelengthM = wavelengthNm * 1e-9
  return (RJ_CONSTANT * temperature) / Math.pow(wavelengthM, 4)
}

export const generateSpectrumData = temperature => {
  const data = []

  for (let wavelength = 100; wavelength <= 3000; wavelength += 20) {
    const planck = planckLaw(wavelength, temperature)
    const classical = rayleighJeansLaw(wavelength, temperature)
    data.push({
      wavelength,
      planck,
      classical,
    })
  }

  const maxPlanck = Math.max(...data.map(each => each.planck))
  const maxClassical = Math.max(...data.map(each => each.classical))

  return data.map(each => ({
    wavelength: each.wavelength,
    intensity: Number((each.planck / maxPlanck).toFixed(4)),
    classicalIntensity: Number((each.classical / maxClassical).toFixed(4)),
    rawPlanck: each.planck,
  }))
}

export const getPeakData = data => {
  let peak = data[0]

  data.forEach(each => {
    if (each.rawPlanck > peak.rawPlanck) {
      peak = each
    }
  })

  return peak
}
