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
      if(retrievedUser.role === "teacher")
      {
        navigate("/question-form")
      }
    }

  return (
    <form>
      <input 
        type="email" 
        placeholder="email"
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
  )
}

export default Login
