import React, { useState } from "react";

function NewCustomer() {
  const [formData, setformData] = useState({ firstName: "", lastName: "",isCustomerConsent:false });

  function handleSubmitChange(event) {
    event.preventDefault();
    alert(
      `Form submitted with firstName: ${formData.firstName}, lastName: ${formData.lastName}`
    );
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setformData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
 function handleConsentChange(event){
  const { name, checked } = event.target;
    setformData((prevFormData) => ({ ...prevFormData, [name]: checked }));
 }
  return (
    <form onSubmit={handleSubmitChange}>
      <h5>New Customer</h5>
      <br></br>
      <div class="mb-3">
        <label for="firstName" class="form-label">
          First Name
        </label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
        ></input>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          name="lastName"
          placeholder="Enter first name"
          value={formData.lastName}
          onChange={handleChange}
        ></input>
      </div>
      <div class="mb-5 form-check">
        <input
          class="form-check-input"
          type="checkbox"
         checked={formData.isCustomerConsent}
          id="isCustomerConsent"
          name="isCustomerConsent"
          onChange={handleConsentChange}
        ></input>
        <label class="form-check-label" for="flexCheckChecked">
        I allow my information to be used for future campaign
        </label>
      </div>
      {formData.isCustomerConsent.toString()}
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewCustomer;
