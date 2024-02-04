import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

export const BarComponent = () => {
  const barData = [
    {
      name: ' A',
      data: 4000,
    },
    {
      name: ' B',
      data: 3000,
    },
    {
      name: ' C',
      data: 2000,
    },
    {
      name: ' D',
      data: 2780,
    },
    {
      name: ' E',
      data: 1890,
    },
    {
      name: ' F',
      data: 2390,
    },
    {
      name: ' G',
      data: 3490,
    },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={barData}>
        <XAxis dataKey='name' />
        <Bar
          dataKey='data'
          fill='#6b65d9'
          radius={[4, 4, 0, 0]}
          activeBar={false}
          barSize={40}
        />
        <Tooltip cursor={{ fill: 'rgb(2 53 107 / 20%)' }} />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};
