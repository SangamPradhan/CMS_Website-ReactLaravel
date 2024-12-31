import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        message = message.toLowerCase();

        // Greeting
        if (message.includes('hello') || message.includes('hi')) {
            actions.handleHello();
        }

        // About the company
        else if (message.includes('about') || message.includes('who are you')) {
            actions.handleFAQResponse(
                'We are AI Solution, a company specializing in AI-based tools to enhance productivity and simplify workflows.'
            );
        }

        // Services offered
        else if (message.includes('services') || message.includes('what do you offer')) {
            actions.handleFAQResponse(
                'We offer AI-powered solutions including productivity tools, analytics platforms, and custom AI integration services.'
            );
        }

        // Client Reviews
        else if (message.includes('reviews') || message.includes('clients say')) {
            actions.handleFAQResponse(
                'Our clients love our services for their reliability and the immense value they bring to their businesses.'
            );
        }

        // Navigation
        else if (message.includes('navigate') || message.includes('menu')) {
            actions.handleFAQResponse(
                'Our website navigation includes Home, About Us, Services, Blog, Testimonials, and Contact Us.'
            );
        }

        // About Us page
        else if (message.includes('about us')) {
            actions.handleFAQResponse(
                'Our About Us page provides a detailed overview of our mission, vision, and values as a company dedicated to AI innovation.'
            );
        }

        // Contact Information
        else if (message.includes('contact') || message.includes('reach')) {
            actions.handleFAQResponse(
                'You can reach us through our Contact Us page, where you’ll find our email, phone number, and a quick inquiry form.'
            );
        }

        // FAQs Section
        else if (message.includes('faq') || message.includes('questions')) {
            actions.handleFAQResponse(
                'Visit our FAQs page for answers to common inquiries about our services, policies, and support.'
            );
        }

        // Blog Information
        else if (message.includes('blog')) {
            actions.handleFAQResponse(
                'Our blog features articles on AI trends, use cases, and how our tools can revolutionize your business.'
            );
        }

        // Company Mission
        else if (message.includes('mission')) {
            actions.handleFAQResponse(
                'Our mission is to empower businesses by integrating AI tools that drive innovation and efficiency.'
            );
        }

        // Company Vision
        else if (message.includes('vision')) {
            actions.handleFAQResponse(
                'Our vision is to be a global leader in AI-powered solutions, transforming the way businesses operate.'
            );
        }

        // Testimonials
        else if (message.includes('testimonials')) {
            actions.handleFAQResponse(
                'Read our testimonials to see how our clients have benefited from our AI-powered tools and services.'
            );
        }

        // Career Opportunities
        else if (message.includes('careers') || message.includes('jobs')) {
            actions.handleFAQResponse(
                'We are always looking for talented individuals. Visit our Careers page for current job openings and application details.'
            );
        }

        // Partnership Queries
        else if (message.includes('partnership') || message.includes('collaborate')) {
            actions.handleFAQResponse(
                'We are open to partnerships. Contact us through our partnership inquiry form to discuss collaboration opportunities.'
            );
        }

        // AI Trends
        else if (message.includes('trends') || message.includes('latest in ai')) {
            actions.handleFAQResponse(
                'Stay updated with our blog where we share the latest trends and advancements in artificial intelligence.'
            );
        }

        // Training Programs
        else if (message.includes('training') || message.includes('workshops')) {
            actions.handleFAQResponse(
                'We offer training programs and workshops to help businesses implement AI-driven solutions effectively.'
            );
        }

        // Demo Requests
        else if (message.includes('demo') || message.includes('showcase')) {
            actions.handleFAQResponse(
                'Schedule a demo with us to explore how our AI tools can benefit your business. Visit our Contact Us page for more details.'
            );
        }

        // Privacy Policies
        else if (message.includes('privacy') || message.includes('data')) {
            actions.handleFAQResponse(
                'We take data privacy seriously. Visit our Privacy Policy page for detailed information on how we handle your data.'
            );
        }

        // Support Services
        else if (message.includes('support') || message.includes('help')) {
            actions.handleFAQResponse(
                'Our support team is here to assist you. Contact us through our support portal for any inquiries or issues.'
            );
        }

        // AI for Small Businesses
        else if (message.includes('small business') || message.includes('startup')) {
            actions.handleFAQResponse(
                'We provide AI solutions tailored for small businesses and startups to help them scale and succeed.'
            );
        }

        // Pricing Details
        else if (message.includes('pricing') || message.includes('cost')) {
            actions.handleFAQResponse(
                'Our pricing depends on the solution and scale. Visit our Pricing page or contact us for a customized quote.'
            );
        }

        // Custom AI Solutions
        else if (message.includes('custom') || message.includes('specific needs')) {
            actions.handleFAQResponse(
                'We develop custom AI solutions to address your specific business needs. Contact us for more information.'
            );
        }

        // AI Implementation Timeline
        else if (message.includes('timeline') || message.includes('how long')) {
            actions.handleFAQResponse(
                'The implementation timeline depends on the complexity of the project. Contact us to discuss your requirements.'
            );
        }

        // Industries Served
        else if (message.includes('industries') || message.includes('clients')) {
            actions.handleFAQResponse(
                'We serve industries including healthcare, finance, retail, logistics, and more with AI-powered solutions.'
            );
        }

        // Error Handling
        else {
            actions.handleFAQResponse("I'm sorry, I didn't understand that. Could you rephrase your question?");
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                });
            })}
        </div>
    );
};

export default MessageParser;
