// Description: A simple form creation component in React that captures user input

// Importing React and useState hook from 'react' library
//We need useState to handle form field values.
import React, { useState } from 'react'

const BasicFormCreation_01 = () => {
  // We have 3 separate states here — name, gender, and city. All start as an empty string.
  const [name,setName]=useState("")
  const [gender,setGender]=useState("")
  const [city,setCity]=useState("")

  const handleName=(event)=>{// This function handles the change in the name input field
    //console.log(event)
    setName(event.target.value);// We update the name state with the value from the input field
  }
  const handleGender=(event)=>{// This function handles the change in gender radio buttons
    console.log(event.target.id)
    setGender(event.target.value);
  }
  const handleCity=(event)=>{// This function handles the change in the city select dropdown
    console.log(event.target.value)
    setCity(event.target.value);
  }
  const handleSubmit=(event)=>{// This function handles the form submission
  event.preventDefault();//handleSubmit prevents the page from reloading with preventDefault.
  alert(`hello ${name}`);//Shows an alert.
  console.log("Form Submitted");
  //document.getElementById("d1") directly accesses the HTML element with the id="d1" in your rendered page,    .innerHTML lets you set or change the content of that element. The backticks ` ` are template literals, which allow you to insert variables directly into a string — in this case, name, gender, and city.
  document.getElementById("d1").innerHTML=`Welcome ${name} your Gender is ${gender} from ${city}`
  }
   return (
    <div className='card p-3 m-3'>
        <form onSubmit={handleSubmit}>
            <header className="modal-header">
                <h4>SIGNUP:</h4>
            </header>
          {/* Name field */}
         <div className='form-group'>Name : <input type="text" name='f1' id='f1' required placeholder='e.g John Doe' className='form-control' value={name}  onChange={handleName}/></div>

         {/* Gender radio button group */}
         <div className='form-group'>Gender : <input type="radio" name="r1" value="Male" onChange={handleGender} id="r1" />Male
                                              <input type="radio" name="r1" value="Female" onChange={handleGender} id="r2" />Female
                                              <input type="radio" name='r1' value="Trans-Gender" onChange={handleGender} id='r3' />Trans
                                              </div>
           {/* City drop-down */}
         <div className='form-group'>
           City : <select required name='c1' id='c1' onChange={handleCity} className='form-control'>
                <option value="">---Choose a City---</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
           </select>
        </div>
         {/* Submit button */}                                    
         <div className='form-group'><button className='btn btn-sm btn-outline-primary' type='submit'>Submit</button></div>
         {/* Display submission message here */}
         <div id='d1'></div>
         </form>  
    </div>
  )
}

export default BasicFormCreation_01
