//this is form validation only for name,email,password
import React, { useState } from 'react'

const CompleteFormValidation_04 = () => {
  const [isSubmitted,setSubmit]=useState(false);
  const patterns={
    'namePattern':/^[A-Za-z]{3,15}$/,
    'phonePattern':/^[6-9]\d{9}$/,
    'emailPattern':/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  }
  //create a state variable for handling error
  const [errors,setErrors]=useState({
    'fname':"",
    "lname":"",
    "gender":"",
    "city":"",
    "phone":"",
    "email":"",
  })
  //create a state variable for handling form data
  const [form,setForm]=useState({
    'fname':"",
    "lname":"",
    "gender":"",
    "city":"",
    "phone":"",
    "email":"",
  })
  //handleChange function will be used to handle the change in input fields
  const handleChange=(event)=>{
    const {name,value}=event.target;
    console.log("name",name)
    console.log("value",value);
    setForm({...form,[name]:value})
    setSubmit(false);
  }
  //for validation purpose we have created following function
  const validate=()=>{
    let isValid=true;
    let newErrors={
    'fname':"",
    "lname":"",
    "gender":"",
    "city":"",
    "phone":"",
    "email":"",
    }

    //validation for first name
    if(form.fname==""){
      newErrors.fname="FirstName is required"
      isValid=false;
    }
    else if(!patterns.namePattern.test(form.fname)){
      newErrors.fname="FirstName should be 3 to 15 characters long and should not contain any special characters or numbers"
      isValid=false;
    }
    //validation for last name
    if(form.lname==""){
      newErrors.lname="LastName is required";
      isValid=false;
    }
    else if(!patterns.namePattern.test(form.lname)){
      newErrors.lname="LastName should be 3 to 15 characters long and should not contain any special characters or numbers";
      isValid=false;
    }

    //validation for gender
    if(form.gender==""){
      newErrors.gender="Gender is required";
      isValid=false
    }

    //validation for city
    if(form.city==""){
      newErrors.city="city is required";
      isValid=false;
    }

    //validation for phone number
    if(form.phone==""){
      newErrors.phone="Phone number is required";
      isValid=false;
    }
    else if(!patterns.phonePattern.test(form.phone)){
      newErrors.phone="Invalid Indian mobile number";
      isValid=false;
    }

    //validation for email
    if(form.email==""){
      newErrors.email="Email is required";
      isValid=false;
    }
    else if(!patterns.emailPattern.test(form.email)){
      newErrors.email="Invalid email format";
      isValid=false;
    }

    //now setting up all errors into the state variable
    setErrors(newErrors);
    //returning isValid at the end of the function
    return isValid;
  }
  //handleSubmit function will be used to handle the form submission
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(validate()){
      console.log("Form submitted");
      setSubmit(true);
      console.log(form)
    }
    else{
      console.log("Validation working", errors)
    }
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} noValidate>
        <header>
          <h1>SIGN Up using validation</h1>
        </header>
        
        <div className="form-group">
          <div className="row">
            <div className="col">
              FirstName:
              <input type="text" name='fname' onChange={handleChange} required className={`form-control ${errors.fname?'is-invalid':null}`} />
              {errors.fname && <p className='text-danger'>{errors.fname}</p>}
            </div>
            <div className="col">LastName:
                <input type="text" name='lname' onChange={handleChange} required className={`form-control ${errors.lname?'is-invalid':null}`} />
                {errors.lname && <p className='text-danger'>{errors.lname}</p>}
            </div>
          </div>
        </div>
        
        <div className='form-group'>Gender:
          <input type="radio" onChange={handleChange} name='gender' required value="Male" />Male
          <input type="radio" onChange={handleChange} name='gender' required value="Female" />Female
          {errors.gender && <p className='text-danger'>{errors.gender}</p>}
        </div>
        <div className="form-group">
          Phone:
          <input type="number" name='phone' onChange={handleChange} required className={`form-control ${errors.phone?'is-invalid':null}`} />
          {errors.phone && <p className='text-danger'>{errors.phone}</p>}
        </div>
          <div className="form-group">
          Email:
          <input type="email" name='email' onChange={handleChange} required className={`form-control ${errors.email?'is-invalid':null}`} />
          {errors.email && <p className='text-danger'>{errors.email}</p>}
        </div>

        <div className="form-group">
          City:
          <select name="city" onChange={handleChange} required>
            <option value="">--Choose city</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          {errors.city && <p className='text-danger'>{errors.city}</p>}
        </div>

        <div className='form-group'>
          <button type='submit'>Submit</button>
        </div>

      </form>

      {isSubmitted && (<table className='table table-hover'>
        <thead>
          <tr>
            <th>Name:</th>
            <th>City</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.fname}{form.lname}</td>
            <td>{form.city}</td>
            <td>{form.gender}</td>
            <td>{form.phone}</td>
            <td>{form.email}</td>
          </tr>
        </tbody>

      </table>)}
      
    </div>
  )
}

export default CompleteFormValidation_04
