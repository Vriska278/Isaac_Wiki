import {Navigate, Route, Routes} from 'react-router-dom';
import BossList from './components/BossList';
import Navbar from './components/Navbar';
import BossDetails from './components/BossDetails';
import AngelDevilDeals from './components/AngelDevilDeals'

function App() {
  return (
    <>
    <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to='/bosses' />} />
          <Route path='/bosses' element={<BossList />} />
          <Route path='/bosses/:id' element={<BossDetails />} />
          <Route path='/deals' element={<AngelDevilDeals />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
