import style from "./Table.module.css";
import { useEffect, useState, useRef } from "react";

const Table = ({ dados }) => {
  const [tabela, setTabela] = useState();
  const elementosLi = useRef(null);

  const verificaTabelaIMC = () => {
    //pega todos elementos li
    const elementos = elementosLi.current.querySelectorAll("li");

    elementos.forEach((element) => {
      const id = parseInt(element.id);
      const valorSelecionado =
        (dados <= 18.5 && id === 1) ||
        (dados > 18.5 && dados <= 24.9 && id === 2) ||
        (dados > 24.9 && dados <= 29.9 && id === 3) ||
        (dados > 29.9 && dados <= 34.9 && id === 4) ||
        (dados > 34.9 && dados <= 39.9 && id === 5) ||
        (dados > 39.9 && id === 6);

      if (dados && valorSelecionado) {
        element.classList.add(style.tableItemActive);
      } else {
        element.classList.remove(style.tableItemActive);
      }
    });

    setTabela(dados);
  };

  useEffect(() => {
    verificaTabelaIMC();
  }, [dados]);

  return (
    <div className={style.containerTable}>
      <h2 className={style.imc}>Seu IMC: {dados}</h2>
      <ul className={style.table} ref={elementosLi}>
        <h2 className={style.tableName}>Tabela IMC</h2>
        <li id="1" className={style.tableItem}>
          <b>Abaixo de 18,5: </b>Abaixo do peso
        </li>
        <li id="2" className={style.tableItem}>
          <b>18,6 a 24,9: </b>Peso normal (ou eutrófico)
        </li>
        <li id="3" className={style.tableItem}>
          <b>25,0 a 29,9:</b> Sobrepeso
        </li>
        <li id="4" className={style.tableItem}>
          <b>30,0 a 34,9: </b>Obesidade grau I
        </li>
        <li id="5" className={style.tableItem}>
          <b>35,0 a 39,9:</b>Obesidade grau II
        </li>
        <li id="6" className={style.tableItem}>
          <b>Acima de 40:</b> Obesidade grau III (obesidade mórbida)
        </li>
      </ul>
    </div>
  );
};

export default Table;
