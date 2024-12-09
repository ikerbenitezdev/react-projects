import Card from "../components/Card";
// import  { useNavigate } from "react-router-dom";
// import  Search from "../components/Search";

export default function Home() {
  const cardsContent = [
    {
      title: "Bali",
      description: "Descubre que tal se vive en Bali y todas sus actividades destacadas",
      imgUrl: "bali.jpg",
    },
    {
      title: "Maldivas",
      description: "Disfruta de la tranquilidad en Maldivas con vistas paradisíacas",
      imgUrl: "maldivas.jpg",
    },
    {
      title: "Noruega",
      description: "Disfruta de los aluzinantes paisajes de Noruega y sus histórias",
      imgUrl: "fondo.webp",
    }
  ];

  return (
    <div>

      <section className="flex flex-col max-w-4xl mx-auto my-8 p-4">
        <h2 className="text-2xl font-bold text-center my-4">
          Conoce y comparte cada experiencia
        </h2>
        <article className="grid place-items-center  grid-cols-1 justify-around items-center md:grid-cols-3 gap-4 ">
          {cardsContent.map((data, index) => (
            // Devuelve cada Card desde el map
            <Card key={index} person={data} />
          ))}
        </article>
      </section>
    </div>
  );
}
