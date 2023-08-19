import { useState } from "react"
import { useNavigate } from "react-router-dom";
import LogIn from "./style";

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
