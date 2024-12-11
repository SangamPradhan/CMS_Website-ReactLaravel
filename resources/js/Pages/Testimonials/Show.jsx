
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';



const testimonialData = [
    {
        id: 1,
        name: "David Calathan - Director of Design Operations, New York",
        text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "David Calathan - Director of Design Operations, New York",
        text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Smith - Director of Operations, New York",
        text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
        <AuthenticatedLayout
        header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-gray-800 text-xl leading-tight">
                    Blog Details
                </h2>
                <Link
                    href={route('testimonials.index')}
                    className="bg-blue-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                >
                    Back
                </Link>
            </div>
        }
        >
            <div className="py-10">
                <div className="container">
                    {/* testimonial section */}
                    <div
                        data-aos="fade-up"
                        className="gap-6 grid grid-cols-1 mx-auto max-w-screen-xl"
                    >
                        <Slider {...settings}>
                            {testimonialData.map(({ id, name, text, img }) => {
                                return (
                                    <div key={id} className="my-6">
                                        {/* card */}
                                        <div className="relative flex sm:flex-row flex-col gap-5 md:gap-14 dark:bg-gray-800 mx-4 p-4 rounded-xl">
                                            <img
                                                src={img}
                                                alt=""
                                                className="block mx-auto w-full sm:w-[200px] h-[300px] object-cover"
                                            />
                                            <div className="space-y-4">
                                                <p className="xl:pr-40 text-black/80 text-gray-500 dark:text-white/80">
                                                    “{text}”
                                                </p>
                                                <h1 className="font-bold text-xl">{name}</h1>
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
            </AuthenticatedLayout>
        </>
    );
};

export default Testimonial;
