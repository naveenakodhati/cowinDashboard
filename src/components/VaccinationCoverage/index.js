// Write your code here
import {BarChart, Bar, Legend, XAxis, YAxis} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverage} = props
  console.log(vaccinationCoverage)

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <BarChart
      width={900}
      height={500}
      data={vaccinationCoverage}
      margin={{
        top: 5,
        align: 'center',
      }}
    >
      <XAxis
        dataKey="vaccineDate"
        tick={{
          stroke: 'gray',
          strokeWidth: 1,
          fontSize: 15,
          fontFamily: 'Roboto',
        }}
      />
      <YAxis
        tickFormatter={dataFormatter}
        tick={{
          stroke: 'gray',
          strokeWidth: 1,
          fontSize: 15,
          fontFamily: 'Roboto',
        }}
      />
      <Legend
        wrapperStyle={{
          padding: 30,
        }}
      />
      <Bar
        dataKey="dose1"
        radius={[10, 10, 0, 0]}
        name="Dose 1"
        fill="#5a8dee"
        barSize="20%"
      />
      <Bar
        radius={[10, 10, 0, 0]}
        dataKey="dose2"
        name="Dose 2"
        fill="#f54394"
        barSize="20%"
      />
    </BarChart>
  )
}

export default VaccinationCoverage
