import React, { useRef } from 'react'

const Uncontrol = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.current.value); 

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"/>
      
        <label> Firstname </label>
        <input type="name" />
      
        <label> email </label>
        <input type="email" />
      
        <label> phone </label>
        <input type="phone" />
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default Uncontrol;
