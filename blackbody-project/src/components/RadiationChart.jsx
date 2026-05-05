import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const RadiationChart = ({data, peakData}) => (
  <div>
    <div className="chart-head">
      <div>
        <div className="section-kicker">Emission Profile</div>
        <h2 className="section-title">Spectral Distribution Curve</h2>
        <p className="chart-caption">
          Planck’s law is plotted with the classical Rayleigh–Jeans curve to
          show how quantum radiation avoids the ultraviolet catastrophe.
        </p>
      </div>
      <div className="chart-chip">Peak near {peakData.wavelength} nm</div>
    </div>
    <div className="chart-frame">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{top: 10, right: 18, bottom: 18, left: 4}}
        >
          <CartesianGrid stroke="rgba(148, 163, 184, 0.22)" strokeDasharray="4 4" />
          <XAxis
            dataKey="wavelength"
            stroke="#5f6b7b"
            tick={{fill: '#5f6b7b', fontSize: 12}}
            label={{
              value: 'Wavelength (nm)',
              position: 'insideBottom',
              offset: -5,
              fill: '#5f6b7b',
            }}
          />
          <YAxis
            stroke="#5f6b7b"
            tick={{fill: '#5f6b7b', fontSize: 12}}
            label={{
              value: 'Relative Intensity',
              angle: -90,
              position: 'insideLeft',
              fill: '#5f6b7b',
            }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: '16px',
              border: '1px solid rgba(255, 138, 61, 0.18)',
              boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)',
            }}
          />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="intensity"
            name="Planck"
            stroke="#e25a2c"
            strokeWidth={3}
            dot={false}
            activeDot={{r: 6, fill: '#0f172a', stroke: '#fff7ed', strokeWidth: 2}}
          />
          <Line
            type="monotone"
            dataKey="classicalIntensity"
            name="Rayleigh–Jeans"
            stroke="#2563eb"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
)

export default RadiationChart
