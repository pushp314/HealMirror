import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "In my experience, Healmirror offers a valuable tool for expanding the reach of therapy and empowering therapists in their practice. It's a platform worth considering for those looking to engage in or provide online mental health therapy.",
      name: "Kirti Groover",
      title: "Senior Psychologist",
      avatar: "https://res.cloudinary.com/dgzv4skru/image/upload/v1746559723/female_qgwn9g.png"
    },
    {
      id: 2,
      quote: "Finding the right therapist used to feel like navigating a maze. I'd spend hours searching, comparing fees, and wondering if the connection would even be there. Then I found Healmirror, which completely changed my experience with therapy.",
      name: "Navdeep Verma",
      title: "Founder Verma Agritech Pvt Ltd.",
      avatar: "https://res.cloudinary.com/dgzv4skru/image/upload/v1746559723/male_psk7b4.png"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12">What Our Clients have to say</h2>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 sm:p-8 rounded-lg shadow-md relative">
              <div className="text-yellow-400 text-4xl sm:text-5xl absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 relative z-10">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials