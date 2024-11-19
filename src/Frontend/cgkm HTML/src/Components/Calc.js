import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa o Link para navegação

const CalculadoraRendimento = () => {
  const [area1, setArea1] = useState("");
  const [cultivo1, setCultivo1] = useState("");
  const [rendimento1, setRendimento1] = useState(null);
  const [area2, setArea2] = useState("");
  const [cultivo2, setCultivo2] = useState("");
  const [rendimento2, setRendimento2] = useState(null);
  const [error, setError] = useState("");

  // Função para calcular o rendimento
  const calcularRendimento = (area, cultivo) => {
    let rendimentoCalculado = 0;
    const areaNumerica = parseFloat(area);

    switch (cultivo.toLowerCase()) {
      case "batata":
        rendimentoCalculado = areaNumerica * 9; // 9 kg/m²
        break;
      case "tomate":
        rendimentoCalculado = areaNumerica * 15; // 15 kg/m²
        break;
      case "abóbora":
        rendimentoCalculado = areaNumerica * 7; // 7 kg/m²
        break;
      case "pepino":
        rendimentoCalculado = areaNumerica * 20; // 20 kg/m²
        break;
      case "alface":
        rendimentoCalculado = areaNumerica * 4.8; // 4,8 kg/m²
        break;
      case "cebola":
        rendimentoCalculado = areaNumerica * 4.5; // 4,5 kg/m²
        break;

      // Frutas
      case "maçã":
        rendimentoCalculado = areaNumerica * 10; // 10 kg/m²
        break;
      case "pera":
        rendimentoCalculado = areaNumerica * 8; // 8 kg/m²
        break;
      case "uva":
        rendimentoCalculado = areaNumerica * 15; // 15 kg/m²
        break;
      case "morango":
        rendimentoCalculado = areaNumerica * 4; // 4 kg/m²
        break;
      case "laranja":
        rendimentoCalculado = areaNumerica * 15; // 15 kg/m²
        break;
      case "limão":
        rendimentoCalculado = areaNumerica * 10; // 10 kg/m²
        break;
      case "manga":
        rendimentoCalculado = areaNumerica * 5; // 5 kg/m²
        break;
      case "abacaxi":
        rendimentoCalculado = areaNumerica * 5; // 5 kg/m²
        break;
      case "kiwi":
        rendimentoCalculado = areaNumerica * 6; // 6 kg/m²
        break;
      case "pêssego":
        rendimentoCalculado = areaNumerica * 7; // 7 kg/m²
        break;

      default:
        return "Cultivo não encontrado.";
    }
    return rendimentoCalculado;
  };

  const handleCalculadora1 = () => {
    setError("");
    if (!area1 || !cultivo1) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    const resultado = calcularRendimento(area1, cultivo1);
    if (typeof resultado === "number") {
      setRendimento1(resultado);
    } else {
      setError(resultado);
    }
  };

  const handleCalculadora2 = () => {
    setError("");
    if (!area2 || !cultivo2) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    const resultado = calcularRendimento(area2, cultivo2);
    if (typeof resultado === "number") {
      setRendimento2(resultado);
    } else {
      setError(resultado);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.textoContainer}>
        <h2 style={styles.texto}>Descubra o Potencial da Sua Horta Urbana</h2>
        <p style={styles.descricao}>
          Use nossas calculadoras para estimar a produtividade do seu espaço de
          cultivo. Informe as dimensões, tipo de cultivo e obtenha uma previsão
          de rendimento.
        </p>
      </div>

      <div style={styles.calculadoraContainer}>
        {/* Primeira Calculadora */}
        <div style={styles.calculadora}>
          <h1 style={styles.header}>
            Calculadora de Rendimento de vegetais
          </h1>

          <div style={styles.formContainer}>
            <div style={styles.inputContainer}>
              <label style={styles.label}>Área (m²): </label>
              <input
                type="number"
                value={area1}
                onChange={(e) => setArea1(e.target.value)}
                placeholder="Informe a área disponível"
                style={styles.input}
              />
            </div>

            <div style={styles.inputContainer}>
              <label style={styles.label}>Escolha o Cultivo: </label>
              <select
                value={cultivo1}
                onChange={(e) => setCultivo1(e.target.value)}
                style={styles.select}
              >
                <option value="">Selecione um cultivo</option>
                <option value="batata">Batata</option>
                <option value="tomate">Tomate</option>
                <option value="abóbora">Abóbora</option>
                <option value="pepino">Pepino</option>
                <option value="alface">Alface</option>
                <option value="cebola">Cebola</option>
              </select>
            </div>

            <div>
              <button onClick={handleCalculadora1} style={styles.button}>
                Calcular Rendimento
              </button>
            </div>

            {rendimento1 !== null && (
              <div style={styles.result}>
                <h3>Rendimento Estimado: {rendimento1} kg</h3>
              </div>
            )}
          </div>
          {/* Botão de navegação */}
          <div style={styles.navButtonContainer}>
            <Link to="/outros" style={styles.navButton}>
              Não encontrou o que deseja? Clique aqui
            </Link>
          </div>
        </div>

        {/* Segunda Calculadora */}
        <div style={styles.calculadora}>
          <h1 style={styles.header}>
            Calculadora de Rendimento de frutos
          </h1>

          <div style={styles.formContainer}>
            <div style={styles.inputContainer}>
              <label style={styles.label}>Área (m²): </label>
              <input
                type="number"
                value={area2}
                onChange={(e) => setArea2(e.target.value)}
                placeholder="Informe a área disponível"
                style={styles.input}
              />
            </div>

            <div style={styles.inputContainer}>
              <label style={styles.label}>Escolha o Cultivo: </label>
              <select
                value={cultivo2}
                onChange={(e) => setCultivo2(e.target.value)}
                style={styles.select}
              >
                <option value="">Selecione um cultivo</option>
                <option value="maçã">Maçã</option>
                <option value="pera">Pera</option>
                <option value="uva">Uva</option>
                <option value="morango">Morango</option>
                <option value="laranja">Laranja</option>
                <option value="limão">Limão</option>
                <option value="manga">Manga</option>
                <option value="abacaxi">Abacaxi</option>
                <option value="kiwi">Kiwi</option>
                <option value="pêssego">Pêssego</option>
              </select>
            </div>

            <div>
              <button onClick={handleCalculadora2} style={styles.button}>
                Calcular Rendimento
              </button>
            </div>

            {rendimento2 !== null && (
              <div style={styles.result}>
                <h3>Rendimento Estimado: {rendimento2} kg</h3>
              </div>
            )}
          </div>
          {/* Botão de navegação */}
          <div style={styles.navButtonContainer}>
            <Link to="/outros" style={styles.navButton}>
              Não encontrou o que deseja? Clique aqui
            </Link>
          </div>
        </div>
      </div>

      {error && <div style={styles.error}>{error}</div>}
    </div>
  );
};

// Estilos ajustados
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px",
  },
  textoContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  texto: {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#456757",
    marginBottom: "10px",
  },
  descricao: {
    fontSize: "1.2em",
    color: "#666666",
    marginTop: "10px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  calculadoraContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    justifyContent: "center",
  },
  calculadora: {
    padding: "30px",
    width: "45%",
    backgroundColor: "#ffffff",
    color: "black",
    borderRadius: "10px",
    border: "2px solid #BAD4C8",
  },
  formContainer: {
    border: "2px solid #BAD4C8",
    padding: "20px",
    borderRadius: "10px",
  },
  header: {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#333333",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "1.2em",
    marginRight: "10px",
    color: "#456757",
  },
  input: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "250px",
    marginTop: "5px",
  },
  select: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "260px",
    marginTop: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2em",
    backgroundColor: "#456757",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    marginTop: "15px",
  },
  result: {
    marginTop: "20px",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#333333",
  },
  error: {
    color: "red",
    fontSize: "1.2em",
    marginTop: "20px",
  },
  navButtonContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  navButton: {
    fontSize: "1.2em",
    color: "#456757",
    textDecoration: "none",
    border: "2px solid #456757",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CalculadoraRendimento;
