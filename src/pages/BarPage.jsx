import { BarComponent } from '../components/BarComponent/BarComponent';

export const BarPage = () => {
  return (
    <div
      style={{
        paddingBlock: '1rem',
        gridArea: '1 /3 /1 /13',
        borderRadius: '16px',
        backgroundColor: '#02356b',
      }}
    >
      <BarComponent />
    </div>
  );
};
