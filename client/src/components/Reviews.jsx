import React, { useEffect } from 'react';
import { Review, Heading } from "./";
import { review1, review2, review3, review4 } from "../images";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: -100,
      easing: 'ease-in-back',
    });
  }, []);

  const reviews = [
    {
      img: review1,
      name: "Amit Sharma",
      status: "Member since 2023",
      text: "This gym has completely changed my lifestyle! The trainers are super friendly and always push me to do my best. Clean equipment, great vibe, and motivating atmosphere!"
    },
    {
      img: review2,
      name: "Neha R.",
      status: "Fitness Enthusiast",
      text: "What I love most is the flexibility in class timings and the personalized workout plans. Whether you're a beginner or advanced, this place works for everyone."
    },
    {
      img: review3,
      name: "Sayed Yusuf",
      status: "Member since 2020",
      text: "Excellent facilities and professional trainers. The staff is always ready to help. Plus, the gym app is very smooth for scheduling and payments."
    },
    {
      img: review4,
      name: "Arnold Dsouza",
      status: "Fitness Enthusiast",
      text: "The app makes it so easy to book subscription and track my progress. I also appreciate the feedback feature—it's great how the trainers check in and give personalized tips!"
    }
  ];

  return (
    <section className="relative pt-10">
      <Heading name="Our Reviews" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay={`${index * 300}`}
              className="transform transition duration-500 hover:scale-105"
            >
              <Review
                img={review.img}
                alt={`Review by ${review.name}`}
                name={review.name}
                status={review.status}
                text={review.text}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-rose-300 opacity-80 pointer-events-none z-[-1]" />
    </section>
  );
};

export default Reviews;
