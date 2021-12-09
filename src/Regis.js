import React,{useState} from "react";
import "./sign.css";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const Regis = () => {
const [name, setName] = useState('');
const [mail, setMail] = useState('');
const [pass, setPass] = useState('');
let history = useHistory();
 
 const submitHandler=(e)=>{
    e.preventDefault();
    // Login//
    if(!name || !mail || !pass){
      alert("Fields can't be empty ");}
      else{
        localStorage.setItem("Name", JSON.stringify(name));
    localStorage.setItem("Password", JSON.stringify(pass));
    localStorage.setItem("Email", JSON.stringify(mail));alert("Registration Successful");
    history.push("./Signin")
    }
      
  }

return (  
  <>
<div className ="text-center">
<main className="form-signin" >
  <form onSubmit={submitHandler}>
    <h1 className="h3 mb-3 fw-normal success"> REGISTRATION</h1>
    <div className="form-floating">
      <input type="text" className="form-control" id="name" placeholder="John"
      onChange={(e)=>setName(e.target.value)}
      />
      <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
      onChange={(e)=>setMail(e.target.value)}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
      onChange={(e)=>setPass(e.target.value)} />
      <label for="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
  </form>
  <div className="sign">
 <Link className="regis" to="/Signin">Already Registered?</Link>
</div>
</main>
</div>
</>
)
}
export default Regis;