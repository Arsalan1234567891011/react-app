import React, { useState } from 'react';
import 'mod-react-components/dist/index.css';
import { Form, Input } from 'mod-react-components';

function InformatioForm() {
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  const [value, setValue] = useState(defaultValues);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setShowModal(true);
    console.log("Submitted Data:", value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Step title="Personal Information">
          <Input type="text" name="firstName" value={value.firstName} onChange={handleInputChange} data-required="firstName" placeholder="First Name" />
          <Input type="text" name="lastName" value={value.lastName} onChange={handleInputChange} data-required="lastName" placeholder="Last Name" />
        </Form.Step>

        <Form.Step title="Contact Information">
          <Input type="email" name="email" value={value.email} onChange={handleInputChange} data-required="email" placeholder="Email Address" />
          <Input type="text" name="phone" value={value.phone} onChange={handleInputChange} data-required="phone" placeholder="Phone Number" />
        </Form.Step>
      </Form>

      {/* Example modal */}
      {showModal && (
        <div style={{ padding: 20, background: "#eee", marginTop: 20 }}>
          <h3>Form Submitted</h3>
          <p>First Name: {value.firstName}</p>
          <p>Last Name: {value.lastName}</p>
          <p>Email: {value.email}</p>
          <p>Phone: {value.phone}</p>
        </div>
      )}
    </>
  );
}

export default InformatioForm;
