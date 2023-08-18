import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {LogIn,Heading,SignInContainer,SignInForm,SignInInput,SignUpLink,SignUpAnchor} from "./style";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
    const [contactExist, setContactExist] = useState("");
    const [passwordExist, setPasswordExist] = useState("");

    // const retrievedUser = JSON.parse(localStorage.getItem(emailExist));

    // const handleLogin = () => 
    // {
    //     console.log(retrievedUser)
    //     if(retrievedUser?.email && retrievedUser?.password === passwordExist)
    //     {  
    //       logUser() 
    //     }
    //     else{
    //       alert("Wrong credentials")
    //     }
    // }

    // const logUser = () => {
    //   if(retrievedUser.role === "faculty")
    //   {
    //     navigate("/create-quiz") 
    //   }
    //   if(retrievedUser.role === "student")
    //   {
    //     navigate("/questions")
    //   }
    // }
        const add = (e) => {
          e.preventDefault()
          e.target.value = "loging Up ..."
          e.target.disabled = true
          axios.post("https://server-api1-li2k.onrender.com/api/user/login",{
            contact : contactExist,
            password : passwordExist
          }).then(response => {
            console.log(response.data)
            if(response.data){
            alert("welcome")
            }
            else{
            alert("Invalid user")
            }
          }).catch(console.log)
          .finally(() => {
            e.target.value = "Login"
            e.target.disabled = false
          })
        }

  return (
    <LogIn>
      <SignInContainer>
        <div className = "signin-container">
        <Heading><h2>Login</h2></Heading>
        <SignInForm>
        <form>
        <SignInInput
          type="text" 
          placeholder="contact"
          required
          onChange={(e) => setContactExist(e.target.value)}
        />
        <SignInInput      
          type = "password"
          placeholder = "Password" 
          name = "Password"
          required
          onChange={(e) => setPasswordExist(e.target.value)}
        />
        <button
          type = "Login"
          onClick={add}
        >
            Login
        </button>
      </form>
      </SignInForm>
      <SignUpLink>
        <p class="sign-up-link">Don't have an account? <SignUpAnchor><a href="/signup">Sign Up</a></SignUpAnchor></p>
      </SignUpLink>
    </div>
    </SignInContainer>
    </LogIn>
    )
}

export default Login
