import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {LogIn,Heading,SignInContainer,SignInForm,SignInInput,SignUpLink,SignUpAnchor} from "./style";

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
      <SignInContainer>
        <div className = "signin-container">
        <Heading><h2>Login</h2></Heading>
        <SignInForm>
        <form>
        <SignInInput
          type="email" 
          placeholder="Email Id"
          required
          onChange={(e) => setEmailExist(e.target.value)}
        />
        <SignInInput      
          type = "password"
          placeholder = "Password" 
          name = "Password"
          required
          onChange={(e) => setPasswordExist(e.target.value)}
        />
        <button
          type = "button"
          onClick={handleLogin}>
            Login
        </button>
      </form>
      </SignInForm>
      <SignUpLink>
        <p class="sign-up-link">Already have an account? <SignUpAnchor><a href="/signup">Sign Up</a></SignUpAnchor></p>
      </SignUpLink>
    </div>
    </SignInContainer>
    </LogIn>
    )
}

export default Login
