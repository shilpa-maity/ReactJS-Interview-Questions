import React, { useState } from 'react'
//we have to import useformik hooks from formik lib
import { useFormik } from 'formik'
const FormUsingFormik_07 = () => {
    const [submitting, setSubmiting]= useState(false);

    const formik = useFormik({
        //values
        initialValues:{
            'fname':'',
            'lname':'',
            'phone':'',
            'email':'',
            'pass1':'',
            'pass2':''
        },
        onSubmit: (values) => {
            console.log(values);
       setSubmiting(true);
   
},
        //form validations
        validate:(values)=>{
             
         let newErrors = {};  //Empty array otherwise formik always treats this as an error.
         
         if(!values.fname){
              newErrors.fname = "FirstName is Required";
               
         }else if(!/^[a-zA-Z]{3,16}$/.test(values.fname)){
              newErrors.fname = 'FirstName cant allow numbers min 3 to max 16 Chars Long';
               
            }
         //lastname validations
         if(!values.lname){
              newErrors.lname = "LastName is Required";
               
         }else if(!/^[a-zA-Z]{3,16}$/.test(values.lname)){
              newErrors.lname = 'LastName cant allow numbers min 3 to max 16 Chars Long';
             
            }
          //phone number validations
           if(!values.phone){
              newErrors.phone='Mobile number is Required';
           }else if (!/^[6-9]\d{9}$/.test(values.phone)){
              newErrors.phone='Invalid Indian Mobile Number';
               
           }
           //email validations
           if(!values.email){
              newErrors.email='Email is Required';
           }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
              newErrors.email='Inavlid Email address';
           }
           if(!values.pass1){
              newErrors.pass1="Password is Required";

           }  else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(values.pass1)) {
               newErrors.pass1="Password must contains atleast one uppercase,lowercase,special chars , min 8 to max 16 chars long.";
           }

           //password & confirm password mismatch error handling.
           if(!values.pass2){
               newErrors.pass2="Confirm Password is Required";
           }else if(!( values.pass1 == values.pass2)){
               newErrors.pass2="Password & Confirm Password combination doesnot match";

           }
       
         
           //we have to return errors in formik
            return newErrors;

       
        }
       
       
    })
    //to see all values in formik lib
    //console.log(formik.values);
    console.log(formik.errors);

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
         <div className="form-group">
            <div className="row">
                <div className="col">FirstName : <input type="text" name='fname' onChange={formik.handleChange} value={formik.values.fname} className={formik.errors.fname ? 'is-invalid form-control':'form-control'}/>
                 {formik.errors.fname && <p className='text-danger'>{formik.errors.fname}</p>}

                </div>
                <div className="col">LastName : <input type="text" onChange={formik.handleChange} value={formik.values.lname} name='lname' className={formik.errors.lname ? 'is-invalid form-control': 'form-control'}  />
                 {formik.errors.lname && <p className='text-danger'>{formik.errors.lname}</p>}
                </div>
            </div>
         </div>
         <div className="form-group">
               <div className="row">
                <div className="col">Phone: <input type="number" onChange={formik.handleChange} value={formik.values.phone} name="phone" id="ph1"  className={formik.errors.phone ? 'is-invalid form-control' :'form-control'} />
                {formik.errors.phone &&   <p className="text-danger">{formik.errors.phone}</p>}
                </div>
                <div className="col">Email : <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} id="em1"  className='form-control' />
                {formik.errors.email && <p className='text-danger'>{formik.errors.email}</p>}
                </div>
               </div>
         </div>
         <div className="form-group">
            <div className="row">
                <div className="col">Password : <input type="password" onChange={formik.handleChange} value={formik.values.pass1} name="pass1" id="pass1"  className='form-control' />
                {formik.errors.pass1 && <p className='text-danger'>{formik.errors.pass1}</p>}
                </div>
                <div className="col">Confirm Password: <input type="password" onChange={formik.handleChange} value={formik.values.pass2} name="pass2" id="pass2"  className='form-control' />
                 { formik.errors.pass2  && <p className='text-danger'>{formik.errors.pass2}</p>}
                </div>
            </div>
         </div>
         <div className="form-group">
            <button type='submit' className="btn btn-sm btn-outline-primary">Submit</button>
         </div>
         </form>

          { submitting && (
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
                        <td>{formik.values.fname} {formik.values.lname}</td>
                        <td>{formik.values.phone}</td>
                        <td>{formik.values.email}</td>
                    </tr>
                    </tbody>
               
              </table>

          )
         
          }  

    </div>
  )
}

export default FormUsingFormik_07