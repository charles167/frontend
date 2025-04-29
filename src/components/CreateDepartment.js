import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_DEPARTMENT = gql`
  mutation CreateDepartment($name: String!, $subDepartments: [SubDepartmentInput]) {
    createDepartment(input: { name: $name, subDepartments: $subDepartments }) {
      id
      name
    }
  }
`;

function CreateDepartment() {
  const [name, setName] = useState('');
  const [subDepartments, setSubDepartments] = useState([]);
  const [createDepartment] = useMutation(CREATE_DEPARTMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDepartment({
      variables: { name, subDepartments },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Department Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Create Department</button>
    </form>
  );
}

export default CreateDepartment;