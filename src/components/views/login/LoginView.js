import {useRef,useState,useEffect} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function LoginView(){

    //useRef nos permite acceder al dom directamente para manipular los elementos
    //este useRef siempre genera un objecto mutable con una unica propiedad "current"
    const emailRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() =>{
        emailRef.current.focus();
    },[])

    // useEffect(() =>{},[email,password])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        MySwal.fire({
            title: "Procesando informacion",
            text: "Espere por favor",   
            allowOutsideClick: false,
            showConfirmButton: false,
        });
        try {
            const response = await axios.post("http://challenge-react.alkemy.org/",
            JSON.stringify({email,password}),
            {   
                headers: { 'Content-Type': 'application/json' }
            }
            );
            const token = JSON.stringify(response.data);
            console.log(token);
            localStorage.setItem("token",token)
            setEmail("");
            setPassword("");
        } catch (error) {
            if(!error.response){
                MySwal.fire({
                    icon: 'error',
                    title: 'oops...',
                    text: 'No fue posible conectar con el servidor, por favor intentelo tarde',
                  })

            }else if(error?.response.status === 401){

                MySwal.fire({
                    icon: 'warning',
                    title: 'Email y/o password no son correctos',
                    text: 'Por favor, verifique sus datos!',
                  })

            }

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