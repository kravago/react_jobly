import React from 'react';

function CompanyList({ companies }) {
  return (
    <>
      <ul>
        {companies.map(company => (
          <li>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CompanyList;