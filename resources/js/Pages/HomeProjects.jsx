import Layout from "@/Layouts/layout";
import Footer from "../components/Footer/Footer.jsx";


const Projects = ({ projects }) => {
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
                                            src={`/storage/${project.image}`}
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
                                                {project.date}
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
