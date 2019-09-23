import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="row">
        <label>Choose currency</label>
        <select className="u-full-width">
          <option value="">Currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="row">
        <label>Choose Cryptocurrency</label>
        <select className="u-full-width">
          <option value="">Cryptocurrency</option>
        </select>
      </div>
    </form>
  );
};

export default Formulario;
