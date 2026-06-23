import React, { useState } from 'react'

const Basic_Form = () => {
    const [name,setName]=useState("");
    const[gender,setGender]=useState("");
    const[city,setCity]=useState("");

    const handleName=(event)=>{
        console.log(event.target.value)
        setName(event.target.value);
    }
    const handleGender=(event)=>{
        console.log(event.target.value)
        setGender(event.target.value);
    }
    const handleCity=(event)=>{
        console.log(event.target.value)
        setCity(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Hello ${name}`)
        console.log("Form Submitted");
        document.getElementById("d1").innerHTML=`Hello ${name},you are a ${gender} from ${city}`;
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <header>
            <h1>Sign up here</h1>
        </header>
        <div className="form-group">Name: <input type="text" placeholder='Enter your name:' name='f1' id='f1' value={name} onChange={handleName} /></div>

        <div>Gender :
            <input type="radio" onChange={handleGender} name='g1' id='g1' value="Male" />Male
            <input type="radio" onChange={handleGender} name='g1' id='g2' value="Female" />Female
        </div>
        <div>City:
            <select name="c1" id="c1" value={city} onChange={handleCity}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
            </select>
        </div>
        <div><button type='submit'>Submit</button></div>
        <div id='d1'></div>
      </form>
    </div>
  )
}

export default Basic_Form
