export default function Card({ person }) {
    return (
      <div className="flex flex-col shadow-lg w-[250px]">
        <img
          src={person.imgUrl}
          alt={person.title}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <section className="bg-white text-gray-700 p-4 rounded-b-md">
          <h3 className="text-lg font-semibold text-orange-500">{person.title}</h3>
          <p className="text-sm">{person.description}</p>
        </section>
      </div>
    );
  }
  