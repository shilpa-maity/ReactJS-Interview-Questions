// Create a Separate Component named as Form.jsx  which will contains the following fields
// 1)firstName,MiddleName,LastName [not allowed any numbers and white space].
// 2)Age [must be between 18-80 Yrs]
// 3)Phone [must starts with either of 6,7,8,9 and length must be 10]
// 4)Email Address [email id pattern must be checked]
// 5)Add Technical skills [using selection dropdown with multiple keyword min 2 skills has to be selected]
// 6)Password [must contains one lowercase,uppercase,digit,special chars length must be between 8-16].
// 7)Confirm Password [Password & confirm Password should be same]
// 8)Upload Profile pic : [selected file has to be Image ]
// 9)Address in TextArea max 120 chars allowed.
// 10)Submit Button

// Use Bootstrap-4 to make the form Responsive.
// Use useState Hooks of React functional component to achieve the objective
// May use AI tools for finding proper pattern or Regex
// May use AI tools for better designing and make the Page SEO Friendly and Mobile compatible.

import React, { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Form_06.css'; 

const Form_06 = () => {
  const [isSubmitted,setSubmit] = useState(false);
  const patterns = {
      'namePattern':/^[A-Za-z]+$/,
      'phonePattern':/^[6-9]\d{9}$/,
      'emailPattern':/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'passPattern' :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      //'addressPattern':/^[\w\s,.\-/#()']{10,100},?\s?(?:[A-Za-z\s]+),\s?[A-Za-z]{2,},\s?\d{6}$/
       //adress pattern like this :123/4, Gandhi Nagar, Bangalore, Karnataka, 560001
   
  }
  //Create a State Variable for handling error.
  const [errors,setErrors] = useState({
    "fname":"",
    "mname":"",
    "lname":"",
    "age": '',
    "phone": '',
    "email": '',
    "skills": "",
    "pass1": '',
    "pass2": '',
    "avatar": "",
    "address": '',
  })
  const [form,setForm] = useState({
   "fname":"",
    "mname":"",
    "lname":"",
    "age": '',
    "phone": '',
    "email": '',
    "skills": "",
     "pass1": '',
    "pass2": '',
    "avatar": "",
    "address": '',
   });
  const handleChange = (event)=>{
      //const name = event.target.name;
      //const value= event.target.value;
      const {name,value} = event.target;
      console.log("name",name);
      console.log("value",value);
     //[key]:value
      setForm({...form,[name]:value});
      setSubmit(false);
  }
  //for validation purpose we have created the following function
  const validate =()=>{
    let isValid = true;
    let newErrors =
    {"fname":"",
    "mname":"",
    "lname":"",
    "age": '',
    "phone": '',
    "email": '',
    "skills": "",
     "pass1": '',
    "pass2": '',
    "avatar": "",
    "address": '',
   };
    /* starting of firstName Validation */
    if(form.fname==""){
        newErrors.fname = "FirstName is Required";
        isValid = false;
    }else if (!patterns.namePattern.test(form.fname)){
        newErrors.fname ="Firstname must be min 3 to max 15 Chars Long , doesnot allow numbers";
        isValid=false;
    }
    /*MiddleName Validation */
    if(form.mname ==""){
      newErrors.mname="MiddleName is Required";
      isValid=false;
    }else if (!patterns.namePattern.test(form.mname)){
        newErrors.mname="middlename must be min 3 to max 15 Chars Long , doesnot allow numbers";
      isValid=false;
    }
    /*LastName Validation */
    if(form.lname ==""){
      newErrors.lname="LastName is Required";
      isValid=false;
    }else if (!patterns.namePattern.test(form.lname)){
        newErrors.lname ="Lastname must be min 3 to max 15 Chars Long , doesnot allow numbers";
      isValid=false;
    }

    /*Age Validation */
    if(form.age ==""){
      newErrors.age = "Age is Required";
      isValid = false;
    }else if(isNaN(form.age) || form.age < 18 || form.age > 80){
      newErrors.age = "Age must be a number between 18 to 80";
      isValid = false;
    }
    

    /*Starting of Phone number validations. */
    if(form.phone ==""){
        newErrors.phone="Mobile Number is Required";
        isValid = false;
    }
    else if(!patterns.phonePattern.test(form.phone)){
        newErrors.phone ='Invalid Indian Mobile Number';
        isValid = false;
    }
    /*email validations */
    if(form.email ==""){
        newErrors.email = "Email is Required";
        isValid = false;
    }
    else if(!patterns.emailPattern.test(form.email)){
        newErrors.email ='Invalid Email Address';
        isValid = false;
    }

    /*Starting of address validations for addressPattern regex. */
    // if(form.address ==""){
    //     newErrors.address="Address is Required";
    //     isValid = false;
    // }
    // else if(!patterns.addressPattern.test(form.address)){
    //     newErrors.address ='Give a valid Address, like: 123/4, Gandhi Nagar, Bangalore, Karnataka, 560001';
    //     isValid = false;
    // }

    if (form.address.length < 10) {
  newErrors.address = "Address must be at least 10 characters long.";
  isValid = false;
}

    /*Starting of Password validations. */
    if(form.pass1 ==""){
        newErrors.pass1="Password is Required";
        isValid=false;
    }else if(!patterns.passPattern.test(form.pass1)){
        newErrors.pass1="Password must contains atleast one UpperCase,LowerCase,Digit,One Special Chars.,Min 8 to Max 16 Chars Long.";
        isValid = false;
    }
    if(form.pass2==""){
        newErrors.pass2="Confirm Password is Required";
        isValid=false;
    }
    else if(form.pass1!=form.pass2){
        newErrors.pass2="Password & Confirm Password combination doesot matched.";
        isValid=false;
    }
    /*Starting of Profile picture validations. */
    if(form.avatar==""){
        newErrors.avatar="Please select an Image";
        isValid=false;
    }else if (!(form.avatar.type=="image/png" || form.avatar.type=="image/jpg" || form.avatar.type=="image/jpeg" || form.avatar.type=="image/gif")){
        newErrors.avatar="Only Image files are allowed";
        isValid = false;
    }
   /*Starting of Technical Skills validations. */
    if(form.skills.length==0){
        newErrors.skills="Please select Min 2 Language";
        isValid=false;
    }else if(form.skills.length>=4){
        newErrors.skills="Maximum Language can be added is 4";
        isValid = false;
    }
    
    //now setting up all errors into the state variable.
    setErrors(newErrors);
    //returning isValid at the end of the function.
    return isValid;
  }
  const handleFileChange=(event)=>{
     let file = event.target.files[0];
     console.log(file);
     let imageUrl = URL.createObjectURL(file);
     console.log(imageUrl);
     setForm({...form,"avatar":file});
    }
  
  var skills = [];
  const handleSkills =(event)=>{
      let optionsLength = event.target.options.length;
      for(let i=0;i<optionsLength;i++){
          if(event.target.options[i].selected){
               skills.push(event.target.options[i].value);
          }
          console.log(skills);
          //setForm({...form,'skills':skills});
      }
  }  
 
  const handleSubmit = (event)=>{
       event.preventDefault();
        setForm({...form,"skills":skills})
       if(validate()){
       console.log("Form submitted");
       setSubmit(true);
       console.log(form);
       }else {
        console.log("Validation working",errors);
       }
  }
  return (
    <div className='container my-5 bg-light text-dark rounded shadow-lg p-4 custom-form'>
      <form onSubmit={handleSubmit} noValidate>
          <header className="text-center mb-4 border-bottom pb-2 text-uppercase fw-bold">
            <h3>SignUP:</h3>
          </header>
          <div className="form-group">
           <div className="row">
              <div className="col">FirstName : <input type="text" name='fname' className={`form-control ${errors.fname ? 'is-invalid' : null }`} onChange={handleChange} required />
                { errors.fname && <p className='text-danger'>{errors.fname}</p> }
              </div>
               <div className="col">MiddleName : <input type="text" name='mname' className={`form-control ${errors.mname ? 'is-invalid' : null }`} onChange={handleChange} required />
                { errors.mname && <p className='text-danger'>{errors.mname}</p> }
              </div>
              <div className="col">LastName : <input type="text" name='lname' className={`form-control ${errors.lname ? 'is-invalid': null}`} onChange={handleChange} required/>
                  { errors.lname && <p className='text-danger'>{errors.lname}</p> }
              </div>
            </div>
          </div>
          
           <div className='form-group'>
              Age : <input type="number" name="age"  onChange={handleChange} required className='form-control'/>
              {errors.age && <p className='text-danger'>{errors.age}</p>}
          </div>

          <div className='form-group'>
              Phone : <input type="number" name="phone"  onChange={handleChange} required className='form-control'/>
              {errors.phone && <p className='text-danger'>{errors.phone}</p>}
          </div>
          <div className='form-group'>
              Email : <input type="text" name="email"  onChange={handleChange} required className='form-control'/>
              {errors.email && <p className='text-danger'>{errors.email}</p>}
          </div>
         {/* Starting address without using textarea */ }
          {/* <div className='form-group'>
              Address : <input type="text" name="address"  onChange={handleChange} required className='form-control'/>
              {errors.address && <p className='text-danger'>{errors.address}</p>}
          </div> */}


            {/* Starting address using textarea */ }
          <div className='form-group'>
              <label htmlFor="address">Address:</label>
                  <textarea name="address" id="address" value={form.address} onChange={handleChange} rows={4}
                    maxLength={120} placeholder="123/4, Gandhi Nagar, Bangalore, Karnataka, 560001"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`} />
              <div className="text-muted">{form.address.length}/120 characters</div>
              {errors.address && <p className='text-danger'>{errors.address}</p>}
          </div>

          <div className="form-group">
                  Technical Skills Known :
                   <select name='skills' onChange={handleSkills} multiple id='skill' required className='form-control'>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="MongoDB">MongoDB</option>
                   </select>
                   {errors.skills && <p className='text-danger'>{errors.skills}</p>}
          </div>
          
          
          <div className="form-group">
              <div className="row">
                <div className="col">Password : <input type="password" name='pass1' id='pass1' required className='form-control' onChange={handleChange}/>
                {errors.pass1 && <p className='text-danger'>{errors.pass1}</p>}
                </div>
                <div className="col">Confirm Password : <input type="password" name="pass2" id="pass2" required className='form-control' onChange={handleChange}/>
                {errors.pass2 && <p className='text-danger'>{errors.pass2}</p>}
                </div>
              </div>
          </div>
          {/*File Upload Control */}
          <div className="form-group">
            Upload Profile Pic : <input type="file" name="avatar" id="avatar" required className='form-control' onChange={handleFileChange}/>
            {errors.avatar && <p className='text-danger'>{errors.avatar}</p>}
          </div>
          <div className="form-group">
            <button className='btn btn-sm btn-outline-primary'>Submit</button>
          </div>
          </form>
          {isSubmitted && (<table className='table table-hover'>
                     <thead>
                     <tr>
                      <th>Name:</th>
                      <th>Age:</th>
                      <th>Phone:</th>
                      <th>Email:</th>
                      <th>Address</th>
                      <th>Skills Known:</th>
                      <th>Profile Pic:</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                      <td>{form.fname} {form.mname} {form.lname}</td>
                      <td>{form.age}</td>
                      
                      <td>{form.phone}</td>
                      <td>{form.email}</td>
                      <td>{form.address}</td>
                      <td>{form.skills.join(",")}</td>

                      <td><img src={URL.createObjectURL(form.avatar)} height='120px' width='120px' className='img-thumbnail' title={`${form.fname} ${form.mname} ${form.lname}'s pic`}/></td>
                     </tr>
                     </tbody>
            </table>
          )}
    </div>
  )
}
export default Form_06