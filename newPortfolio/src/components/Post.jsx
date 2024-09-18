
// import '../index.css'

export default function Post() {
    return (
      <section className="flex flex-wrap justify-center gap-5 m-auto w-2/3">
        <article className="">
          <h2 className="text-2xl font-bold">Title</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit, urna ac ultricies dapibus, justo odio fermentum turpis, nec
            ultricies nunc odio sed odio. Nullam nec semper mi. Nulla facilisi.
            Nullam nec semper mi. Nulla facilisi.
          </p>
        </article>
        <div className="">
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            className="rounded-full"
          />
        </div>
      </section>
    )
  }
