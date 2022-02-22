import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { LOADING_MSG, NOT_RESPONSE_SERVER } from "../consts/sweetAlertMsg";

const MySwal = withReactContent(Swal);

const CONECTION_ERROR_FOOD_API = {
  icon: "error",
  title: "oops...",
  text: "Es muy posible que se hayan agotado las peticiones a la API, por favor, itentalo mañana nuevamente",
};

export const useFood = () => {
  const [food, setFood] = useState([]);
  console.log("entro en food");
  useEffect(() => {
    MySwal.fire(LOADING_MSG);
    getFood();
  }, []);

  async function getFood() {
    console.log("food");

    let url = `${process.env.REACT_APP_RECIPE_API}complexSearch?number=4&${process.env.REACT_APP_API_KEY}`;

    try {
      const res = await axios.get(url);
      setFood(res.data.results);
    } catch (err) {
      if (err?.response.status === 401 || err?.response.status === 404) {
        MySwal.fire(NOT_RESPONSE_SERVER);
      } else if (err?.response.status === 402) {
        MySwal.fire(CONECTION_ERROR_FOOD_API);
      }
    }
  }

  return { food };
};
