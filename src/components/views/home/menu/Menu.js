import axios from "axios";
import { useEffect, useState } from "react";
import MenuView from "./MenuView";

export default function Menu(){

    const [food, setFood] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() =>{

        getFood();
        getFoodInfo();
     
    },[])

    async function getFood(){
        console.log("food");
        let url = "https://api.spoonacular.com/recipes/complexSearch?number=4&apiKey=ffe601b2c0bf40e99eca791908d30c41";

        try{
            const res = await axios.get(url);
            console.log(res.data.results);
            setFood(res.data.results);



        }catch(err){
            console.log(err);
        }
    }

    console.log("food",food);

    // console.log(food.id);

    async function getFoodInfo(){
        console.log("info");
        console.log("food 2",food);
        for(let e = 0; e<food.length;e++){
            
            let url = `https://api.spoonacular.com/recipes/${food[e].id}/information?includeNutrition=false&apiKey=ffe601b2c0bf40e99eca791908d30c41`;

            try{
                const res = await axios.get(url);
                console.log(res);

                let obj = {
                    id: res.data.id,
                    title: res.data.title,
                    image: res.data.image,
                    readyIn: res.data.readyInMinutes,
                    price: res.data.pricePerServing,
                    healtScore: res.data.healtScore
                }

                console.log("ID",obj);
                setInfo((info) => [...info,obj]);
            }catch(err){
                console.log(err);
            }

        }
    }

    console.log("info",info);

    return(
        <>
        {info.map((el)=>(
            <MenuView key={el.id} title={el.title} image={el.image}/>
        ))}
        </>

    )
}