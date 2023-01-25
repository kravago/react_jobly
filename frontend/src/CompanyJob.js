import React, {useEffect, useState, useContext} from 'react';
import userContext from './userContext';


function CompanyJob({job, company}) {
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
    <div>
      <h1>Title: {job.title}</h1>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <button onClick={handleApply}>{appliedState? "Applied": "Apply"}</button>
    </div>)
}

export default CompanyJob;