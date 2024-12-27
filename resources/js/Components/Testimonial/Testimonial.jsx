import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Testimonial = ({ testimonials }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true, // Ensures the carousel loops infinitely
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enables automatic sliding
        autoplaySpeed: 4000, // Set to 3000ms (3 seconds)
        cssEase: "linear",
        pauseOnHover: true, // Pauses when hovering over the carousel
        pauseOnFocus: true, // Pauses when the carousel is focused
        swipeToSlide: true, // Allows users to swipe between slides
    };
    
    

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={`mr-1 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
            />
        ));
    };

    return (
        <div className="py-10">
            <div className="container">
                {/* Testimonial section */}
                <div data-aos="fade-up" className="gap-6 grid grid-cols-1 mx-auto max-w-screen-xl">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => {
                            return (
                                <div key={testimonial.id || index} className="my-6">
                                    {/* Card */}
                                    <div className="relative flex sm:flex-row flex-col gap-5 md:gap-14 dark:bg-gray-800 mx-4 p-4 rounded-xl">
                                        <div className="w-[200px] h-[300px] overflow-hidden">
                                            <img
                                            
                                            src={`/storage/${testimonial.photo}`}
                                                alt={testimonial.title}
                                                className="w-full h-full object-cover" // Ensures image maintains aspect ratio and fits the container
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <p className="xl:pr-40 text-black/80 text-gray-500 dark:text-white/80">
                                                “{testimonial.description}”
                                            </p>
                                            <h1 className="font-bold text-xl">
                                                {testimonial.title} - {testimonial.date}
                                            </h1>
                                            <div className="testimonial-stars">Ratings: {renderStars(testimonial.rating)}</div>
                                        </div>
                                        <p className="right-0 bottom-0 absolute font-serif text-[12rem] text-black/10">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
