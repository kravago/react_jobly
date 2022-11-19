import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import JoblyApi from './api';

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const req = await JoblyApi.getAllCompanies();
      setCompanies(req);
    }
    getCompanies();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes companies={companies} />
      </BrowserRouter>
    </div>
  );
}

export default App;
