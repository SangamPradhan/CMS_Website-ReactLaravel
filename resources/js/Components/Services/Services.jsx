import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";


const skillsData = [
    {
        name: "App Development",
        icon: <FaCameraRetro className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "0",
    },
    {
        name: "Web Designing",
        icon: <GiNotebook className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "300",
    },
    {
        name: "Graphic Designing",
        icon: <SlNote className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "500",
    },
    {
        name: "Digital Marketing",
        icon: <SlNote className="text-4xl text-primary" />,
        link: "#",
        description:
            "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        aosDelay: "700",
    },
];
const Services = () => {
    return (
        <>
            <span id="about"></span>
            <div className="sm:place-items-center sm:grid bg-gray-100 dark:bg-black py-12 dark:text-white">
                <div className="container">
                    {/* Header */}
                    <div className="space-y-3 pb-12 text-center">
                        <h1
                            data-aos="fade-up"
                            className="font-semibold text-3xl text-violet-950 sm:text-3xl dark:text-primary"
                        >
                            Explore Our Services
                        </h1>
                        <p
                            data-aos="fade-up"
                            className="text-gray-600 text-sm dark:text-gray-400"
                        >
                            We are self-service data analytics software that lets you create
                            visually.
                        </p>
                    </div>

                    {/* services cards */}
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {skillsData.map((skill) => (
                            <div
                                key={skill.name}
                                data-aos="fade-up"
                                data-aos-delay={skill.aosDelay}
                                className="space-y-3 sm:space-y-4 p-4 card"
                            >
                                <div>{skill.icon}</div>
                                <h1 className="font-semibold text-lg">{skill.name}</h1>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* button */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="900"
                        data-aos-offset="0"
                        className="mt-4 sm:mt-8 text-center"
                    >
                        <a href="/aboutus"><button className="primary-btn">Learn More</button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
