"use client";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const testimonials = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?format=png",
      title: "Corporate Law Excellence",
      description:
        "Specialized expertise in handling complex corporate litigation cases with proven success records.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?format=png",
      title: "Family Law Specialists",
      description:
        "Compassionate representation for families during challenging times with personalized solutions.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?format=png",
      title: "Real Estate Law",
      description:
        "Expert guidance through property transactions and real estate dispute resolutions.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?format=png",
      title: "Criminal Defense",
      description:
        "Aggressive defense strategies with a track record of successful case dismissals.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const id = setInterval(nextSlide, 3000);
    setIntervalId(id as unknown as NodeJS.Timeout);
    return () => clearInterval(id);
  }, []);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return (
    <div
      className="relative w-full h-screen mb-10"
      onMouseDown={handleMouseDown}
    >
      <div className="px-4 py-12 md:px-12 md:py-12">
        <h2 className="ml-4 md:ml-16 border-y text-2xl md:text-4xl font-bold text-center text-foreground [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1]">
          A LAW FIRM WITH A NEW PERSPECTIVE
        </h2>
      </div>
      <div className="overflow-hidden relative w-full h-full rounded-2xl">
        <div
          className="flex transition-transform duration-1000 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-4 md:gap-8"
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                  {testimonial.title}
                </h2>
                <p className="text-primary text-lg md:text-xl mb-8">
                  {testimonial.description}
                </p>
                <button className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-none transition-all bg-primary text-primary-foreground hover:bg-muted-foreground">
                  Learn More
                </button>
              </div>
              <div className="flex-1 rounded-xl p-4 md:p-6 transform transition-all duration-300 hover:scale-105">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?format=png";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-4 right-4 md:right-8 flex space-x-2 md:space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <FaArrowLeft
              className="text-blue-600 md:text-2xl"
              size={20}
              color="#2563eb"
            />
          </button>

          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <FaArrowRight size={20} color="#2563eb" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-blue-600 w-4 md:w-6"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
