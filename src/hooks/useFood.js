import { useEffect, useState } from "react"
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { loadingMsg } from "../consts/sweetAlertMsg";

const MySwal = withReactContent(Swal);

const CONECTION_ERROR_FOOD_API ={
    icon: 'error',
    title: 'oops...',
    text: 'Es muy posible que se hayan agotado las peticiones a la API, por favor, itentalo mañana nuevamente',
}

export const useFood = () =>{

    const [food, setFood] = useState([]);
    console.log("entro en food");
    useEffect(() =>{
        MySwal.fire(loadingMsg);
        getFood();
    },[]);


    async function getFood(){
        console.log("food");
        let url = "https://api.spoonacular.com/recipes/complexSearch?number=4&apiKey=ffe601b2c0bf40e99eca791908d30c41";

        try{
            const res = await axios.get(url);
            setFood(res.data.results);

        }catch(err){
            if(err?.response.status === 402){
                MySwal.fire(CONECTION_ERROR_FOOD_API);
            }
            
        }
    }


    
    return {food}

}