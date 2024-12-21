import yellowCar from '../../../assets/website/team.png';

const Hero = () => {
    return (
        <div className="dark:bg-gray-950 dark:text-white duration-300">
            <div className="flex mt-10 sm:mt-0 min-h-[620px] container">
                <div className="place-items-center gap-6 grid grid-cols-1 sm:grid-cols-2">
                    {/* Image section */}
                    <div data-aos="zoom-in" className="relative order-1 sm:order-2">
                        <img
                            src={yellowCar}
                            alt=""
                            className="ml-20 w-full sm:max-w-[380px] md:max-w-[450px]"
                        />
                        <div
                            data-aos="slide-right"
                            className="-right-8 -bottom-5 absolute bg-white dark:bg-gray-900 shadow-md px-4 py-2 rounded-xl dark:text-white"
                        >
                            <p className="text-gray-500 text-sm">⭐Projects</p>
                            <h1 className="font-bold">
                                600+ <span className="font-normal">Done</span>
                            </h1>
                        </div>
                    </div>

                    {/* Text section */}
                    <div className="space-y-5 order-2 sm:order-1 xl:pr-45 pl-10 sm:pl-13">
                        <h1
                            data-aos="fade-up"
                            className="font-semibold text-4x sm:text-5xl"
                            style={{ lineHeight: 1.2 }}
                        >
                            Building Brands in the{" "}
                            <span className="text-primary">Digital Agency</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300">
                            Your partner in navigating the ever-evolving landscape of digital
                            marketing. From conceptualization to execution, we craft tailored
                            solutions that drive results and elevate your brand to new
                            heights.
                        </p>
                        <br />
                        <a href="/aboutus">
                        <button
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-offset="0"
                            className="primary-btn"

                        >
                            Learn More
                        </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
