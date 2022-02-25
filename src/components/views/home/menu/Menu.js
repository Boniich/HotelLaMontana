import MenuView from "./MenuView";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DELETE_MSG } from "./sweetAlertMenuObj";

const MySwal = withReactContent(Swal);

export default function Menu({
  info,
  price,
  readyIn,
  healthScore,
  setInfo,
  setPrice,
  setReadyIn,
  setHealthScore,
}) {
  const deleteFromMenu = (id) => {
    MySwal.fire(DELETE_MSG).then((result) => {
      if (result.isConfirmed) {
        let itemDeleted = info.filter((el) => el.id === id);
        let data = info.filter((el) => el.id !== id);

        setInfo(data);

        //update scores
        setPrice(price - itemDeleted[0].price);
        setReadyIn(readyIn - itemDeleted[0].readyIn);
        setHealthScore(healthScore - itemDeleted[0].healthScore);

        MySwal.fire(
          "Eliminado!",
          "El plato ha sido elimnado del menu.",
          "success"
        );
      }
    });
  };

  return (
    <>
      {info.map((el) => (
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
  );
}
