import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import JoblyApi from './api';

function Company() {
  const {handle} = useParams();
  const [company, setCompany] = useState('');
  const [jobs, setJobs] = useState('');
  console.log("jobs", jobs);

  useEffect(function setCompanyInfo() {
    async function fetchCompanyInfo(handle) {
      const company_req = await JoblyApi.getCompany(handle);
      setCompany(company_req);
      setJobs(company_req.jobs);
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
        <h1>{company.name}</h1>
        <p>{company.description}</p>
      <div>
        {jobs? jobs.map(job => (
          <div>
            <h1>Title: {job.title}</h1>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
          </div>
        )): <>Loading</>}
      </div>
      </>
  )
}

export default Company;