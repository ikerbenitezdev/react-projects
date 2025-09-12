import Post from "../components/home/Post";
// import Header from "./Header";
import Timeline from "../components/home/Timeline";
import Projects from "../components/home/Projects";
import About from "../components/home/About";
import Contact from "../components/home/Contact";


export default function Home() {
    return (
      // <Header />
      <main className="px-4">
        {/* The sections that will be scrolled to via hash navigation */}
        <section id="post" className="scroll-m-20">
          <Post />
        </section>
        <div className="space-y-12">
            {/* <section id="timeline" className="scroll-m-20"> */}
            <Timeline />
            {/* </section> */}
            {/* <section id="projects" className="scroll-m-20"> */}
            <Projects />
            {/* </section> */}
            {/* <section id="about" className="scroll-m-20"> */}
            <About />
            {/* </section> */}
            {/* <section id="contact" className="scroll-m-20"> */}
            <Contact />
            {/* </section> */}
        </div>
      </main>
    );
  }