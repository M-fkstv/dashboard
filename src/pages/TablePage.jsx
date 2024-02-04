import Table from '../components/Table/Table';

export const TablePage = () => {
  return (
    <div
      style={{
        paddingBlock: '1rem',
        gridArea: '1 /3 /1 /13',
        borderRadius: '16px',
        backgroundColor: '#02356b',
        overflow: 'auto',
      }}
    >
      <Table />
    </div>
  );
};
