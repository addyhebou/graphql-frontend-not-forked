import React, { useRef, useState } from 'react';
import { useMutation, gql } from '@apollo/react-hooks';

// TODO define query and
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

const ADD_CUSTOMER_MUTATION = gql`
  mutation AddCustomer($name: String!, $email: String!, $phone: String!) {
    addCustomer(name: $name, email: $email, phone: $phone) {
      name
      email
      phone
      id
    }
  }
`;

function AddCustomerForm() {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneInput = useRef(null);
  const [addCustomer] = useMutation(ADD_CUSTOMER_MUTATION, {
    update(cache, { data: { addCustomer } }) {
      const { customers } = cache.readQuery({ query: CUSTOMERS_QUERY });
      cache.writeQuery({
        query: CUSTOMERS_QUERY,
        data: { customers: customers.concat([addCustomer]) },
      });
    },
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    alert('Submitted');
    e.preventDefault();
    addCustomer({
      variables: {
        name: name,
        email: email,
        phone: phone,
      },
    });
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddCustomerForm;
