import { useState } from "react"
import LogIn from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

    const [contactExist, setContactExist] = useState("");
    const [passwordExist, setPasswordExist] = useState("");

        const add = (e) => {
          e.preventDefault()
          e.target.value = "Logging In ..."
          e.target.disabled = true
          axios.post("https://server-api1-li2k.onrender.com/api/user/login",{
            contact : contactExist,
            password : passwordExist
          })
          .then(response => {
            console.log(response.data)
            if(response.data){
              alert(`Welcome  ${response.data.role}`)
              if(response.data.role === "faculty"){
                navigate("/create-quiz")
              }
              else if(response.data.role === "student"){
                navigate("/quizes")
              }
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
        <h2>Log In</h2>
        <div className="SignInContainer">
        <form>
        <input
          type="text" 
          placeholder="Contact Number"
          required
          onChange={(e) => setContactExist(e.target.value)}
        />
        <input      
          type = "password"
          placeholder = "Password" 
          required
          onChange={(e) => setPasswordExist(e.target.value)}
        />
        <input
          type = "button"
          className="Button"
          value = "Log In"
          onClick={ add }
        />
      </form>
    </div>
        <p class="sign-up-link">Don't have an account? <a href="/signup">Sign Up</a></p>
    
    </LogIn>
    )
}

export default Login
