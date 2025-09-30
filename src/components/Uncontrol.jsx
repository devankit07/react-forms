import React, { useRef } from 'react'

const Uncontrol = () => {
  const refObject = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refObject.current.value); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refObject} />
        <label> Firstname </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default Uncontrol;
