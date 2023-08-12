import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const add = () => {
        // localStorage.setItem(username,password)
        // console.log(localStorage.getItem(username))
        // let id = 'id-' + new Date().getTime()
        var user = {
            username : username,
            email : email,
            password : password,
            role : role,
        }
        localStorage.setItem(email, JSON.stringify(user))
        var retrievedUser = JSON.parse(localStorage.getItem(email));
        console.log(retrievedUser.username);
        console.log(retrievedUser.password);
        console.log(retrievedUser.role);
        navigate("/login")
        // localStorage.clear();
    }
    
    const handleSignUp = () => {
        if (password === confirmpassword) {
            add()
        } else {
            alert("Passwords do not match")
        }
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
                type="email" 
                placeholder="Email ID" 
                required
                onChange={(e) => setEmail (e.target.value)}                
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
                <option value="." disabled selected>--Select Role--</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
            </select>
            <input 
                type="button"
                value="Signup"
                onClick={handleSignUp}
            />
        </form>
        <p class="sign-in-link">Already have an account? <a href="/login">Sign In</a></p>
    </div>
    </>
  )
}

export default Registration
