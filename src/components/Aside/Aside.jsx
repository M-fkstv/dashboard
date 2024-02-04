import { Link } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';
import { RiPieChartFill } from 'react-icons/ri';
import { RiLineChartLine } from 'react-icons/ri';
import { RiBarChartFill } from 'react-icons/ri';
import { RiTableAltFill } from 'react-icons/ri';

import './Aside.css';

export const Aside = () => {
  return (
    <div className='aside '>
      <nav className='nav'>
        <Link to={'/'} className='category active'>
          <RiDashboardFill fontSize={16} /> <p>Dashboard</p>
        </Link>
        <Link to={'/pie'} className='category'>
          <RiPieChartFill /> <p>Pie</p>
        </Link>

        <Link to={'/line'} className='category'>
          <RiLineChartLine /> <p>Line</p>
        </Link>
        <Link to={'/bar'} className='category'>
          <RiBarChartFill />
          <p>Bar</p>
        </Link>
        <Link to={'/table'} className='category'>
          <RiTableAltFill />
          <p>Table</p>
        </Link>
        <div className='category'>
          <p>Category5</p>
        </div>
      </nav>
    </div>
  );
};
