import React from "react";

function Registration() {
  return (
    <div>
      <form>
        <div>
          <h1>Registration</h1>
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
      </form>
    </div>
  );
}

export default Registration;
