import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  border: solid red 2px;
  margin: 20px;
  padding: 20px;
  align-self: flex-start;
  width: 40%;
  height: auto;
  justify-content: center;
  border-radius: 15px;
  h2 {
    display: flex;
    justify-content: center;
  }
  label {
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: flex-end;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button {
    width: auto;
  }
`;

export default function Form(props) {
  const { values, change, submit, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <StyledForm>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Add User</h2>
        </div>
        <div>
          <label>
            First Name
            <input type="text" name="first_name" value={values.first_name} onChange={onChange} />
          </label>
          <label>
            Last Name
            <input type="text" name="last_name" value={values.last_name} onChange={onChange} />
          </label>

          <label>
            email
            <input type="email" name="email" value={values.email} onChange={onChange} />
          </label>
          <label>
            password
            <input type="password" name="password" value={values.password} onChange={onChange} />
          </label>
        </div>
        <div className="terms">
          <label>
            Agree to terms
            <input type="checkbox" name="terms" checked={values.terms} onChange={onChange} />
          </label>
        </div>
        <button disabled={disabled}>Submit</button>
        <div className="errors">
          {/* validation errors*/}
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </form>
    </StyledForm>
  );
}
