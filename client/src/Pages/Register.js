import { useState } from "react";

const Register = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    async function register(ev){  
        try{                             //waits till the server responds
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register',{
            method : 'POST',
            body : JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        });
        alert("registration seccessfull!"); 
        }catch(e){
            alert("registration unseccessfull!");
        }
    }
        // if(response.status === 200){
        //     alert("registration seccessfull!"); 
        // }
        // else{
        //     alert("registration unseccessfull!");
        // }
            
        
    


    return (  
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" 
            placeholder="Username"
            value={username}
            onChange={(ev)=>setUsername(ev.target.value)}/>

            <input type="password" 
            placeholder="Password"
            value={password}
            onChange={(ev)=>setPassword(ev.target.value)}/>
            <button>Register</button>
        </form>
        
    );
}
 
export default Register;
