import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="alert alert-warning" role="alert">
        <h1 className="alert-title">Pagina no encontrada</h1>
        <p className="alert-title">
          Haz click en el enlace de abajo para volver al Home.
          <br />
          Recuerda que si no estas autentificado, seras regresado al login.
        </p>
        <div className="alert-title">
          <Link to="/">
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
