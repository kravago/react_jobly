import React, {useEffect, useState} from 'react';
import SearchForm from './SearchForm';
import JoblyApi from './api';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const req = await JoblyApi.getAllCompanies();
      setCompanies(req);
    }
    getCompanies();
  }, []);

  const updateCompanies = (filteredCompanies) => {
    setCompanies([...filteredCompanies]);
  }

  return (
    <>
      <SearchForm updateCompanies={updateCompanies}/>
      <ul>
        {companies.map(company => (
          <li>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CompanyList;