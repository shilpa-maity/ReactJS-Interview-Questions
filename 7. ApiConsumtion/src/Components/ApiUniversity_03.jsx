import axios from 'axios';
import React, { useEffect, useState } from 'react'
const ApiUniversity_03 = () => {
     
   //holding all universities
   const [university,setUniversity]= useState([]);
   //all state from api
   const [stateList,setStateList]= useState([]);
   //Live searched Data from API
   const [searchedData,setSearchedData]= useState([]);
   //dropdown selected state wise data
   const [selectedState,setSelectedState]= useState([]);
   const [loading,setLoading] = useState(false);
    //detecrmine which search is happening
    // 1 --> user loads the component
    //2 ---> user searched university
    //3 --> user selects a state from the drop down.
   const [flag,setFlag] = useState(0);
   //useEffect --> which used to call when component is initialized.
   //useEffects hooks used to call when component gets initialized
   //it is also used as side effects depends on change in the variable or state.
     useEffect(()=>{
        setLoading(true);
        console.log("University component loaded");
       //Timer introduced here
        setTimeout(()=>{
        axios.get("http://universities.hipolabs.com/search?country=India&quot")
        .then((response)=>{
            console.log(response.data);
            //setting up into the state variable.
            setUniversity(response.data);
            setFlag(1);
            let state2 = [];
            for(let state of response.data){
                    state2.push(state['state-province']);
            }
            //eliminate the null values
            state2 = state2.filter(Boolean);
            //eliminate the duplicate data and create uique statelist
            state2 = state2.filter((item,pos,self)=>{
                  return self.indexOf(item) == pos;
            });
            setStateList(state2);
           
            setLoading(false);
        })
         .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
        },800);
       
         
     },[]);
   
    const show = (event)=>{
          let searchedData = event.target.value;
         
          if(searchedData.length>=3){
            //then api search will begins
            console.log(searchedData);
           let searchedUniversity= university.filter((univObj)=>{
                  if(univObj.name.toLowerCase().includes(searchedData.toLowerCase())){
                    return univObj;
                  }
            })  ;
            console.log(searchedUniversity);
            setSearchedData(searchedUniversity);
            setFlag(2);
        }
    }
    const showState = (event)=>{
          let selectedState = event.target.value;
          let selectedUniv =university.filter((univObj)=>{
              if(univObj['state-province'] == selectedState){
                return univObj;
              }
          });
          setSelectedState(selectedUniv);
          setFlag(3);
        }
  if(loading) { return(<p align='center' className='text-danger'><img src='./images/lg.gif' height='220px' width='420px'/></p>)}
  else {
   return (
    <div>
       <h2>Showing all University</h2>
       <div className="form-group">
          <input type="text" name='univ' onChange={show} className='form-control' placeholder='Search Universities'/>
       </div>
       <div className="form-group">
          <select name="state1" className='form-control' onChange={showState}>
            <option>---Choose a State---</option>
            {stateList.map((state,index)=>(
               <option key={index}>{state}</option>
            ))}
           
          </select>
       </div>
       <div className="table-responsive">
      {flag==1 && (
         <table className='table table-hover'>
        <thead>
        <tr>
            <th>Name:</th>
            <th>State:</th>
            <th>WebSite:</th>
        </tr>
        </thead>
        <tbody>
           
            {university.map((univObj,index)=>(
              <tr key={index}>
            <td>{univObj.name}</td>
            <td>{univObj['state-province']}</td>
            <td><a href={univObj.web_pages[0]}>{univObj.web_pages[0]}</a></td>
        </tr>
            ))}
       
        </tbody>
        </table>  
       
      )}
      {flag==2 &&(
        <table className='table table-hover'>
        <thead>
        <tr>
            <th>Name:</th>
            <th>State:</th>
            <th>WebSite:</th>
        </tr>
        </thead>
        <tbody>
           
            {searchedData.map((univObj,index)=>(
              <tr key={index}>
            <td>{univObj.name}</td>
            <td>{univObj['state-province']}</td>
            <td><a href={univObj.web_pages[0]}>{univObj.web_pages[0]}</a></td>
        </tr>
            ))}
       
        </tbody>
        </table>  
       
      )}
      {flag==3 && (
          <table className='table table-hover'>
        <thead>
        <tr>
            <th>Name:</th>
            <th>State:</th>
            <th>WebSite:</th>
        </tr>
        </thead>
        <tbody>
           
            {selectedState.map((univObj,index)=>(
              <tr key={index}>
            <td>{univObj.name}</td>
            <td>{univObj['state-province']}</td>
            <td><a href={univObj.web_pages[0]}>{univObj.web_pages[0]}</a></td>
        </tr>
            ))}
       
        </tbody>
        </table>  
       
      )}
        </div>
    </div>
  )
  }  
 
}
export default ApiUniversity_03