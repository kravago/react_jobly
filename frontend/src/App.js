import logo from './logo.svg';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import JoblyApi from './api';
import NavBar from './Navbar';

function App() {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const req = await JoblyApi.getAllCompanies();
      setCompanies(req);
    }
    getCompanies();
  }, []);

  useEffect(() => {
    const getJobs = async () => {
      const req = await JoblyApi.getJobs();
      setJobs(req);
    }
    getJobs();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes companies={companies} jobs={jobs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
