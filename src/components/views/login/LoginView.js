import "./LoginView.css"
import React, {useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLocation, useNavigate } from 'react-router-dom';
import { TitleAndDescription } from '../../common/titleAndDescription/TitleAndDescription';
import { LOADING_MSG, NOT_RESPONSE_SERVER } from "../../../consts/sweetAlertMsg";
import { EMPTY_FIELDS, WRONG_DATA } from "./sweetAlertLoginObj";

const MySwal = withReactContent(Swal);

export default function LoginView(){

    const [email, setEmail] = useState({email:"",valido:null});
    const [password, setPassword] = useState({password: "",valido: null});

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

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
        MySwal.fire(LOADING_MSG);
        try {

            const response = await axios.post(process.env.REACT_APP_LOGIN_URL,
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
            localStorage.setItem("token",token);
            MySwal.close();
            setEmail({...email,email: ""});
            setPassword({...password,password: ""});
            navigate(from,{replace: true});
        } catch (error) {

            if(email.valido === null & password.valido === null){
                MySwal.fire(EMPTY_FIELDS);
            }else if(!error.response){
                MySwal.fire(NOT_RESPONSE_SERVER)
            }else if(error?.response.status === 401){
                MySwal.fire(WRONG_DATA)
            }

        }


    }    
    return (   

    <section>
    <TitleAndDescription 
        title="Hotel La Montaña" 
        description="Disfruta de tus vaciones!" 
    />

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
            {email.valido === false && 
            <div className='boxErrors'><p className="error">El email no es correcto</p></div>}
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
            {password.valido === false && 
            <div className='boxErrors'><p className="error">La password no es correcta</p></div>}
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    </div>
    </section>

)
}