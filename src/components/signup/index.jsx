import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { SignupContainer,Heading2,Form,StyledInput,StyledSelect,StyledButton } from './style';
import axios from 'axios';
import { Form, Heading2, SignupContainer, StyledInput, StyledSelect } from './style';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

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
        } else {
            alert("Passwords do not match")
        }
    }
    
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
            <StyledInput 
                type="email" 
                placeholder="Email ID" 
                required
                onChange={(e) => setEmail (e.target.value)}                
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
            <StyledSelect onChange={(e) => setRole(e.target.value)}>
                    <option value="" disabled selected>--Select Role--</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
            </StyledSelect>
            <button 
                type="button"
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
