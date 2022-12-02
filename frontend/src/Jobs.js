import React, {useEffect, useState} from 'react';
import JoblyApi from './api';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const req = await JoblyApi.getJobs();
      setJobs(req);
    }
    getJobs();
  }, []);

    return (
      <>
        <ul>
          {jobs.map(job => (
            <li>
              <h1>{job.title}</h1>
              <p>{job.salary}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }
  
  export default Jobs;