import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import "./items.css";

function Items() {
  const [amiibos, setAmiibos] = useState([]);
  const [carga, setCarga] = useState(true);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://www.amiiboapi.com/api/amiibo").then((res) => {
        setAmiibos(res.data.amiibo || []);
        setErr("");
      })
      .catch((error) => {
        console.error(error);
        setErr("Error al cargar la sección.");
      })
      .finally(() => {
        setCarga(false);
      });
  }, []);

  if (carga) return <p>Cargando...</p>;
  if (err) return <p>{err}</p>;

  return (
    <section className="items-pagina">
      <h1>Lista de Amiibos</h1>

      <div className="amiibo-sect">
        {amiibos.map((item, index) => (
          <article key={`${item.head}-${item.tail}-${index}`} className="amiibo-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.gameSeries}</p>

            <Button text="Ver más" type="primary" size="medium" action={() => navigate(`/details/${item.head}${item.tail}`)}/>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Items;
