import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <h2>Registration</h2>
    <form action="">
        <input 
            type="text" 
            placeholder='username'
            name='username'
            required
            onChange={(e) => setUsername(e.target.value)}
        />
        <input 
            type="email" 
            placeholder='enter email id'
            required
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="password" 
            placeholder='password'
            name='password'
            required
            onChange={(e) => setPassword(e.target.value)}
        />
        <input 
            type="password" 
            placeholder='confirm-password'
            required
            name='confirm-password'
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
            <option value="." disabled selected >--Select the role--</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
        </select>
        <input 
            type="button" 
            value='SignUp'
            onClick={handleSignUp}
        />
        <h3>Existing User</h3>
        <a href="/login"><p className="link">Login Here!</p></a>
    </form>
    </>
  )
}

export default Registration
