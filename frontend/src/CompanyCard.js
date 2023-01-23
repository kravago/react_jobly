import React from 'react';
import {Link} from 'react-router-dom';

function CompanyCard({company}) {
    return (
        <div style={{border: '2px solid black'}} >
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <Link to={`companies/${company.handle}`}>Learn More</Link>
        </div>
    )
}

export default CompanyCard;