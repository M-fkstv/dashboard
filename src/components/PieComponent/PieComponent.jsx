import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export const PieComponent = ({ r1, r2 }) => {
  const data = [
    { name: 'Price', value: 200 },
    { name: 'Sale', value: 50 },
  ];

  const col = ['#6b65d9', '#00C49F'];
  return (
    <ResponsiveContainer>
      <PieChart width={100} height={100}>
        <Tooltip />
        <Legend />
        <Pie
          data={data}
          cx={'auto'}
          cy={'auto'}
          innerRadius={r1}
          outerRadius={r2}
          fill='#8884d8'
          paddingAngle={0}
          dataKey='value'
          startAngle={90}
          endAngle={-270}
          stroke='none'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={col[index % col.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
