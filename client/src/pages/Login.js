import React, { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

import "./login.css";
// import Auth from '../utils/auth';


const Login = (props) => {
//   const [formState, setFormState] = useState({ username: "", password: "" });
//   const [login, { error }] = useMutation(LOGIN_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await login({
//         variables: { ...formState },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setFormState({
//       username: "",
//       password: "",
//     });
//   };

  return (
    <main className="main">
      <div className="loginstyle">
        <div className="card">
          <h4 className="card-header title">Login</h4>
          <div className="card-body">
            <form className="inputs"
            //  onSubmit={handleFormSubmit}
            >
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                // value={formState.username}
                // onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                // value={formState.password}
                // onChange={handleChange}
              />
              <button className="" type="submit">
                Submit
              </button>
            </form>

            {/* {error &&  */}
            <div>Login failed</div>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
