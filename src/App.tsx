import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import FavoritPages from './pages/FavoritsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritPages />} />
      </Routes>
    </>
  );
}

export default App;
