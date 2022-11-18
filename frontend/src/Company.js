import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import JoblyApi from './api';

function Company() {
  const {handle} = useParams();
  const [company, setCompany] = useState('');

  useEffect(function setCompanyInfo() {
    async function fetchCompanyInfo(handle) {
      const company_req = await JoblyApi.getCompany(handle);
      setCompany(company_req);
    }
    fetchCompanyInfo(handle);
  }, [handle]);
  const company_details = (
    <>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
    </>
  )

  return (
      <>
       { company === '' ? <h1>Loading</h1>: company_details} 
      </>
  )
}

export default Company;