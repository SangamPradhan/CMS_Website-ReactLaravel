import Layout from "@/Layouts/layout";
import project1 from "../../assets/projects/project-1.jpg";
import project2 from "../../assets/projects/project-2.jpg";
import project3 from "../../assets/projects/project-3.jpg";
import project4 from "../../assets/projects/project-4.jpg";
import project5 from "../../assets/projects/project-5.jpg";
import project6 from "../../assets/projects/project-6.jpg";
import Footer from "../components/Footer/Footer.jsx";

const projects = [
    {
        id: 1,
        title: "Designing a better cinema experience",
        subtitle: "SEO Optimization",
        image: project1,
    },
    {
        id: 2,
        title: "Building design process within teams",
        subtitle: "Digital Marketing",
        image: project2,
    },
    {
        id: 3,
        title: "How intercom brings play into their design process",
        subtitle: "Keyword Targeting",
        image: project3,
    },
    {
        id: 4,
        title: "Stuck with to-do list, I created a new app for",
        subtitle: "Email Marketing",
        image: project4,
    },
    {
        id: 5,
        title: "Examples of different types of sprints",
        subtitle: "Marketing & Reporting",
        image: project5,
    },
    {
        id: 6,
        title: "Redesigning the New York times app",
        subtitle: "Development",
        image: project6,
    },
];

const Projects = () => {
    const today = new Date().toLocaleDateString();

    return (
        <>
        <Layout/>
            <section className="bg-gray-950 py-12" id="projects" aria-label="Projects">
                <div className="mx-auto px-4 container">
                    <h2 className="mb-4 font-semibold text-3xl text-center text-white">
                        Our Recent Projects
                    </h2>
                    <p className="mb-12 text-center text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <ul className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <li key={project.id} className="group">
                                <div className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
                                    <figure className="relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="group-hover:scale-105 w-full h-64 transition-transform duration-300 object-cover"
                                        />
                                    </figure>
                                    <div
                                        className="flex flex-col justify-between p-4 h-[160px]"
                                    >
                                        <div>
                                            <p className="font-semibold text-orange-500 text-sm">
                                                {project.subtitle}
                                            </p>
                                            <h3 className="mt-2 font-bold text-white text-xl">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <a
                                                href="#"
                                                className="inline-block bg-blue-500 hover:bg-orange-600 px-4 py-2 rounded-md font-semibold text-sm text-white transition-colors"
                                            >
                                                View Details
                                            </a>
                                            <p className="mt-4 text-gray-400 text-sm self-end">
                                                {today}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;
