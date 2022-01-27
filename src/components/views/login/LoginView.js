import {useRef,useState,useEffect} from 'react';
import axios from "axios";


export default function LoginView(){

    //useRef nos permite acceder al dom directamente para manipular los elementos
    //este useRef siempre genera un objecto mutable con una unica propiedad "current"
    const emailRef = useRef();
    const errRef = useRef();
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() =>{
        emailRef.current.focus();
    },[])

    useEffect(() =>{
        setErrMsg("");
    },[email,password])

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const response = await axios.post("http://challenge-react.alkemy.org/",
            JSON.stringify({email,password}),
            {   
                headers: { 'Content-Type': 'application/json' }
            }
            );
            console.log(JSON.stringify(response.data));
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log("datos incorrectos");
        }


    }

    
    return (    
    <div className="box-style" noValidate>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                ref={emailRef}
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
)
}