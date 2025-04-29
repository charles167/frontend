import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_DEPARTMENTS = gql`
  query GetDepartments {
    getDepartments {
      id
      name
      subDepartments {
        id
        name
      }
    }
  }
`;

function DepartmentList() {
  const { loading, error, data } = useQuery(GET_DEPARTMENTS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.getDepartments.map(department => (
        <div key={department.id}>
          <h2>{department.name}</h2>
          <ul>
            {department.subDepartments.map(sub => (
              <li key={sub.id}>{sub.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DepartmentList;