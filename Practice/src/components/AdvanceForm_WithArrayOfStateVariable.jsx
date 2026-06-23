//Advanced form Designing with array of State Variable
//under single state

// Add the following fields to the exisiting form.
// Address, state,pinCode, Phone,email, password & confirm Password

import React, { useState } from 'react'

const AdvanceForm_WithArrayOfStateVariable = () => {
  const [isSubmitted,setSubmit]=useState(false);
  const[form,setForm]=useState({
    "fname":"",
    "lname":"",
    "gender":"",
    "city":"",
    "address":"",
    "state":"",
    "pincode":'',
    "phone":"",
    "email":"",
    "password":"",
    "confirmPassword":""
  })
  
  const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    console.log("name",name);
    console.log("value",value);
    setForm({...form,[name]:value})
    setSubmit(false);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("Form submitted");
    setSubmit(true);
    console.log(form);
  }

  return (
    
      <div className="container">
        <form onSubmit={handleSubmit}>
          <header>
            <h1>SIGN UP</h1>
          </header>
          <div className="form-group">
            <div className="row">
              <div className="col">FirstName:
                <input type="text" name='fname'onChange={handleChange} required className='form-control'/>
              </div>
              <div className="col">LastName:
                <input type="text" name='lname' onChange={handleChange} required className='form-control'/>
              </div>
            </div>
           </div>
            <div className='form-group'>
              Gender:
              <input type="radio" onChange={handleChange} value="Female" name='gender' />Female
              <input type="radio" onChange={handleChange} value="Male" name='gender' />Male
              <input type="radio" onChange={handleChange} value="Other" name='gender' />Other
            </div>
            <div className="form-group">
              City:
              <select name="city" onChange={handleChange} className='form-control' required>
                <option value="">--Choose City</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            <div className="form-group">
              Address:
              <input type="text" name='address' onChange={handleChange} className='form-control' />
            </div>
            <div className="form-group">
              State:
              <input type="text" name='state' onChange={handleChange} className='form-control' />
            </div>
            <div className="form-group">
              Pincode:
              <input type="number" name='pincode' onChange={handleChange} className='form-control' />
            </div>
            <div className="form-group">
              Phone:
              <input type="number" name='phone' onChange={handleChange} className='form-control' />
            </div>
            <div className="form-group">
              Email:
              <input type="email" name='email' onChange={handleChange} className='form-control' />
            </div>
            <div className="form-group">
              Password:
              <input type="password" name='password' onChange={handleChange} className='form-control' />
            </div>
            <div className="form-group">
              Confirm Password:
              <input type="password" name='confirmPassword' onChange={handleChange} className='form-control' />
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          
        </form>
        {isSubmitted && (<table className='table table-hover'>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Gender:</th>
              <th>City:</th>
              <th>Address:</th>
              <th>State:</th>
              <th>Pincode:</th>
              <th>Phone:</th>
              <th>Email:</th>
              <th>Password:</th>
              {/* <th>Confirm Password:</th> */}
            </tr>
            
          </thead>
          <tbody>
            <tr>
              <td>{form.fname} {form.lname}</td>
              <td>{form.gender}</td>
              <td>{form.city}</td>
              <td>{form.address}</td>
              <td>{form.state}</td>
              <td>{form.pincode}</td>
              <td>{form.phone}</td>
              <td>{form.email}</td>
              <td>{form.password}</td>
            </tr>
          </tbody>
        </table>)}
      </div>
    
  )
}

export default AdvanceForm_WithArrayOfStateVariable
