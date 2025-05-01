
// aos
import React, { useEffect } from 'react';
import { Heading, FaqComponent } from ".";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,       // Duration of the animation
      offset: 100,          // Delay the animation until the element is in the viewport
      easing: 'ease-in-out', // Controls the smoothness of the animation
      once: true,           // Whether animation should happen only once
      mirror: false         // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section className='pt-10 relative'>
      <Heading name="Frequently Asked Questions" />

      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col">
          <div data-aos="fade-up">
            <FaqComponent
              question="How To SignUp And Login?"
              answer="Click on the 'Sign Up' button at the top right corner and fill in your details. Once registered, use your email and password to log in anytime"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <FaqComponent
              question="What Is The Fees Of The Plans?"
              answer="We offer flexible plans starting at just ₹1000/month. You can also choose from quarterly and annual packages based on your goals."
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <FaqComponent
              question="Is The Fees Refundable?"
              answer="Yes, we offer a 7-day money-back guarantee if you're not satisfied with the service. Terms and conditions apply"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <FaqComponent
              question="Is It Reliable To Buy Our Packs?"
              answer="Absolutely! Thousands of users trust us to guide their fitness journey. Our plans are designed by certified trainers and tailored to your goals"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <FaqComponent
              question="How Much Time Does It Take to Complete A Pack?"
              answer="Each fitness pack ranges from 4 to 12 weeks depending on your selected plan. You can track your progress through the dashboard anytime."
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-amber-300 opacity-80 pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default FAQ;

