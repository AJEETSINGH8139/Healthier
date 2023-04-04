import React, {useState} from 'react'
import { Link } from 'react-router-dom';
const Input = ({callback}) => {
    const [age, setAge] = useState(0);

    return (
        
        <>
        <form className='input-age'>
          <h1>Enter Detail for Query...</h1>
          <input type='text' placeholder='Full Name' />
          <input type='number' value={age} placeholder='Age' onChange={(e) => setAge(e.target.value)}/>
          <input type='Text' placeholder='Gender :- Male / Female / Transgender' />
          <input type='text' placeholder='Address' />
          <Link type='submit' className='buttons' to="/home" onClick={() => callback(age)}>
          Submit
          </Link>
        </form>
        </>
    )
}

export default Input
