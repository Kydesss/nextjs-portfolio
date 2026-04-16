import Header from "./sections/Header";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import ExperienceList from "./sections/Experience";
import EducationList from "./sections/Education";
import ProjectsPage from "./projects/page";

export default function Home() {
    return (
        <div className="lg:flex flex-row">
            <div className="lg:fixed lg:w-2/5 lg:h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-75 max-w-200">
                <Header />
            </div>
            <div className="lg:ml-[40%] w-full lg:w-3/5 min-h-screen min-w-75 max-w-300 mx-auto">
                <Navbar />
                <main className="lg:pt-0 p-8 lg:p-12 lg:pr-[10%]">
                    <About />
                    <ExperienceList />
                    <EducationList />
                    <ProjectsPage />
                </main>
            </div>
        </div>
    );
}
