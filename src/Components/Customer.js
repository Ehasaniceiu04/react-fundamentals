import React from "react";

function Customer() {
    function handleSubmitClick(){
       alert('customer data submitting into backend server ....')
    }
  return (
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
       
      </form>
  );
}

export default Customer;
