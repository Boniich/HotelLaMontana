import { useEffect, useState } from "react"
import axios from "axios";

export const useFood = () =>{

    const [food, setFood] = useState([]);
    console.log("entro en food");
    useEffect(() =>{

        getFood();

    },[]);


    async function getFood(){
        console.log("food");
        let url = "https://api.spoonacular.com/recipes/complexSearch?number=4&apiKey=ffe601b2c0bf40e99eca791908d30c41";

        try{
            const res = await axios.get(url);
            // console.log(res.data.results);
            setFood(res.data.results);

        }catch(err){
            console.log(err);
        }
    }


    
    return {food}

}