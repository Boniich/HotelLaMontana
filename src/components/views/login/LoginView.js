import React, {useRef,useState,useEffect} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

export default function LoginView(){

    const [email, setEmail] = useState({email:"",valido:false});
    const [password, setPassword] = useState({password: "",valido: false});

    //tests

    const navigate = useNavigate();
    const location = useLocation();

    const expressiones = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password:  /^.{4,12}$/
    }

    const validateEmail = () =>{

        if(expressiones.email.test(email.email)){
            console.log("email correcto");
            setEmail({...email,valido: true});


        }else{
            console.log("email incorrecto");
            setEmail({...email,valido: false});
        }

    }

    const validatePassword = () =>{

        if(expressiones.password.test(password.password)){
            console.log("password correcto");
            setPassword({...password,valido: true});


        }else{
            console.log("password incorrecto");
            setPassword({...password,valido: false});
        }
    }



    const handleSubmit = async(e) =>{
        e.preventDefault();
        // MySwal.fire({
        //     title: "Procesando informacion",
        //     text: "Espere por favor",   
        //     allowOutsideClick: false,
        //     showConfirmButton: false,
        // });

        try {

            const response = await axios.post("http://challenge-react.alkemy.org/",
            JSON.stringify({
                email:email.email,
                password: password.password
            }),
            {   
                headers: { 'Content-Type': 'application/json' }
            }
            );
            const token = JSON.stringify(response.data);
            console.log(token);
            localStorage.setItem("token",token)
            setEmail({...email,email: ""});
            setPassword({...password,password: ""});
            navigate("home")
        } catch (error) {

            if(email.valido === false & password.valido === false){
                MySwal.fire({
                    icon: 'warning',
                    title: 'Campos de Email y password estan vacios',
                    text: 'Por favor, complete los campos!',
                })
            }else if(!error.response){
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
    <div className="box-style">
    <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                aria-describedby="emailHelp"
                autoComplete='off'
                onBlur={validateEmail}
                onChange={(e) => setEmail({...email,email: e.target.value})}
                value={email.email}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password"
                onBlur={validatePassword}
                onChange={(e) => setPassword({...password, password:e.target.value})}
                value={password.password}
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
)
}