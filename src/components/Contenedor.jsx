import Cards from "./cards";
import "../contenedor.css";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";

const Contenedor = () => {
  const perritos = [
    {
      imagen: img1,
      nombre: "Bruno",
      raza:"Braco Aleman",
      descripcion:
        "Fieles a su naturaleza, los bracos alemanes son buenos perros vigilantes ya que están siempre alerta, pero no especialmente buenos perros protectores. A esta raza le suelen gustar tanto las personas que no son nada buenos cuando tienen que alejar o asustar a alguien. El aseo es muy sencillo y no requiere mucho tiempo.",
    },
    {
      imagen: img2,
      nombre: "Jumx",
      raza:"Border Collie",
      descripcion:
        "El border collie es un perro de trabajo, y esto se refleja con claridad en su físico: son perros muy ágiles, fuertes y flexibles, con cuerpos alargados, hechos para saltar, correr y hacer ejercicio. Los machos, con unos 53 centímetros de altura hasta la cruz, suelen ser algo más grandes que las hembras",
    },
    {
      imagen: img3,
      nombre: "Pokes",
      raza:"Labrador",
      descripcion:
        "El labrador es un perro grande, de constitución fuerte y buena estructura ósea y muscular. Tiene la cabeza ancha y una mirada dulce e inteligente. Su cola, parecida a la de las nutrias, es única. El pelaje es corto y denso y puede ser de color negro liso, amarillo o marrón.",
    },
    {
      imagen: img4,
      nombre: "Eva",
      raza:"Braco Aleman",
      descripcion:
        "Fieles a su naturaleza, los bracos alemanes son buenos perros vigilantes ya que están siempre alerta, pero no especialmente buenos perros protectores. A esta raza le suelen gustar tanto las personas que no son nada buenos cuando tienen que alejar o asustar a alguien. El aseo es muy sencillo y no requiere mucho tiempo.",
    },
  ];
  return (
    <div className="contenedor">
      <Cards
        img={perritos[0].imagen}
        nombre={perritos[0].nombre}
        raza={perritos[0].raza}
        descripcion={perritos[0].descripcion}
        color='success'
      ></Cards>
      <Cards
        img={perritos[1].imagen}
        nombre={perritos[1].nombre}
        raza={perritos[1].raza}
        descripcion={perritos[1].descripcion}
        color='warning'
      ></Cards>
      <Cards
        img={perritos[2].imagen}
        nombre={perritos[2].nombre}
        raza={perritos[2].raza}
        descripcion={perritos[2].descripcion}
        color="info"
      ></Cards>
      <Cards
        img={perritos[3].imagen}
        nombre={perritos[3].nombre}
        raza={perritos[3].raza}
        descripcion={perritos[3].descripcion}
        color='primary'
      ></Cards>
    </div>
  );
};
export default Contenedor;
