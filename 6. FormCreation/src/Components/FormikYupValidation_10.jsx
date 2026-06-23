import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikYupValidation_10 = () => {
    const [isSubmitted , setSubmit] = useState(false);
    const myForm = useFormik({
      initialValues:{
        "fname":"",
        "lname":"",
        "phone":"",
        "email":"",
        "pass1":"",
        "pass2":"",
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
         values.phone =
         values.email =
         values.age = ""
         values.pass1 =
         values.pass2 = ""
         console.log("form resets");
      },
      validationSchema: Yup.object({
        fname:Yup.string().required("Firstname is Required").matches(/^[a-zA-Z]{3,8}$/,'FirstName cant have numbers min 3 to max 8 chars long'),
        lname: Yup.string().required("LastName is Required").matches(/^[a-zA-Z]{3,8}$/,'LastName cant have numbers min 3 to max 8 chars long'),
        phone: Yup.string().required("Phone is Required").matches(/^(?:\+91[-\s]?|0)?[6-9]\d{9}$/,'Invalid Indian Mobile number must starts with either between 9 8 7 6 and 10 digited'),
        email: Yup.string().email("Invalid Email address").required('email is Required'),
        pass1: Yup.string().required("Password is Mandatory").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,'Invalid Password Policy Violation must have atleast one uppercase,lowercase , one spl chars , one digit , min 8 to max 16 chars long'),
        pass2: Yup.string().required("Confirm Password must be provided").oneOf([Yup.ref('pass1'),'Password & Confirm Password combination doesnot matched']),
        age  : Yup.number().required("AGE IS MANDATORY").min(18,'You must be 18yrs old ').max(60,'your age has to be within 60 Yrs')
      })
       
    });
     
    console.log(myForm.values);
  return (
    <>
      <h1>Formik Form Validations.</h1>
   
      <div className="container">
        <header className="modal-header">
            <h4>SIGNUP:</h4>
        </header>
        <form onSubmit={myForm.handleSubmit}>
         <div className="form-group">
            <div className="row">
                <div className="col">FirstName : <input type="text" name="fname" onChange={myForm.handleChange} value={myForm.values.fname} className={myForm.errors.fname && myForm.touched.fname ? 'is-invalid form-control' : 'form-control'} />
                {myForm.errors.fname && <p className='text-danger'>{myForm.errors.fname}</p>}
                </div>
                <div className="col">LastName : <input type="text" name="lname" onChange={myForm.handleChange} value={myForm.values.lname}  className={myForm.errors.lname ? 'is-invalid form-control': 'form-control'} />
                {myForm.errors.fname && <p className='text-danger'>{myForm.errors.lname}</p>}
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col">Phone: <input type="number" name="phone" className={myForm.errors.phone ? 'is-invalid form-control': 'form-control'} onChange={myForm.handleChange} value={myForm.values.phone}  />
                {myForm.errors.phone && <p className='text-danger'>{myForm.errors.phone}</p>}
                </div>
                <div className="col">Email : <input type="text" name="email" onChange={myForm.handleChange} value={myForm.values.email} className={myForm.errors.email ?  'is-invalid form-control':'form-control'} />
                {myForm.errors.email && <p className='text-danger'>{myForm.errors.email}</p>}
                </div>
            </div>
        </div>
        <div className="form-group">
              Age : <input type="number" name="age" onChange={myForm.handleChange} value={myForm.values.age} className={myForm.touched.age && myForm.errors.age ?  'is-invalid form-control':'form-control'}/>
              {myForm.errors.age &&  <p className='text-danger'>{myForm.errors.age}</p>}
        </div>
        <div className="form-group">
        <div className="row">
            <div className="col">Password: <input type="password" name="pass1"  onChange={myForm.handleChange} value={myForm.values.pass1} className={myForm.touched.pass1 && myForm.errors.pass1 ?  "is-invalid form-control":"form-control"} />
            {myForm.errors.pass1 && <p className='text-danger'>{myForm.errors.pass1}</p>}
            </div>
            <div className="col">Confirm Password : <input type="password" name="pass2" className={myForm.touched.pass2 && myForm.errors.pass2 ? "is-invalid form-control": "form-control"} onChange={myForm.handleChange} value={myForm.values.pass2} />
            {myForm.errors.pass2 && <p className='text-danger'>{myForm.errors.pass2}</p>}
            </div>
        </div>
        </div>
        <div className="form-group">
            <button className="btn btn-sm btn-outline-dark" type='submit'>Submit</button> |
             <button className="btn btn-sm btn-outline-primary" onClick={myForm.handleReset}  type='reset'>Reset</button>
        </div>
        </form>
       
        </div>
        {isSubmitted && (
            <div className='table-responsive'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Phone:</th>
                        <th>Email:</th>
                        <th>Age:</th>
                       
                    </tr>
                   
                </thead>
                <tbody>
                    <tr>
                        <td>{myForm.values.fname} {myForm.values.lname}</td>
                        <td>{myForm.values.phone}</td>
                        <td>{myForm.values.email}</td>
                        <td>{myForm.values.age}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )}  
        </>
       
   
  )
}

export default FormikYupValidation_10