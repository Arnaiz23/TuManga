import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSliders,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import getFilters from "@/services/getFilters";
import FilterCheckbox from "@components/publicFolder/FilterCheckbox/FilterCheckbox";

export default function ModalProductFilter({ type }) {
  const [modalShow, setModalShow] = useState("");
  const [optionsShow, setOptionsShow] = useState("");
  const setLoading = useState(false)[1];
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setLoading(true);
    getFilters().then((res) => {
      setLoading(false);
      setFilters(res.categories);
      // console.log(res.products);
    });
  }, [setLoading]);

  const showModal = () => {
    modalShow === "modalFilterActive"
      ? setModalShow("")
      : setModalShow("modalFilterActive");
  };

  const showOptions = () => {
    optionsShow === "selectActive"
      ? setOptionsShow("")
      : setOptionsShow("selectActive");
  };

  const changeFilters = () => {
    setModalShow("");
  };

  return (
    <div className="selectOrder">
      <div className="filterResponsive" onClick={showModal}>
        <button className="btnFilter">
          <i>
            <FontAwesomeIcon icon={faSliders} />
          </i>
          Filtrar
        </button>
      </div>
      <div className={`optionsFilterResponsive ${modalShow}`}>
        <header>
          <button id="closeModalFilter" onClick={showModal}>
            <i>
              <FontAwesomeIcon icon={faXmark} />
            </i>
            Cerrar
          </button>
        </header>
        <section>
          {type === "mangas" && (
            <div className="containerFilterResponsive">
              <h3>Tipos</h3>
              <div>
                <input type="checkbox" name="" id="" />
                <p>Novela ligera</p>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <p>Manga</p>
              </div>
            </div>
          )}
          <div className="containerFilterResponsive containerCategories">
            <h3>Categorias</h3>
            {filters.map((filter) => (
              <FilterCheckbox name={filter} size="none" key={filter} />
            ))}
          </div>
        </section>
        <footer>
          <button className="btn btn-primary" onClick={changeFilters}>
            Aplicar filtros
          </button>
        </footer>
      </div>
      <div>
        <button className="selectOrderOptions" onClick={showOptions}>
          Ordenar
          <i>
            <FontAwesomeIcon icon={faAngleDown} />
          </i>
        </button>
        <ul className={`optionsSelectOrder ${optionsShow}`}>
          <li>Precio más bajo</li>
          <li>Precio más alto</li>
          <li>Novedades</li>
          <li>Más vendidos</li>
        </ul>
      </div>
    </div>
  );
}
