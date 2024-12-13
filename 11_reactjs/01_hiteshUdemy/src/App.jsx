import { useState } from 'react'

function App() {
  const [salary, setSalary] = useState(100000);
  const increm = ()=>{
    setSalary(salary + 10000);
  }
  const decrem = () => {
    setSalary(salary - 10000);
  };
  return (
    <>
      <h1 className="bg-black text-red-100">Your salary is {salary}</h1>
      <button onClick={increm}>Increment +10000</button>
      <button onClick={decrem}>Decreement -10000</button>
    </>
  );
}

export default App
