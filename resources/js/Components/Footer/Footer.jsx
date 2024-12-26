import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const FooterLinks = [
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Features",
        link: "/#features",
    },
    {
        title: "Works",
        link: "/#works",
    },
    {
        title: "Career",
        link: "/#career",
    },
];
const HelpLinks = [
    {
        title: "Customer Support",
        link: "/#support",
    },
    {
        title: "Delivery Details",
        link: "/#delivery-details",
    },
    {
        title: "Terms & Conditions",
        link: "/#terms",
    },
    {
        title: "Privacy Policy",
        link: "/#policy",
    },
];
const ResourcesLinks = [
    {
        title: "Free Ebooks",
        link: "/#ebooks",
    },
    {
        title: "How To Blog",
        link: "/#blogs",
    },
    {
        title: "Subscribe TCJ",
        link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
    },
];
const Footer = () => {
    return (
        <div className="bg-gray-100 text-dark">
            <section className="ml-10 py-10 container" >
                <div className="grid md:grid-cols-3 py-5">
                    {/* company Details */}
                    <div className="px-4 py-8">
                        <h1 className="flex items-center gap-3 mb-3 font-bold text-justify text-xl sm:text-3xl sm:text-left">
                            AI Solution
                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit consectetur adipisicing elit ipsum
                            dolor sit amet consectetur. adipisicing{" "}
                        </p>
                        <br />
                        {/* Social Handle */}
                        <div className="flex items-center gap-4 mt-6">
                            <a href="#">
                                <FaInstagram className="text-2xl hover:text-primary duration-300" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-2xl hover:text-primary duration-300" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                            </a>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div className="">
                            <div className="px-4 py-8">
                                <h1 className="mb-3 font-bold text-justify text-xl sm:text-xl sm:text-left">
                                    Company
                                </h1>
                                <ul className={`flex flex-col gap-3`}>
                                    {FooterLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className="space-x-1 text-gray-400 hover:!text-primary hover:translate-x-1 duration-300 cursor-pointer"
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="px-4 py-8">
                                <h1 className="mb-3 font-bold text-justify text-xl sm:text-xl sm:text-left">
                                    Help
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {HelpLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className="space-x-1 text-gray-400 hover:!text-primary hover:translate-x-1 duration-300 cursor-pointer"
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="px-4 py-8">
                                <h1 className="mb-3 font-bold text-justify text-xl sm:text-xl sm:text-left">
                                    Resources
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {ResourcesLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className="space-x-1 text-gray-400 hover:!text-primary hover:translate-x-1 duration-300 cursor-pointer"
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
