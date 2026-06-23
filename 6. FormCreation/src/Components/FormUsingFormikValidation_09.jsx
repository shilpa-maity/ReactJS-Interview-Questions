import React, { useState } from 'react'
import { useFormik } from 'formik'


const FormUsingFormikValidation_09 = () => {
    const [isSubmitted , setSubmit] = useState(false);
    const myForm = useFormik({
      initialValues:{
        "fname":"",
        "lname":"",
        "phone":"",
        "email":"",
        "pass1":"",
        "pass2":""
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
         values.pass1 =
         values.pass2 = ""
         console.log("form resets");
      },
      validate:(values)=>{
        let errors = {};//empty Object set  
        if(!values.fname){
            errors.fname = "FirstName is Required";
             
          }else if (!/^[a-zA-Z]{3,8}$/.test(values.fname)){
            errors.fname = "FirstName cant have numbers min 3 to max 8 chars Long";

          }
        if(!values.lname){
            errors.lname = "LastName is Required";
             
          }else if (!/^[a-zA-Z]{3,8}$/.test(values.lname)){
            errors.lname = "LastName cant have numbers min 3 to max 8 chars Long";
           
          }
         //Indian Mobile number Validations
         if(!values.phone){
            errors.phone ='Mobile number is Required';
         }else if (!/^(?:\+91[-\s]?|0)?[6-9]\d{9}$/.test(values.phone)){
            errors.phone='Invalid Indian Mobile number must starts with +91..9 or 8 or 7 or 6 10 Digited';

         }
        return errors;
      }
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
                <div className="col">FirstName : <input type="text" name="fname" onChange={myForm.handleChange} value={myForm.values.fname} className={myForm.errors.fname ? 'is-invalid form-control': 'form-control'}/>
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
                <div className="col">Email : <input type="text" name="email" className='form-control' onChange={myForm.handleChange} value={myForm.values.email} /></div>
            </div>
        </div>
       
        <div className="form-group">
        <div className="row">
            <div className="col">Password: <input type="password" name="pass1" className='form-control' onChange={myForm.handleChange} value={myForm.values.pass1} /></div>
            <div className="col">Confirm Password : <input type="password" name="pass2" className='form-control' onChange={myForm.handleChange} value={myForm.values.pass2} /></div>
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
                       
                    </tr>
                   
                </thead>
                <tbody>
                    <tr>
                        <td>{myForm.values.fname} {myForm.values.lname}</td>
                        <td>{myForm.values.phone}</td>
                        <td>{myForm.values.email}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )}  
        </>
       
   
  )
}

export default FormUsingFormikValidation_09