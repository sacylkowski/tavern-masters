import React from 'react';


const Login = () => {
  return (
    <main className="">
      <div className="">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form 
            // onSubmit={handleFormSubmit}
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

            {
            // error && 
            <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
