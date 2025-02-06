import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Registrar los módulos necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const CookieStats = ({ aceptadas = 0, rechazadas = 0 }) => {
  const total = aceptadas + rechazadas;
  const data = {
    labels: ["Aceptadas", "Rechazadas"],
    datasets: [
      {
        label: "Estadísticas de Cookies",
        data: [aceptadas, rechazadas],
        backgroundColor: [
          "#4caf50", // Verde sólido
          "#f44336", // Rojo sólido
        ],
        hoverBackgroundColor: ["#81c784", "#e57373"],
        borderColor: "#ffffff", // Color del borde
        borderWidth: 2, // Grosor del borde
        hoverBorderColor: "#000000", // Color del borde cuando se pasa el mouse
        hoverBorderWidth: 3, // Grosor del borde al hacer hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Distribución de Consentimientos de Cookies",
        font: {
          size: 20,
          weight: "bold",
        },
        color: "#1e88e5",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#333333",
        borderColor: "#dddddd",
        borderWidth: 1,
        padding: 8,
        callbacks: {
          label: function (tooltipItem) {
            const percentage = ((tooltipItem.raw / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${tooltipItem.raw} (${percentage}%)`;
          },
        },
      },
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#555555",
          boxWidth: 15,
        },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeInOutQuart",
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        width: "70%",
        height: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffffff", // Fondo blanco para integrarse con otros estilos
        padding: "15px",
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

CookieStats.propTypes = {
  aceptadas: PropTypes.number,
  rechazadas: PropTypes.number,
};
