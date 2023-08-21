import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignUp from './style';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("");
    const [contact, setContact] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        if(password === confirmpassword){
            add(e)
        }
        else{
            alert("Password doesn't match .")
        }
    }
    
    const add = (e) => {
        e.preventDefault()
        e.target.value = "Signing Up ..."
        e.target.disabled = true
        console.log(role)
        axios.post("https://server-api1-li2k.onrender.com/api/user/add",{
            username,
            contact,
            password,
            role
        }).then(response => {
            console.log(response.data)
        }).catch(console.log)
        .finally(() => {
            e.target.value = "Signup"
            e.target.disabled = false
            setUsername("")
            setContact(null)
            setPassword(null)
            setRole(null)
            navigate("/")
        })
    }

    return (
        <SignUp>    
        <h2>Registration</h2>
        <div className='SignUpContainer'>
            <form>
            <input       
                type="text" 
                placeholder="Username" 
                required 
                onChange={(e) => setUsername (e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Contact" 
                required
                onChange={(e) => setContact (e.target.value)}                
            />
            <input
                type="password" 
                placeholder="Password" 
                required
                onChange={(e) => setPassword (e.target.value)}    
            />
            <input
                type="password" 
                placeholder="Confirm Password" 
                required
                onChange={(e) => setConfirmPassword (e.target.value)}
            />
            <select onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled selected>--Select Role--</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
            </select>
            <input 
                type="button"
                className='Button'
                value = "SignUp"
                onClick={ handleSignUp } 
            />
            </form>
            </div>
            <p>Already have an Account ? <a href="/">Login</a></p>
    </SignUp>
  )
}

export default Registration
