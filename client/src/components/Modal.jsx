import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); 

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Hey there, Fitness Rockstar! 🤘
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to your new BFF in the battle for buns of steel and abs of glory! Get ready to high-five your reflection in the mirror, crush goals, and maybe even bust out a victory dance—confetti cannons primed! Grab your water bottle, slap on those headphones, and let’s turn sweat into sparkle.
              Ready to make gains, giggles, and good vibes?
              Let’s GO! 🚀
              {/* <a
                href="https://github.com/Noorain00"
        
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                GitHub Repository
              </a> */}
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Modal;
