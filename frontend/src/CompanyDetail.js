import React from 'react';

function CompanyDetail({company}) {
    return (
        <>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
        </>
    )
}

export default CompanyDetail;