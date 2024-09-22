import Post from "./Post";
import Timeline from "./Timeline";
import Projects from "./Projects";

export default function Home() {
    return (
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
        </div>
      </main>
    );
  }