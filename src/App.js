import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import MovieApp from './Movie';

function Person(props){


  return(
    <>
    <h3>Name:{props.name}</h3>
    <h3>Last Name: {props.secondname}</h3>
    <h4>Age:{props.age}</h4>
    </>
  )
}

function App() {

  // const [count,setCount] = useState(0);
  // const name = 'John';

  // useEffect(()=>{
  //   setCount(100)
  // },[]);

 
  return (
    <div className="app">
      {/* <h3>About Us</h3>
      {
        name?(<><h1>{""}</h1></>):(<><h3>There is no name</h3></>)
      } */}
      {/* <Person name={'Peter'}></Person>
      <Person name={'Mary'} secondname={'Johnson'}></Person>
      <Person name={'Harry'} age={90}></Person>
      <button onClick={()=>setCount((prevCount)=> prevCount -1)}>-</button>
      <br></br>
      <p>{count}</p>
      <button onClick={()=>setCount((prevCount)=> prevCount +1)}>+</button>

      <form className='form'>
        <label htmlFor='Name'>Name</label><br></br>
        <input type='text'></input>
        <p>{3+5}</p>
      </form> */}

     <MovieApp></MovieApp>
    </div>
  );
}

export default App;
