import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./details.css";

const Details = () => {
  const { id } = useParams();
  const [amiibo, setAmiibo] = useState(null);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`https://www.amiiboapi.com/api/amiibo/?id=${id}`).then((res) => {
        const data = res.data.amiibo;
        if (data) {
          setAmiibo(data);
          setError("");
        } else {
          setError("No hay información oficial de este Amiibo.");
        }
      })
      .catch(() => {
        setError("Error al cargar la página.");
      })
      .finally(() => {
        setCarga(false);
      });
  }, [id]);

  if (carga) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!amiibo) return <p>El amiibo no está en la lista</p>;

  const fechaLanzamiento =
    amiibo.release?.eu ||
    amiibo.release?.na ||
    amiibo.release?.jp ||
    amiibo.release?.au ||
    null;
    
  const year = fechaLanzamiento
    ? new Date(fechaLanzamiento).getFullYear()
    : "Amiibo no identificado";

  return (
    <section className="amiibo-details">
      <h1>{amiibo.name}</h1>
      <img src={amiibo.image} alt={amiibo.name} className="details-image" />

      <p>
        <strong>Personaje:</strong> {amiibo.character}
      </p>
      <p>
        <strong>Saga a la que pertenece:</strong> {amiibo.gameSeries}
      </p>
      <p>
        <strong>Año de lanzamiento:</strong> {year}
      </p>
    </section>
  );
};

export default Details;