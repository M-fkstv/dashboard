import './Content.css';

import { BarComponent } from '../BarComponent/BarComponent';
import { LineComponent } from '../LineComponent/LineComponent';
import { PieComponent } from '../PieComponent/PieComponent';
import Table from '../Table/Table';
import { Link } from 'react-router-dom';

export const Content = () => {
  return (
    <div className='content'>
      <Link to={'/line'} className='item1'>
        <LineComponent />
      </Link>
      <Link to={'/pie'} className='discount'>
        <PieComponent r1={80} r2={100} />
      </Link>
      <Link to={'/bar'} className='item2'>
        <BarComponent />
      </Link>
      <div className='item4'>Some more information</div>
      <Link to={'/table'} className='item5'>
        <Table />
      </Link>
    </div>
  );
};
