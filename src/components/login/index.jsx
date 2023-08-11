import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const [userExist, setUserExist] = useState("");
    const [passwordExist, setPasswordExist] = useState("");

    const retrievedUser = JSON.parse(localStorage.getItem(userExist));

    const handleLogin = () => 
    {
        // const retrievedUser = JSON.parse(localStorage.getItem(userExist));
        console.log(retrievedUser)
        if(retrievedUser.username && retrievedUser.password === passwordExist)
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
        type = "text" 
        placeholder = "Username"
        name = "Username"
        required
        onChange={(e) => setUserExist(e.target.value)}
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
