import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import axios from 'axios';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("");
    const [contact, setContact] = useState("");
    const navigate = useNavigate();

    // const add = () => {
    //     var user = {
    //         username : username,
    //         email : email,
    //         password : password,
    //         role : role,
    //     }
    //     localStorage.setItem(email, JSON.stringify(user))
    //     var retrievedUser = JSON.parse(localStorage.getItem(email));
    //     console.log(retrievedUser.username);
    //     console.log(retrievedUser.password);
    //     console.log(retrievedUser.role);
    //     navigate("/")
    //     // localStorage.clear();
    // }
    
    const handleSignUp = (e) => {
        if (password === confirmpassword) {
            add(e)
        } else {
            alert("Passwords do not match")
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
        <>
        <div class="signup-container">
        <h2>Registration</h2>
        <form>
            <input 
                type="text" 
                placeholder="Username" 
                required 
                onChange={(e) => setUsername (e.target.value)}
            />
            <input 
                type="text" 
                placeholder="contact" 
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
            <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
                <option value="" disabled selected>--Select Role--</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
            </select>
            <input 
                type="submit"
                value="Signup"
                onClick={handleSignUp}
            />
        </form>
        <a href="/">Login</a>
    </div>
    </>
  )
}

export default Registration
