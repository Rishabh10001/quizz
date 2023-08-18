import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
// import { SignupContainer,Heading2,Form,StyledInput,StyledSelect,StyledButton } from './style';
import axios from 'axios';
import { Form, Heading2, SignupContainer, StyledInput, StyledSelect } from './style';
=======
import './style.css'
import axios from 'axios';
>>>>>>> 9d0cece42b0aea40901f13549fd47cea0e84e4b3

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("");
    const [contact, setContact] = useState("");
    const navigate = useNavigate();

<<<<<<< HEAD
    axios.post('https://server-api-4rz6.onrender.com/api/user/add',{
        username:username ,
        password:password , 
        confirmpassword :confirmpassword ,
        role_id : parseInt(role), 
        email : email}
        ).then((response) => {
            console.log("success");
            alert('Registration Successful');
    }).catch(console.error()).finally();

    const add = () => {
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
        navigate("/")
    }
    
    const handleSignUp = (e) => {
        if(JSON.parse(localStorage.getItem(email)))
        {
            alert("the entered email already exists")
        }
        else if (password === confirmpassword) {
            add()
=======
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
>>>>>>> 9d0cece42b0aea40901f13549fd47cea0e84e4b3
        } else {
            alert("Passwords do not match")
        }
    }
<<<<<<< HEAD
    
=======
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

>>>>>>> 9d0cece42b0aea40901f13549fd47cea0e84e4b3
    return (
        <>    
        <SignupContainer>
        <div>
            <Heading2>
                <h2>Registration</h2>
            </Heading2>
            <Form>
            <form>
            <StyledInput        
                type="text" 
                placeholder="Username" 
                required 
                onChange={(e) => setUsername (e.target.value)}
            />
<<<<<<< HEAD
            <StyledInput 
                type="email" 
                placeholder="Email ID" 
=======
            <input 
                type="text" 
                placeholder="contact" 
>>>>>>> 9d0cece42b0aea40901f13549fd47cea0e84e4b3
                required
                onChange={(e) => setContact (e.target.value)}                
            />
            <StyledInput
                type="password" 
                placeholder="Password" 
                required
                onChange={(e) => setPassword (e.target.value)}    
            />
            <StyledInput
                type="password" 
                placeholder="Confirm Password" 
                required
                onChange={(e) => setConfirmPassword (e.target.value)}
            />
<<<<<<< HEAD
            <StyledSelect onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled selected>--Select Role--</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
            </StyledSelect>
            <button 
                type="button"
=======
            <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
                <option value="" disabled selected>--Select Role--</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
            </select>
            <input 
                type="submit"
                value="Signup"
>>>>>>> 9d0cece42b0aea40901f13549fd47cea0e84e4b3
                onClick={handleSignUp}
            >   
                SignUp
            </button>
            </form>
            </Form>
            <p>Already have an Account ? <a href="/">Login</a></p>
            </div>
            </SignupContainer>
    </>
  )
}

export default Registration
