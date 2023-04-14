import React from 'react';
import { useMutation, gql } from '@apollo/react-hooks';

const CUSTOMERS_QUERY = gql`
`;

const DELETE_CUSTOMER_MUTATION = gql`
`;

function DeleteCustomerForm() {
  let idInput;
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION, {
  });

  return (
    <div>
      <h2>Delete Customer</h2>
      {/* include form for deletion */}
    </div>
  );
}

export default DeleteCustomerForm;
