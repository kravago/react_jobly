import React, {useEffect, useState} from 'react';
import JoblyApi from './api';
import JobCard from './JobCard';

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
        {jobs.map(job => (
          <JobCard job={job}/>
        ))}
      </>
    )
  }
  
  export default Jobs;