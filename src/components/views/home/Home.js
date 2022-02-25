import React, { useEffect, useState } from "react";
import "./Home.css";
import { TitleAndDescription } from "../../common/titleAndDescription/TitleAndDescription";
import axios from "axios";
import { useFood } from "../../../hooks/useFood";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Scores from "./scores/Scores";
import Menu from "./menu/Menu";

const MySwal = withReactContent(Swal);

export default function Home() {
  let priceTotal = 0;
  let readyInTotal = 0;
  let healthScoreTotal = 0;

  const [info, setInfo] = useState([]);
  const [price, setPrice] = useState(0);
  const [readyIn, setReadyIn] = useState(0);
  const [healthScore, setHealthScore] = useState(0);

  const { food } = useFood();

  useEffect(() => {
    getFoodInfo();
  }, [food]);

  async function getFoodInfo() {
    for (let e = 0; e < food.length; e++) {
      console.log("entro");
      let url = `${process.env.REACT_APP_RECIPE_API}${food[e].id}/information?includeNutrition=false&${process.env.REACT_APP_API_KEY}`;

      try {
        const res = await axios.get(url);
        console.log(res);

        let obj = {
          id: res.data.id,
          title: res.data.title,
          image: res.data.image,
          readyIn: res.data.readyInMinutes,
          price: res.data.pricePerServing,
          healthScore: res.data.healthScore,
        };
        console.log(obj);

        priceTotal += obj.price;
        readyInTotal += obj.readyIn;
        healthScoreTotal += obj.healthScore;

        console.log("ID", obj);
        setInfo((info) => [...info, obj]);

        MySwal.close();
      } catch (err) {
        console.log(err);
      }
    }

    setPrice(priceTotal);
    setReadyIn(readyInTotal);
    setHealthScore(healthScoreTotal);
  }

  return (
    <div className="container">
      <TitleAndDescription
        title="Home"
        description="Selecciona la comida perfecta para ti!"
      />

      <Scores price={price} readyIn={readyIn} healthScore={healthScore} />

      <section className="flex-box">
        <Menu
          info={info}
          price={price}
          readyIn={readyIn}
          healthScore={healthScore}
          setInfo={setInfo}
          setPrice={setPrice}
          setReadyIn={setReadyIn}
          setHealthScore={setHealthScore}
        />
      </section>
    </div>
  );
}
