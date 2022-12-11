import React from 'react';

function CompanyCard({company}) {
    return (
        <div style={{border: '2px solid black'}} >
            <h1>{company.name}</h1>
            <p>{company.description}</p>
        </div>
    )
}

export default CompanyCard;