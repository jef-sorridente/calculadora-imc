import style from "./Table.module.css";
import { useEffect, useState } from "react";

const Table = ({ dados }) => {
  // const elementosLi = useRef(null);
  // const verificaTabelaIMC = () => {
  //   //pega todos elementos li
  //   const elementos = elementosLi.current.querySelectorAll("li");

  //   elementos.forEach((element) => {
  //     const id = parseInt(element.id);
  //     const valorSelecionado =
  //       (dados <= 18.5 && id === 1) ||
  //       (dados > 18.5 && dados <= 24.9 && id === 2) ||
  //       (dados > 24.9 && dados <= 29.9 && id === 3) ||
  //       (dados > 29.9 && dados <= 34.9 && id === 4) ||
  //       (dados > 34.9 && dados <= 39.9 && id === 5) ||
  //       (dados > 39.9 && id === 6);

  //     if (dados && valorSelecionado) {
  //       element.classList.add(style.tableItemActive);
  //     } else {
  //       element.classList.remove(style.tableItemActive);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   verificaTabelaIMC();
  // }, [dados]);
  const [itensAtivos, setItensAtivos] = useState([]);

  const tabelaIMC = [
    { id: 1, faixa: "Abaixo de 18,5:", descricao: "Abaixo do peso" },
    { id: 2, faixa: "18,6 a 24,9:", descricao: "Peso normal (ou eutrófico)" },
    { id: 3, faixa: "25,0 a 29,9:", descricao: "Sobrepeso" },
    { id: 4, faixa: "30,0 a 34,9:", descricao: "Obesidade grau I" },
    { id: 5, faixa: "35,0 a 39,9:", descricao: "Obesidade grau II" },
    {
      id: 6,
      faixa: "Acima de 40:",
      descricao: "Obesidade grau III (obesidade mórbida)",
    },
  ];

  useEffect(() => {
    const mostraItemAtivo = tabelaIMC
      .filter((item) => {
        switch (item.id) {
          case 1:
            return dados > 0 && dados <= 18.5;
          case 2:
            return dados > 18.5 && dados <= 24.9;
          case 3:
            return dados > 24.9 && dados <= 29.9;
          case 4:
            return dados > 29.9 && dados <= 34.9;
          case 5:
            return dados > 34.9 && dados <= 39.9;
          case 6:
            return dados > 39.9;
          default:
            return false;
        }
      })
      .map((item) => item.id);

    setItensAtivos(mostraItemAtivo);
  }, [dados]);

  return (
    <div className={style.containerTable}>
      <h2 className={style.imc}>Seu IMC: {dados}</h2>
      <ul className={style.table}>
        <h2 className={style.tableName}>Tabela IMC</h2>
        {tabelaIMC.map((item) => (
          <li
            key={item.id}
            id={item.id}
            className={`${style.tableItem} ${
              itensAtivos.includes(item.id) ? style.tableItemActive : ""
            }`}
          >
            {" "}
            <b>{item.faixa}</b> {item.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
