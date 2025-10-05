import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstname") {
      setName(value.toUpperCase()); 
    } else if (name === "password") {
      setPswd(value); 
    }
  };

  return (
    <div>
      <form>
        <input
          name="firstname"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="firstname">First Name</label>
        <br />
        <input
          name="password"
          type="password"
          value={pswd}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password name </label>
      </form>
      <br />
      <p>Name: {name}</p>
      <p>Password: {pswd}</p>
      
      <hr />
    </div>
  );
};

export default App;
