import axios from "axios";
import { useEffect, useState } from "react";
import MenuView from "./MenuView";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteMsg } from "./MsgObj";

const MySwal = withReactContent(Swal);

export default function Menu(){

    const [food, setFood] = useState([]);

    useEffect(() =>{
        getFood();
        
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

    const deleteFromMenu = (id) =>{

        MySwal.fire(deleteMsg).then((result) => {
            if (result.isConfirmed) {

            let data = food.filter(el => el.id !== id);
            setFood(data);

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
        {food.map((el)=>(
            <MenuView 
                key={el.id} 
                id={el.id}
                title={el.title} 
                image={el.image}
                deleteFromMenu={deleteFromMenu}/>
        ))}
        </>

    )
}