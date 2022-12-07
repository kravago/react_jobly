import React from 'react';
import CompanyDetail from './CompanyDetail';

function CompanyCard({company}) {
    return (
        <>
           <CompanyDetail company={company} />
        </>
    )
}

export default CompanyCard;