import { Search } from '../Search';
import { User } from '../User/User';
import './Header.css';

export const Header = () => {
  return (
    <div className='header container'>
      <div className='logo'>LOGO</div>
      <Search />
      <User />
    </div>
  );
};
