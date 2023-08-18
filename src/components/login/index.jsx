import { useState } from "react"
import { useNavigate } from "react-router-dom";
import LogIn from "./style";

const Login = () => {

    const navigate = useNavigate();
    const [emailExist, setEmailExist] = useState("");
    const [passwordExist, setPasswordExist] = useState("");

    const retrievedUser = JSON.parse(localStorage.getItem(emailExist));

    const handleLogin = () => 
    {
        console.log(retrievedUser)
        if(retrievedUser?.email && retrievedUser?.password === passwordExist)
        {  
          logUser() 
        }
        else{
          alert("Wrong credentials")
        }
    }

    const logUser = () => {
      if(retrievedUser.role === "faculty")
      {
        navigate("/create-quiz") 
      }
      if(retrievedUser.role === "student")
      {
        navigate("/questions")
      }
    }

  return (
    <LogIn>
        <h2>Log In</h2>
        <div className="SignInContainer">
        <form>
        <input
          type="text" 
          placeholder="Contact Number"
          required
          onChange={(e) => setEmailExist(e.target.value)}
        />
        <input      
          type = "password"
          placeholder = "Password" 
          required
          onChange={(e) => setPasswordExist(e.target.value)}
        />
        <button
          type = "button"
          onClick={handleLogin}>
            Log in
        </button>
      </form>
      </div>
        <p>Already have an account? <a href="/signup">Sign Up</a></p>
    </LogIn>
    )
}

export default Login
