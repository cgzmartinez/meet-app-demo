import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const EventGenre = ({ events, filteredEvents }) => {
  const [data, setData] = useState([])
  const colors = ['#75DDDD', '#84C7D0', '#9297C4', '#9368B7', '#AA3E98']

  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS']
      const data = genres.map((genre) => {
        const value = filteredEvents.filter((event) =>
          event.summary.split(' ').includes(genre)
        ).length
        return { name: genre, value }
      })
      return data
    }
    setData(getData) // Update data directly within useEffect
  }, [filteredEvents]) // Update data whenever filteredEvents changes

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={50} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenre
