import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import "./sign.css";
import {Link} from "react-router-dom";
const Signin = () => {
  const history= useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleClick=(e)=>{
e.preventDefault();
let mailid = localStorage.getItem("Email").replace(/"/g, "");
let passWord = localStorage.getItem("Password").replace(/"/g, "");

if(!email || !password){
  alert("Please Enter the Email and Password")
}else if(password !== passWord || email !== mailid ){
  alert("invalid id or Password");

}
else{
  history.push("./top");
}

}  
return (
<div className ="text-center">   
<main className="form-signin" >
  <form onSubmit={handleClick}>
    <h1 className="h3 mb-3 fw-normal success"> Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
      onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)} />
      <label for="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
<Link className="regis" to="./">wana Register?</Link>
</main>
</div>
)
}
export default Signin;