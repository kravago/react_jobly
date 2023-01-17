import React, {useContext, useEffect, useState} from 'react';
import userContext from './userContext';
// import JoblyApi from './api'

function JobCard({job}) {
  const {appliedIds, checkApplied, applyToJobId} = useContext(userContext);
  const [appliedState, setAppliedState] = useState(false);
  
  useEffect(() => {
    setAppliedState(checkApplied(job.id))
  }, [appliedIds]);

  const handleApply = async () => {
    if (checkApplied(job.id)) {
      return;
    } else {
      applyToJobId(job.id);
      setAppliedState(true);
    }
  }
  return (
    <>
      <h1>{job.title}</h1>
      <p>{job.salary}</p>   
      <button onClick={handleApply}>{appliedState? "Applied": "Apply"}</button>
    </>
  );
}

export default JobCard;