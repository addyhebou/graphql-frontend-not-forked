import React from 'react';
import CustomerList from './components/CustomerList';
import AddCustomerForm from './components/AddCustomerForm';
// import UpdateCustomerForm from './components/UpdateCustomerForm';
// import DeleteCustomerForm from './components/DeleteCustomerForm';

function App() {
  return (
    <div>
      <h1>Customers</h1>
      <CustomerList />
      <AddCustomerForm />
      {/* <UpdateCustomerForm /> */}
      {/* <DeleteCustomerForm /> */}
    </div>
  );
}

export default App;
