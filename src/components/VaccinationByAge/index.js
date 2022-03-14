// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <PieChart width={1000} height={300}>
      <Pie
        data={vaccinationByAge}
        dataKey="count"
        cx="50%"
        cy="60%"
        startAngle={0}
        endAngle={360}
      >
        <Cell name="18-44" fill="#2d87bb" />
        <Cell name="44-60" fill="#a3df9f" />
        <Cell name="Above 60" fill=" #64c2a6" />
      </Pie>
      <Legend
        iconType="circle"
        wrapperStyle={{
          padding: 30,
          fontFamily: 'Roboto',
          fontSize: 17,
        }}
      />
    </PieChart>
  )
}

export default VaccinationByAge
