import { Aside } from '../Aside/Aside';
import { Header } from '../Header/Header';
import { Sprite } from '../Sprite/Sprite';

import { Outlet } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <>
      <Sprite />
      <Header />
      <main className='main container'>
        <Aside />

        <Outlet />
      </main>
    </>
  );
};

export default App;
