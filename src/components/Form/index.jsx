import { useState } from "react";
import style from "./Form.module.css";

import { InputMask } from "@react-input/mask";

const Form = ({ formulario }) => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [mensagemAlerta, setMensagemAlerta] = useState(
    "Informe seu peso e sua altura!"
  );
  const [info, setInfo] = useState(false);

  const abrirInfo = (elemento) => {
    const pegaElementoParente = elemento.target.parentNode;
    const elementoP = pegaElementoParente.querySelector("p");
    const alturadoConteudo = elementoP.scrollHeight;

    if (info) {
      elementoP.style.height = 0;
      setInfo(false);
    } else {
      elementoP.style.height = alturadoConteudo + "px";
      setInfo(true);
      console.log("abriu");
    }
  };

  const calculaResultado = (e) => {
    e.preventDefault();

    let imc = peso / (altura * altura);
    let resultadoIMC = imc.toFixed(2);

    if (peso && altura) {
      formulario(resultadoIMC);
      setMensagemAlerta("Cálculo realizado.");
    } else if (altura) {
      setMensagemAlerta("Informe seu peso!");
    } else if (peso) {
      setMensagemAlerta("Informe sua altura!");
    } else {
      setMensagemAlerta("Informe seu peso e sua altura!");
    }
  };

  return (
    <>
      <div className={style.containerForm}>
        <h1 className={style.title}>Cálculo IMC</h1>
        <div>
          <h2 onClick={abrirInfo} className={style.questionTitle}>
            Para que serve?
          </h2>
          <p className={style.question}>
            O Índice de Massa Corporal (IMC) é uma medida utilizada para avaliar
            se uma pessoa está com o peso adequado em relação à sua altura. Ele
            é amplamente utilizado como uma ferramenta de triagem para
            identificar possíveis problemas de peso.
          </p>
        </div>
        <div>
          <h2 onClick={abrirInfo} className={style.questionTitle}>
            Como é calculado?
          </h2>
          <p className={style.question}>
            O IMC é calculado dividindo o peso (em quilogramas) pela altura ao
            quadrado (em metros). A fórmula matemática é a seguinte:
          </p>
        </div>
        <form className={style.form} onSubmit={calculaResultado}>
          <label className={style.formLabel} htmlFor="altura">
            Informe sua altura
          </label>
          <InputMask
            className={style.formInput}
            mask="_.__"
            replacement={{ _: /\d/ }}
            id="altura"
            placeholder="Altura em (metros)"
            onChange={(e) => setAltura(e.target.value)}
          />
          <label className={style.formLabel} htmlFor="peso">
            Informe seu peso
          </label>
          <InputMask
            className={style.formInput}
            id="peso"
            mask="____"
            placeholder="Peso em (kg)"
            replacement={{ _: /\d/ }}
            onChange={(e) => setPeso(e.target.value)}
          />
          <button className={style.formButton} type="submit">
            Calcular
          </button>
          <button className={style.formButtonReset} type="reset">
            Limpar
          </button>
          {mensagemAlerta && <p className={style.alert}>{mensagemAlerta}</p>}
        </form>
      </div>
    </>
  );
};

export default Form;
