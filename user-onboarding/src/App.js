import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import User from "./User";

import schema from "./validation/formSchema";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers([...res.data.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const postUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        // console.log(res);
        setUsers([...users, newUser]);
      })
      .catch((err) => console.error(err));

    setFormValues(initialFormValues);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="Container">
      <div className="Form">
        <header>User-Onboarding</header>
        <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors} />
      </div>
      <div className="Users">
        {users.map((user, index) => {
          return <User key={index} details={user} />;
        })}
      </div>
    </div>
  );
}
