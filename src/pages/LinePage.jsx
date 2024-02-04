import { LineComponent } from '../components/LineComponent/LineComponent';

export const LinePage = () => {
  return (
    <div
      style={{
        paddingBlock: '1rem',
        gridArea: '1 / 3 /1 /13',

        borderRadius: '16px',
        backgroundColor: '#02356b',
      }}
    >
      <LineComponent />
    </div>
  );
};
