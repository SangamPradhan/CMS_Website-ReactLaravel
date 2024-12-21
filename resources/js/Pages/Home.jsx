import Layout from '@/Layouts/layout.jsx';
import BlogsComp from '../../../resources/js/components/Blogs/BlogsComp.jsx';
import BrandsLogo from '../../../resources/js/components/BrandsLogo/BrandsLogo.jsx';
import Footer from '../../../resources/js/components/Footer/Footer.jsx';
import Hero from '../../../resources/js/components/Hero/Hero.jsx';
import Services from '../../../resources/js/components/Services/Services.jsx';
import Testimonial from '../../../resources/js/components/Testimonial/Testimonial.jsx';

const Home = ({ testimonials = [] }) => {
    return (
        <>
            <Layout/>
            <Hero />
            <BrandsLogo />
            <Services />
            <Testimonial testimonials={testimonials} />
            <BlogsComp />
            <Footer />
        </>
    )
}

// Home.layout = page => <Layout children={page} />
export default Home
