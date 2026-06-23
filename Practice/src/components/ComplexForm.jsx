import React, { useState } from 'react'

const ComplexForm = () => {
  const [name,setName]=useState("")
  const[gender,setGender]=useState("")
  const[city,setCity]=useState("")
  const[lang,setLang]=useState("")
  const[edu,setEdu]=useState("")
  const[pic,setPic]=useState("")

  const handleName=(event)=>{
    console.log(event.target.value);
    setName(event.target.value);
  }
  const handleGender=(event)=>{
    console.log(event.target.value);
    setGender(event.target.value);
  }
  const handleCity=(event)=>{
    console.log(event.target.value);
    setCity(event.target.value);
  }
  const handleLang=(event)=>{
    //console.log(event.target.value)
    let optionsLength=event.target.options.length
    //console.log(optionsLength)
    for (let i=0;i<optionsLength;i++){
      if(event.target.options[i].selected){
        console.log(event.target.options[i].value);
        setLang([...lang,event.target.options[i].value]);
      }
    }
    console.log(lang);
  }
  const handleEdu=(event)=>{
    if(event.target.checked){
      console.log(event.target.value);
      setEdu([...edu,event.target.value]);
    }

  }
  const uploadPic=(event)=>{
    let file=event.target.files[0];
    let imageURL=URL.createObjectURL(file);
     console.log(imageURL);
     setPic(imageURL);
  }

  const handleSubmit=(event)=>{
    //console.log("Form Submitted");
    event.preventDefault();
    document.getElementById('d1').innerHTML=`
    <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>City</th>
        <th>Languages</th>
        <th>Education</th>
        <th>Profile Picture</th>
      </tr>
      <tr>
        <td>${name}</td>
        <td>${gender}</td>
        
        <td>${city}</td>
        <td>${lang}</td>
        <td>${edu}</td>
        <td><img src="${pic}" alt="pic" height='100px'width='100px' /></td>
      </tr>
    </table>
    </div>
    <button onClick="window.print()">Save as PDF</button> `
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <header>
            <h1>Sign Up Form</h1>
          </header>
        </div>
        <div className="form-group">
         First Name: <input type="text" placeholder='Enter your first name:' name='f1' id='f1'onChange={handleName} />
          Last Name:<input type="text" placeholder='enter your last name:' name='f1' id='f2' onChange={handleName} />
        </div>
        <div className="form-group">
          Gender :
          <input type="radio" name='g1' id='g1' onChange={handleGender} value="Male" />Male
          <input type="radio" name='g1' id='g2' onChange={handleGender} value="Female" />Female
          <input type="radio" name='g1' id='g3' onChange={handleGender} value="Other" />Other
        </div>
        <div>
          City:
          <select name="c1" id="c1" value={city} onChange={handleCity}>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Phoenix">Phoenix</option>
          </select>
        </div>
        <br />
        <div className='form-group'>
          Languages Speak:
          <select name="lang"  onChange={handleLang} multiple>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <div className="form-group">
          Educational qualifications:
          <p>
          <input type="checkbox" name='ch1'id='ch1' onChange={handleEdu} value="10th" />10<sup>th</sup>

          <input type="checkbox" name='ch1'id='ch2' onChange={handleEdu} value="12th" />12<sup>th</sup>
          <input type="checkbox" name='ch1'id='ch3' onChange={handleEdu} value="Graduation" />Graduation
          <input type="checkbox" name='ch1'id='ch4' onChange={handleEdu} value="Post Graduation" />Post Graduation

        </p>
        </div>


        <div className="form-group">
          Upload Pic:
          <input type="file"  onChange={uploadPic} name='avatar'id='avatar' />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
        <div id='d1'></div>

      </form>
    </div>
  )
}

export default ComplexForm
