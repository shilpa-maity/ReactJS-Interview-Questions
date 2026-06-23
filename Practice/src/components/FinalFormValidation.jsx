import React, { useState } from 'react'

const FinalFormValidation = () => {
    const [isSubmitted,setSubmitted]=useState(false);
    const patterns={
        'namePattern':/^[A-Za-z]{3,15}$/,
        'phonePattern':/^[6-9]\d{9}$/,
        'emailPattern':/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'passwordPattern':/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }
    //create a state variable for handling error
    const[errors,setErrors]=useState({
        "fname":"",
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
    })
    const [form,setForm]=useState({
        "fname":"",
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
    })
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        console.log("name",name);
        console.log("value",value);
        setForm({...form,[name]:value});
        setSubmitted(false);
    }
    //for validation
    const validate=()=>{
        let isValid=true;
        let newErrors={
            "fname":"",
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
        }
        if(form.fname==""){
            newErrors.fname="First Name is required";
            isValid=false;
        }
        else if(!patterns.namePattern.test(form.fname)){
            newErrors.fname="Firstname must be min 3 to max 15 char";
            isValid=false;
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default FinalFormValidation
