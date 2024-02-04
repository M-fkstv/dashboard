import { PieComponent } from '../components/PieComponent/PieComponent';

export const PiePage = () => {
  return (
    <div
      style={{
        paddingBlock: '1rem',
        gridArea: '1 /3 /1 /13',
        borderRadius: '16px',
        backgroundColor: '#02356b',
      }}
    >
      <PieComponent r1={80} r2={100} />
    </div>
  );
};
