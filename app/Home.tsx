import Header from "./sections/Header";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Project from "./sections/Projects";

export default function Home() {
    return (
        <>
            <div className="lg:flex flex-row">
                <div
                    className={`lg:fixed lg:w-2/5 lg:h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-75 max-w-200 transition-all duration-1000 ease-out`}
                    style={{ transitionDelay: "0ms" }}
                >
                    <Header></Header>
                </div>
                <div className="lg:ml-[40%] w-full lg:w-3/5 min-h-screen min-w-75 max-w-300 mx-auto">
                    <Navbar></Navbar>
                    <main className="lg:pt-0 p-8 lg:p-12 lg:pr-[10%]">
                        <div className="" style={{ transitionDelay: "300ms" }}>
                            <About />
                        </div>
                        <div className="" style={{ transitionDelay: "500ms" }}>
                            <Experience></Experience>
                        </div>
                        <div className="" style={{ transitionDelay: "700ms" }}>
                            <Education></Education>
                        </div>
                        <div className="" style={{ transitionDelay: "900ms" }}>
                            <Project></Project>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
