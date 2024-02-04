import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { BarPage } from '../pages/BarPage';
import { Dashboard } from '../pages/Dashboard';
import { LinePage } from '../pages/LinePage';
import { PiePage } from '../pages/PiePage';
import { App } from './App/App';
import { TablePage } from '../pages/TablePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='line' element={<LinePage />}></Route>
      <Route path='bar' element={<BarPage />}></Route>
      <Route path='pie' element={<PiePage />}></Route>
      <Route path='table' element={<TablePage />}></Route>
    </Route>,
  ),
);
