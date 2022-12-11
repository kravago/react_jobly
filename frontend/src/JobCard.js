import React from 'react';

function JobCard({job}) {
    return (
        <>
            <h1>{job.title}</h1>
            <p>{job.salary}</p>    
        </>
    );
}

export default JobCard;