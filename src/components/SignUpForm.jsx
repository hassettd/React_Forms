import { useState } from "react";

import React from "react";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const submit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:3000/api/register", {
    //     method: "Post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: form.email,
    //       password: form.password,
    //     }),
    //   });
    //   const data = await response.json();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

// export default function SignUpForm({token, setToken}) {
//     const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [error, setError] = useState(null);

//     async function handleSubmit(event) {
//         event.preventDefault();

//         try {
//           const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
// const result = await response.json();
// console.log(result);
//         } catch (error) {
//           setError(error.message);
//         }
//       }

//     return (
//       <>

//         <h2>Sign Up!</h2>
//         {error && <p>{error}</p>}
// <form onSubmit={handleSubmit}>

//   <label>
//     Username:
//     <input value={username} onChange={(e) => setUsername(e.target.value)} />
//   </label>
//   <label>
//     Password:
//     <input
//     type="password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     />
//   </label>
//   <button>Submit</button>

// </form>

// </>
//     );

//   }
