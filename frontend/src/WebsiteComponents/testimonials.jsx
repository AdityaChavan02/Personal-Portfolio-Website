import React from 'react';

export default function Testimonials() {
    // Testimonial Content
    const testimonials = [
        {
            name: "John Doe",
            title: "CEO, TechCorp",
            feedback: "The services provided by this company exceeded our expectations. Their professionalism and attention to detail were exceptional.",
        },
        {
            name: "Jane Smith",
            title: "Manager, Innovate Ltd.",
            feedback: "Our collaboration has been nothing short of outstanding. Highly recommended for anyone looking for quality and reliability.",
        },
        {
            name: "Robert Brown",
            title: "Director, GreenTech",
            feedback: "A truly wonderful experience. They delivered exceptional results, and we are delighted with their services.",
        },
        {
            name: "Emily Davis",
            title: "Founder, StartupHub",
            feedback: "The team was incredibly supportive and proactive. Their expertise is unmatched, and we couldn't be happier.",
        },
        {
            name: "Michael Wilson",
            title: "CTO, FinTechX",
            feedback: "Amazing work! The team went above and beyond to ensure our needs were met. Highly recommend!",
        },
        {
            name: "Sophia Lee",
            title: "Head of Product, E-Commerce Inc.",
            feedback: "The entire experience was seamless. They understood our vision and executed it flawlessly!",
        }
    ];

    return (
        <div className="flex flex-col w-full px-10 py-16 bg-gray-50 dark:bg-gray-900">
            
            {/* Title: Our Trusted Partners */}
            <div className="text-center pb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Testimonials
                </h1>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h1>
                        <h3 className="text-lg text-gray-600 dark:text-gray-400 italic">{testimonial.title}</h3>
                        <p className="text-md text-gray-700 dark:text-gray-300 mt-4 italic">"{testimonial.feedback}"</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
