//Final Form Validation for interview 

import React, { useState } from 'react'
const FinalFormValidation_interview = () => {
  const [isSubmitted,setSubmit] = useState(false);
  const patterns = {
      'namePattern':/^[A-Za-z]{3,15}$/,
      'phonePattern':/^[6-9]\d{9}$/,
      'emailPattern':/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'passPattern' :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
  }
  //Create a State Variable for handling error.
  const [errors,setErrors] = useState({
    "fname":"",
    "lname":"",
    "gender":"",
    "city": "",
    "phone":"",
    "email":"",
    "pass1":"",
    "pass2":"",
    "avatar":"",
    "languages":"",
    "skills":""
  })
  const [form,setForm] = useState({
    "fname":"",
    "lname":"",
    "gender":"",
    "city": "",
    "phone":"",
    "email":"",
    "pass1":"",
    "pass2":"",
    "avatar":"",
    "languages":"",
    "skills":""
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
    "lname":"",
    "gender":"",
    "city":"",
    "phone":"",
    "email":"",
    "pass1":"",
    "pass2":"",
    "avatar":"",
    "languages":"",
    "skills":""
   };
    /* starting of firstName Validation */
    if(form.fname==""){
        newErrors.fname = "FirstName is Required";
        isValid = false;
    }else if (!patterns.namePattern.test(form.fname)){
        newErrors.fname ="Firstname must be min 3 to max 15 Chars Long , doesnot allow numbers";
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
    /*Gender Validation */
    if(form.gender == ""){
      newErrors.gender ="Please select a Gender";
      isValid = false;
    }
    /* city Validation */
    if(form.city ==""){
      newErrors.city ="Please choose a city from the list";
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
    if(form.avatar==""){
        newErrors.avatar="Please select an Image";
        isValid=false;
    }else if (!(form.avatar.type=="image/png" || form.avatar.type=="image/jpg" || form.avatar.type=="image/jpeg" || form.avatar.type=="image/gif")){
        newErrors.avatar="Only Image files are allowed";
        isValid = false;
    }
    if(form.languages.length==0){
        newErrors.languages="Please select Min 1 Language";
        isValid=false;
    }else if(form.languages.length>=4){
        newErrors.languages="Maximum Language can be added is 4";
        isValid = false;
    }
    if(skills.length==0){
        newErrors.skills="Please select Min 1 Skill";
        isValid=false;
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
  var languages = [];
  const handleLang =(event)=>{
      let optionsLength = event.target.options.length;
      for(let i=0;i<optionsLength;i++){
          if(event.target.options[i].selected){
               languages.push(event.target.options[i].value);
          }
          console.log(languages);
          setForm({...form,'languages':languages});
      }
  }  
  const [skills,setSkills] = useState([]);
  const handleSkills = (event)=>{
   
      console.log(event.target.id,event.target.checked);
      if(event.target.checked){
      setSkills([...skills,event.target.value]);
      ;  
    }
     
       
  }
  const handleCheckAll =(event)=>{
      if(event.target.checked){
          document.getElementById("ch1").checked =
          document.getElementById("ch2").checked =
          document.getElementById("ch3").checked=
          document.getElementById("ch4").checked = true;
      }else{
            document.getElementById("ch1").checked =
          document.getElementById("ch2").checked =
          document.getElementById("ch3").checked=
          document.getElementById("ch4").checked = false;
       
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
    <div className='container'>
      <form onSubmit={handleSubmit} noValidate>
          <header className="modal-header">
            <h4>SignUP:</h4>
          </header>
          <div className="form-group">
           <div className="row">
              <div className="col">FirstName : <input type="text" name='fname' className={`form-control ${errors.fname ? 'is-invalid' : null }`} onChange={handleChange} required />
                { errors.fname && <p className='text-danger'>{errors.fname}</p> }
              </div>
              <div className="col">LastName : <input type="text" name='lname' className={`form-control ${errors.lname ? 'is-invalid': null}`} onChange={handleChange} required/>
                  { errors.lname && <p className='text-danger'>{errors.lname}</p> }
              </div>
           </div>
          </div>
          <div>
              Gender : <input type="radio" name="gender" required value="Male" onChange={handleChange} />Male
                       <input type="radio" name="gender" required value="Female" onChange={handleChange} />Female
                       { errors.gender && <p className='text-danger'>{errors.gender}</p>}
          </div>
          <div className='form-group'>
              Phone : <input type="number" name="phone"  onChange={handleChange} required className='form-control'/>
              {errors.phone && <p className='text-danger'>{errors.phone}</p>}
          </div>
          <div className='form-group'>
              Email : <input type="text" name="email"  onChange={handleChange} required className='form-control'/>
              {errors.email && <p className='text-danger'>{errors.email}</p>}
          </div>
          <div className='form-group'>
              <select required name="city" onChange={handleChange} className='form-control'>
                <option value="">---Choose a City---</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
              </select>
              {errors.city && <p className='text-danger'>{errors.city}</p>}
          </div>
          {/* Adding MUltiValues field */}
          <div className="form-group">
               <div className="row">
                <div className="col">
                   Languages Speak :
                   <select name='languages' onChange={handleLang} multiple id='lang' required className='form-control'>
                    <option value="Bengali">Bengali</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telegu">Telegu</option>
                   </select>
                   {errors.languages && <p className='text-danger'>{errors.languages}</p>}
                </div>
                <div className="col">
                 
                  <p>Technical Skills :
                 
                  <input type="checkbox" name="ch_all" id="ch_all" onChange={handleCheckAll} />Select/De-Select All
                  </p>
                  <input type="checkbox" name="skills" id="ch1" onChange={handleSkills} value="Angular" />Angular
                  <input type="checkbox" name="skills" id="ch2" onChange={handleSkills} value="React" />React
                  <input type="checkbox" name="skills" id="ch3" onChange={handleSkills} value="PHP" />PHP
                  <input type="checkbox" name="skills" id="ch4" onChange={handleSkills} value="NODE" />NODE
                  { errors.skills && <p className='text-danger'>{errors.skills}</p>}
                </div>
               </div>
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
                      <th>City:</th>
                      <th>Gender:</th>
                      <th>Phone:</th>
                      <th>Email:</th>
                      <th>Languages Known:</th>
                      <th>Skills Known:</th>
                      <th>Profile Pic:</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                      <td>{form.fname} {form.lname}</td>
                      <td>{form.city}</td>
                      <td>{form.gender}</td>
                      <td>{form.phone}</td>
                      <td>{form.email}</td>
                      <td>{form.languages.join(",")}</td>
                      <td>{form.skills.join(",")}</td>
                      <td><img src={URL.createObjectURL(form.avatar)} height='120px' width='120px' className='img-thumbnail' title={`${form.fname} ${form.lname}'s pic`}/></td>
                     </tr>
                     </tbody>
            </table>)}
    </div>
  )
}
export default FinalFormValidation_interview