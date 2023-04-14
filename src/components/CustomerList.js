import React from 'react';
import { useQuery, gql } from '@apollo/react-hooks';
const CUSTOMERS_QUERY = gql`
  query {
    customers {
      name
      email
      phone
      id
    }
  }
`;

function CustomerList() {
  // define useQuery hook
  const { loading, error, data } = useQuery(CUSTOMERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  return (
    <div>
      <ul>
        {data.customers.map((customer) => (
          <>
            <li>Name: {customer.name}</li>
            <li>Email: {customer.email}</li>
            <li>Phone: {customer.phone}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
