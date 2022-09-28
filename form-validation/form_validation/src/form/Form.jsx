import React, { useState } from "react";
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px",
    margin: "0 auto",
  },
  input: {
    padding: "7px",
  },
  button: {
    padding: "7px",
  },
};

export default function Form() {
  const initialFormValues = {
    username: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validateForm(formValues));
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function validateForm(values) {
    let error = {};
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.username) {
      error.username = "username is required";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!values.email.match(mailformat)) {
      error.email = "invalid email";
    }
    if (!values.password) {
      error.password = "password is required";
    } else if (values.password.length < 6) {
      error.password = "password should be greater than 6 characters";
    }

    return error;
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="username"
          value={formValues.username}
          onChange={handleChange}
          name="username"
          style={styles.input}
        />
        {errors.username?.length ? <p>{errors.username}</p> : ""}
        <input
          type="text"
          placeholder="email"
          value={formValues.email}
          onChange={handleChange}
          name="email"
          style={styles.input}
        />
        {errors.email?.length ? <p>{errors.email}</p> : ""}
        <input
          type="password"
          placeholder="password"
          value={formValues.password}
          onChange={handleChange}
          name="password"
          style={styles.input}
        />
        {errors.password?.length ? <p>{errors.password}</p> : ""}
        <button type="sbumit" style={styles.button}>
          sumbit
        </button>
      </form>
    </>
  );
}
