export default function Projects() {
    return (
        <section id='projects' className="scroll-m-20 max-w-3xl mx-auto">
            
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-gray-200 dark:text-black/20 undefined">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
                Proyectos
            </h2>
            <div className="flex flex-col gap-y-16 text-gray-300">
<article className="flex flex-col space-x-0 space-y-8 group  md:flex-row md:space-x-8 md:space-y-0">
    <div className="w-full md:w-1/2"><img src="/src/assets/rugby.png" className="rounded-md object-cover object-top w-full h-56"></img></div>
    <div className="w-full md:w-1/2 md:max-w-lg">
        <h3>Web Menorca Rugby</h3>
        <p>Descripción del proyecto 1</p>
    </div>
</article>
<article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
    <div className="w-full md:w-1/2"><img src="/src/assets/foto-personal.jpeg" className="rounded-md object-cover object-top w-full h-56"></img></div>
    <div className="w-full md:w-1/2 md:max-w-lg">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1</p>
    </div>
</article>
<article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
    <div className="w-full md:w-1/2"><img src="/src/assets/foto-personal.jpeg" className="rounded-md object-cover object-top w-full h-56"></img></div>
    <div className="w-full md:w-1/2 md:max-w-lg">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1</p>
    </div>
</article>


</div>

        </section>

    );
}