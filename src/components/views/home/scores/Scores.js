import "./Scores.css";
const Scores = ({ price, readyIn, healthScore }) => {
  return (
    <div className="scores-box">
      <h1>Total</h1>
      <div className="scores">
        <p>
          <b>Precio total</b>: ${price}
        </p>
        <p>
          <b>Tiempo de preparacion Total</b>: {readyIn} min
        </p>
        <p>
          <b>HealtScore Total</b>: {healthScore} puntos
        </p>
      </div>
    </div>
  );
};

export default Scores;
