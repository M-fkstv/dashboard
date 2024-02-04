import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export const LineComponent = () => {
  const data = [
    {
      name: 'Jan',
      price: 4000,
    },
    {
      name: 'Feb',
      price: 2000,
    },
    {
      name: 'March',
      price: 3000,
    },
    {
      name: 'April',
      price: 1000,
    },
    {
      name: 'May',
      price: 2000,
    },
    {
      name: 'June',
      price: 1000,
    },
    {
      name: 'July',
      price: 3000,
    },
    {
      name: 'Aug',
      price: 2300,
    },
    {
      name: 'Sept',
      price: 3400,
    },
    {
      name: 'Oct',
      price: 3300,
    },
    {
      name: 'Nov',
      price: 5000,
    },
    {
      name: 'Dec',
      price: 6000,
    },
  ];
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart width={350} height={300} data={data}>
        <CartesianGrid strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='price'
          stroke='#8884d8'
          activeDot={{ r: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
