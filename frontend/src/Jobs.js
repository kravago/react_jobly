import React from 'react';

function Jobs({ jobs }) {
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