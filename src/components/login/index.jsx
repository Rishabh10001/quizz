import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./style.css"


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
        navigate("/question-form") 
      }
      if(retrievedUser.role === "student")
      {
        navigate("/questions")
      }
    }

  return (
      <div className = "signin-container">
        <h2>Login</h2>
        <form>
        <input 
          type="email" 
          placeholder="Email Id"
          required
          onChange={(e) => setEmailExist(e.target.value)}
        />
        <input 
          type = "password"
          placeholder = "Password" 
          name = "Password"
          required
          onChange={(e) => setPasswordExist(e.target.value)}
        />
        <input 
          type = "button" 
          value = "Login"
          onClick={handleLogin}
        />
      </form>
      <p class="sign-up-link">Already have an account? <a href="/signup">Sign Up</a></p>
    </div>
    )
}

export default Login
