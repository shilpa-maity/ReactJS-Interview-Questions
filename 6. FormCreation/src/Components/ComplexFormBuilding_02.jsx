//Complex Form Building in React
// Description: A complex form building component in React that captures user input with multiple fields, including file upload and multiple selections.
import React, { useState } from 'react'
const ComplexFormBuilding_02 = () => {
    const [name,setName] = useState("");
    const [gender,setGender] = useState("");
    const [city,setCity]     = useState("");
    const [lang,setLang]     = useState([]);//DefaultValue of state is set to an empty Array
    const [edu,setEdu]       = useState([]); //default value of state is empty array.
    const [pic,setPic]       = useState("");//String Value pic Path .
    const handleName = (event)=>{
          //console.log(event);
          setName(event.target.value);
    }
    const handleGender = (event)=>{
          //console.log(event.target);  
            console.log(event.target.id);
            setGender(event.target.value);

    }
    const handleCity = (event)=>{
         //console.log(event.target);
         setCity(event.target.value);
    }

    const handleLang =(event)=>{
        //console.log(event.target.value);
        let optionsLength = event.target.options.length;
        //console.log(optionsLength);
        for(let i=0; i<optionsLength;i++){
           // console.log(event.target.options[i].selected)
           if(event.target.options[i].selected){
            //show those languages which has been selected by the end users.
              console.log(event.target.options[i].value);
              setLang([...lang,event.target.options[i].value]);
            }


        }

         console.log(lang);

    }

    const handleEdu =(event)=>{
        if(event.target.checked){
             console.log(event.target.value);
             setEdu([...edu,event.target.value]);
        }
    }

    const uploadPic = (event)=>{
        let file = event.target.files[0];
        //console.log(file);
        //String -> Blob => Binary Long Object.
        let imageUrl = URL.createObjectURL(file);      
        console.log(imageUrl);
        setPic(imageUrl);
    }
     
   
    const handleSubmit = (event)=>{
        event.preventDefault(); //preventing synchronous submission.
        //alert(`Hello ${name}`);
       // console.log("Form Submitted");
        document.getElementById("d1").innerHTML=`
        <div class="table-responsive">
         <table class="table table-hover">
           <tr>
             <th>Name:</th>
             <th>Gender:</th>
             <th>City:</th>
             <th>Languages speak:</th>
             <th>Educational Qualifications:</th>
             <th>Profile Pic:</th>
           </tr>
           <tr>
           <td>${name}</td>
           <td>${gender}</td>
           <td>${city}</td>
           <td>${lang}</td>
           <td>${edu}</td>
           <td><img src="${pic}" height="120px" width="120px" class="img-thumbnail"/></td>
           </tr>
         </table>  
        </div>
         <button onClick="window.print();">Print or SaveAs PDF:</button>
        `;
       // console.log(edu);
    }
    return (
    <div className='card p-3 m-3'>
        <form onSubmit={handleSubmit}>
            <header className="modal-header">
                <h4>SIGNUP:</h4>
            </header>
         <div className='form-group'>Name : <input type="text" name='f1' id='f1' required placeholder='e.g John Doe' className='form-control' value={name}  onChange={handleName}/></div>
         <div className='form-group'>Gender : <input type="radio" name="r1" value="Male" onChange={handleGender} id="r1" />Male
                                              <input type="radio" name="r1" value="Female" onChange={handleGender} id="r2" />Female
                                              <input type="radio" name='r1' value="Trans-Gender" onChange={handleGender} id='r3' />Trans
                                              </div>
         <div className='form-group'>
           City : <select required name='c1' id='c1' onChange={handleCity} className='form-control'>
                <option value="">---Choose a City---</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
           </select>
        </div>
        {/*Adding Multi field Values */}
        <div className="form-group">
            Languages Sepak :
              <select name='lang' onChange={handleLang} className='form-control' multiple>
                <option>English</option>
                <option>Bengali</option>
                <option>Hindi</option>
                <option>Gujarati</option>
                <option>Tamil</option>
                <option>Telegu</option>
              </select>
        </div>

        <div className='form-group'>
           
              Educational Qualifications :
              <p>
              <input type="checkbox" onChange={handleEdu} name="ch1" id="ch1" value="10th" />10<sup>th</sup>
              <input type="checkbox" onChange={handleEdu} name="ch1" id="ch2" value="12th" />12<sup>th</sup>
              <input type="checkbox" onChange={handleEdu} name="ch1" id="ch3" value="Graduation"/>Graduation
              <input type="checkbox" onChange={handleEdu} name="ch1" id="ch4" value="Post-Graduation" />PostGraduation
           </p>
        </div>

        {/*Adding a Upload Image Control */}
        <div className="form-group">
             Upload Profile Pic : <input type="file" name='avatar' id='avatar' onChange={uploadPic}  className='form-control'/>
        </div>
                                             
         <div className='form-group'><button className='btn btn-sm btn-outline-primary' type='submit'>Submit</button></div>
         <div id='d1'></div>
         </form>  
    </div>
  )
}

export default ComplexFormBuilding_02