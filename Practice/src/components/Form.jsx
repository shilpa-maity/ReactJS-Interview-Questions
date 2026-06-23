import React,{ useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form = () => {
    const[isSubmitted,setSubmit]=useState(false)
    const myForm=useFormik({
        initialValues:{
            'fname':"",
            "lname":"",
            "age":""
        },
        onSubmit:(values)=>{
            alert(values.fname+""+values.lname);
            console.log(values.fname+""+values.lname);
            setSubmit(true)

        },
        onReset:(values)=>{
            values.fname=
            values.lname=
            values.age=""
            console.log("Form reset")
        },
        validationSchema:Yup.object({
            fname:Yup.string().required("FirstName is required").matches(/^[a-zA-Z]{3,8}$/,"First name must contain charecter not number"),
            lname:Yup.string().required("LastName is required").matches(/^[a-zA-Z]{3,8}$/,"Lastname must contain charecter not number"),
            age:Yup.number().required("Age required").min(18,"You are too aerly").max(89,"You are too old")

        })
    });
    console.log(myForm.values)
  return (
    <>
    <form onSubmit={myForm.handleSubmit}>
      <header>
        <h1>SIGN UP</h1>
      </header>
      <div>
        <input type="text" name='fname' onChange={myForm.handleChange} value={myForm.values.fname}/>First Name
        {myForm.errors.fname && <p className='text-danger'>{myForm.errors.fname}</p>}
      </div>
      <div>
        <input type="text" name='lname' value={myForm.values.lname} onChange={myForm.handleChange} />Last Name
        {myForm.errors.fname && <p className='text-danger'>{myForm.errors.lname}</p>}
      </div>
      <div>
        <input type="number" name='age' onChange={myForm.handleChange} value={myForm.values.age} />Age
        {myForm.errors.age && <p className='text-danger'>{myForm.errors.age}</p>}
      </div>

      <div>
        <button type='submit'>Submit</button>
        <button type='reset' onClick={myForm.handleReset}>Reset</button>
      </div>
      </form>

      {isSubmitted && (<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{myForm.values.fname} {myForm.values.lname}</td>
                <td>{myForm.values.age}</td>
            </tr>
        </tbody>

      </table>

     ) }
    </>
  )
}

export default Form
