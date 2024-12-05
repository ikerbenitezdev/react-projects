export default function Footer(){
    const date = new Date()
    const year = date.getFullYear()
    return(
    <footer>
        <section className="text-center p-8 text-black bg-slate-200">
            <p>Copyright {year} | Creado por Iker Benitez</p>

        </section>
    </footer>
    )
}