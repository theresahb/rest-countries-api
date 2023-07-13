import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './css/style.css'
import AllCountries from './components/AllCountries/AllCountries';
import CountriesInfo from './components/CountriesInfo/CountriesInfo';

function App() {
  return (
    <div className="App flex">
      <Header  />
      <Routes>
        <Route path='/' element={<AllCountries />} />
        <Route path={'/:index'} element={<CountriesInfo  />} />
      </Routes>
    </div>
  );
}

export default App;
