import "./Accordion.css";

const Accordion = () => {
  return (
    <div className="accordion accord" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Datos de Ingreso
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              <strong>Email: </strong> challenge@alkemy.org
            </p>
            <br />
            <p>
              <strong>Passoword: </strong>react
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
