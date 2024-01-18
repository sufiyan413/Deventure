import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Subheader from './Components/SubHeader/Subheader';
import Burgers from './Pages/Burgers';

function App() {
  return (
    <>
      <Header />
      <Subheader />
      <Routes>
        <Route path="/burgers" element={<Burgers />} />
      </Routes>
    </>
  );
}

export default App;
