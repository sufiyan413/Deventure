
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './Components/Header/Header';
import Subheader from './Components/SubHeader/Subheader';
import Burgers from './Pages/Burgers';

function App() {
  return (
    <>
      <Header />
      <Subheader />
      <Routes>
        <Route path="/37" element={<Burgers />} />
      </Routes>
    </>
  );
}

export default App;
