// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <PieChart width={1000} height={300}>
      <Pie
        data={vaccinationByGender}
        dataKey="count"
        cx="50%"
        cy="70%"
        startAngle={180}
        endAngle={0}
        innerRadius="50%"
        outerRadius="80%"
      >
        <Cell name="Male" fill="#f54394" />
        <Cell name="Female" fill="#5a8dee" />
        <Cell name="Others" fill="#2cc6c6" />
      </Pie>
      <Legend layout="horizontal" align="center" iconType="circle" />
    </PieChart>
  )
}

export default VaccinationByGender
