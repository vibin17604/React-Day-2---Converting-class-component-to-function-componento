import React from 'react'
let count = 0;
function Countchange()
{
    count++;
    alert("You clicked :"+count)
}
function Count() {
  return (
    <div>
        <button onClick={Countchange}>Click</button>
    </div>
  )
}

export default Count