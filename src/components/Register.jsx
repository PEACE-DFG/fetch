// import React from 'react'
import { useState } from 'react'
 function Register() {
  const [user,setUser]=useState({
    Firstname:'',
    Lastname:'',
    Username:'',
    City:'',
  
  })   
  const [errors, setErrors] = useState([])
  const submitData = (e)=>{
      e.preventDefault()
     if(user.Firstname == ""){
       setErrors((err)=>{
          return {...err,
               FirstnameErr: 'Your name is required'}
       })
     }
     if(user.Lastname ==""){
      setErrors(function(errors){
        return {...errors, LastnameErr:'Your LastName is required'}
      })
     }
     if(user.Username ==""){
      setErrors(function(errors){
        return {...errors, UsernameErr:'Your UserName is required'}
      })
     }
     if(user.City ==""){
      setErrors(function(errors){
        return {...errors, CityErr:'Your City is required'}
      })
     }
     if (errors.length==0){
      const alldata = JSON.stringify(user)
      const keydata =user.Firstname
      localStorage.setItem(keydata, alldata)
      
     }
  

   
  }
  
  

 
  return (
    <div className='cover same mt-5 p-5  container'>
      <div className='container text-center text-light display-3'>
        <p className='border-bottom'>
          Registration
        </p>

      </div>

        
<form onSubmit={submitData}  className="row text-light  g-3 needs-validation container root " >
      {/* <h2> {JSON.stringify(errors)} </h2>  */}

  <div className="col-md">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" name="Firstname" class="form-control" id="validationCustom01" placeholder="Mark"
    onChange={(e)=>{
      setUser({...user, Firstname:e.target.value})
    }} 
    
    />
    {errors.FirstnameErr}


    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" name="Lastname" class="form-control" id="validationCustom02" placeholder="Otto" 
    	onChange={(e)=>{
        setUser({...user,Lastname:e.target.value})
      }} />
    {errors.LastnameErr}

    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" name="Username" id="validationCustomUsername" aria-describedby="inputGroupPrepend" 
      onChange={(e)=>{
        setUser({...user, Username:e.target.value})
      }}/>
    {errors.UsernameErr}

      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" name="City" className="form-control" id="validationCustom03"
    onChange={(e)=>{
      setUser({...user, City:e.target.value})
    }}/>
    {errors.CityErr}

    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04">
      <option selected disabled value="">Choose...</option>
      <option>lagos</option>
      <option>Abuja</option>
      <option>Osun</option>
      <option>Ekiti</option>
      <option>Oyo</option>
      <option>Bauchi</option>
      <option>Anambra</option>
      <option>Rivers</option>
      <option>Delta</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" />
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
  )
}
  

export default Register