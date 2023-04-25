import {Navigate, Route, Routes} from 'react-router-dom';
import BossList from './components/BossList';
import Navbar from './components/Navbar';
import BossDetails from './components/BossDetails';

function App() {
  return (
    <>
    <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to='/bosses' />} />
          <Route path='/bosses' element={<BossList />} />
          <Route path='/bosses/:id' element={<BossDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
