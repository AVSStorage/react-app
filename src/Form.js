import React, { useState } from 'react';

function Form() {
    
  const [value, setValue] = useState('');
  return (
    <div>
      <p>You are typing {value}</p>
      <input type="text" onChange={(evt) => setValue(evt.target.value)} value={value}/>
      <input type="text" onChange={(evt) => setValue(evt.target.value)} value={value}/>
    </div>
  );
}

export default Form;
