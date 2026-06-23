import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikYup = () => {
    const [isSubmitted , setSubmit] = useState(false);
    const myForm = useFormik({
      initialValues:{
        "fname":"",
        "lname":"",
        "age":""
      },
      onSubmit:(values)=>{
        alert(values.fname+" "+values.lname);
        console.log(values.fname+" "+values.lname);
        setSubmit(true)
    },
      onReset:(values)=>{
         values.fname =
         values.lname =
         values.age = 
         console.log("form resets");
      },
      validationSchema: Yup.object({
        fname:Yup.string().required("Firstname is Required").matches(/^[a-zA-Z]{3,8}$/,'FirstName cant have numbers min 3 to max 8 chars long'),
        lname: Yup.string().required("LastName is Required").matches(/^[a-zA-Z]{3,8}$/,'LastName cant have numbers min 3 to max 8 chars long'),
        age  : Yup.number().required("AGE IS MANDATORY").min(18,'You must be 18yrs old ').max(60,'your age has to be within 60 Yrs')
      })
       
    });
    console.log(myForm.values);

  return (
    <>
    <form onSubmit={myForm.handleSubmit}>
      <h1>Formik Yup Form Validations.</h1>
         <div>FirstName : <input type="text" name="fname" onChange={myForm.handleChange} value={myForm.values.fname}  />
                {myForm.errors.fname && <p className='text-danger'>{myForm.errors.fname}</p>}
        </div>    
        <div className="col">LastName : <input type="text" name="lname" onChange={myForm.handleChange} value={myForm.values.lname}   />
                {myForm.errors.fname && <p className='text-danger'>{myForm.errors.lname}</p>}
        </div>
        <div className="form-group">
              Age : <input type="number" name="age" onChange={myForm.handleChange} value={myForm.values.age} />
              {myForm.errors.age &&  <p className='text-danger'>{myForm.errors.age}</p>}
        </div>
        <div className="form-group">
            <button className="btn btn-sm btn-outline-dark" type='submit'>Submit</button> |
             <button className="btn btn-sm btn-outline-primary" onClick={myForm.handleReset} type='reset'>Reset</button>
        </div>
        </form>
        {isSubmitted && (
            <div className='table-responsive'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Age:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{myForm.values.fname} {myForm.values.lname}</td>
                        <td>{myForm.values.age}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )}  
        </>
  )
}
export default FormikYup