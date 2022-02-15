import axios from "axios";
import { useEffect, useState } from "react";
import MenuView from "./MenuView";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useFood } from "../../../../hooks/useFood";
import { DELETE_MSG } from "./sweetAlertMenuObj";

const MySwal = withReactContent(Swal);

export default function Menu(){

    const [info, setInfo] = useState([]);

    const {food} = useFood();
    
    useEffect(() =>{
        getFoodInfo();
    },[food])

    async function getFoodInfo(){
        
        for(let e = 0; e<food.length;e++){
            console.log("entro");
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
                    healthScore: res.data.healthScore
                }

                console.log("ID",obj);
                setInfo((info) => [...info,obj]);
                MySwal.close();
            }catch(err){
                console.log(err);
            }

        }
    }


    const deleteFromMenu = (id) =>{

        MySwal.fire(DELETE_MSG).then((result) => {
            if (result.isConfirmed) {

            let data = info.filter(el => el.id !== id);
            setInfo(data);

              MySwal.fire(
                'Eliminado!',
                'El plato ha sido elimnado del menu.',
                'success'
              )
            }
          })
    }

    return(
        <>
        {info.map((el)=>(
            <MenuView 
                key={el.id} 
                id={el.id}
                title={el.title} 
                image={el.image}
                price={el.price}
                readyIn={el.readyIn}
                healthScore={el.healthScore}
                deleteFromMenu={deleteFromMenu}
                />
        ))}
        </>

    )
}