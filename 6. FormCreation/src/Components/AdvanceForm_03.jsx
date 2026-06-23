//Advanced form Designing with array of State Variable under single state

import React, { useState } from 'react'

const AdvanceForm_03 = () => {
  //We create a state variable isSubmitted (initialized to false) to track whether the form has been successfully submitted. 'setSubmit' is the updater function.
  const [isSubmitted,setSubmit] = useState(false); 
  //We have a single state object form with 4 fields — fname, lname, gender, and city..setForm lets us update all these at once.
  const [form,setForm] = useState({
    "fname":"",
    "lname":"",
    "gender":"",
    "city": ""
  });
  
  const handleChange = (event)=>{ //handleChange is a function that will be called each time a form field's value is changed.
      //const name = event.target.name;
      //const value= event.target.value;
      const {name,value} = event.target;//Destructuring the event.target to get name and value directly.
      console.log("name",name);//name of the field that is being changed
      console.log("value",value);//value of the field that is being changed
     //[key]:value
      setForm({...form,[name]:value});//Using the spread operator to copy the existing form state and then updating the specific field that has changed.
      setSubmit(false);//Resetting the isSubmitted state to false whenever a field is changed, so that the table does not show until the form is submitted.
  }
  
  //handleSubmit is a function that will be called when the form is submitted.
  const handleSubmit = (event)=>{
       event.preventDefault();//preventDefault() stops the page from reloading upon form submission.
       console.log("Form submitted");//Prints a message to console.
       setSubmit(true);//Sets isSubmitted to true, which signals we should show the table with submitted data.
       console.log(form);//Prints form's current state to console.
  }
  return ( //The JSX starts here
    <div className='container'>
      {/* The form element has an onSubmit event handler that calls handleSubmit when the form is submitted. */}
      <form onSubmit={handleSubmit}>
          <header className="modal-header">
            <h4>SignUP:</h4>
          </header>
          {/* Here we have two input fields side by side — first name and last name — both wired to handleChange.*/ }
          <div className="form-group">
           <div className="row">
              <div className="col">FirstName : <input type="text" name='fname' className='form-control' onChange={handleChange} required /></div>
              <div className="col">LastName : <input type="text" name='lname' className='form-control' onChange={handleChange} required/></div>
           </div>
          </div>


          {/* Here we have two radio button options for gender.Both use handleChange. */}
          <div>
              Gender : <input type="radio" name="gender" required value="Male" onChange={handleChange} />Male
                       <input type="radio" name="gender" required value="Female" onChange={handleChange} />Female
          </div>

          {/* The select dropdown for city, which also uses handleChange. */}
          <div className='form-group'>
              <select required name="city" onChange={handleChange} className='form-control'>
                <option value="">---Choose a City---</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
              </select>
          </div>
          <div className="form-group">
            <button className='btn btn-sm btn-outline-primary'>Submit</button>
          </div>
          </form>

        {/* If isSubmitted is true, we conditionally render a table with the filled form's data. */}
          {isSubmitted && (<table className='table table-hover'>
                     <thead>
                     <tr>
                      <th>Name:</th>
                      <th>City:</th>
                      <th>Gender:</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                      <td>{form.fname} {form.lname}</td>
                      <td>{form.city}</td>
                      <td>{form.gender}</td>
                     </tr>
                     </tbody>
            </table>)}
    </div>
  )
}

export default  AdvanceForm_03