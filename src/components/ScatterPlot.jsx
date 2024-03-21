import { useState, useEffect } from 'react'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const ScatterPlot = ({ filteredEvents }) => {
  const [scatterData, setScatterData] = useState([])

  useEffect(() => {
    const getData = () => {
      if (!filteredEvents.length) {
        // Check for empty filteredEvents (optional)
        return [] // Return empty data (optional)
      }
      const locations = filteredEvents.map((event) => event.location) // Extract locations
      // Process locations to create scatter plot data (replace with your logic)
      const data = locations.reduce((acc, location) => {
        const city = location.split(', ').shift()
        const existingEntry = acc.find((entry) => entry.city === city)
        if (existingEntry) {
          existingEntry.number++
        } else {
          acc.push({ city, number: 1 })
        }
        return acc
      }, [])
      return data
    }
    const data = getData()
    setScatterData(data)
  }, [filteredEvents])

  return (
    <ResponsiveContainer height={400}>
      {scatterData.length > 0 ? ( // Render chart only if data exists (optional)
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis
            allowDecimals={false}
            type="number"
            dataKey="number"
            name="number of events"
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={scatterData} fill="#9368B7" />
        </ScatterChart>
      ) : (
        <p className="text-center text-gray-500">
          No events found matching your search criteria.
        </p>
      )}
    </ResponsiveContainer>
  )
}

export default ScatterPlot
