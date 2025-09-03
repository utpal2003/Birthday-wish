import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { GiPartyPopper, GiBalloons } from "react-icons/gi";


// The SurpriseBox component with a new, animated gift box and confetti effect.
const SurpriseBox = ({ onAnimationComplete }) => {
  const [isOpened, setIsOpened] = useState(false);

  // Handles the click to open the box and triggers the next part of the app.
  const handleOpenBox = () => {
    setIsOpened(true);
    // Add a delay to let the animations play out before moving to the next section.
    setTimeout(() => {
      onAnimationComplete();
    }, 4000);
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 via-pink-600 to-indigo-900 min-h-screen flex flex-col items-center justify-center text-center text-white p-6 relative overflow-hidden font-sans">
      
      {/* Container for the 3D gift box */}
      <div className={`gift-box-wrapper ${isOpened ? "opened" : ""}`}>
        <div className="box-base" />
        <div className="box-lid" />
        
        {/* Ribbons and Bow on the box */}
        <div className="box-ribbon-h" />
        <div className="box-ribbon-v" />
        <div className="box-bow">
          <div className="bow-knot" />
          <div className="bow-loop-left" />
          <div className="bow-loop-right" />
        </div>
      </div>

      {/* Content that appears when the box is opened */}
      {isOpened && (
        <>
          {/* Confetti Burst */}
          <div className="confetti-popup-container">
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="confetti-popup-piece"
                style={{
                  backgroundColor: [
                    "#ff7e5f",
                    "#feb47b",
                    "#ff6b6b",
                    "#ffd700",
                    "#8a2be2",
                    "#00e676",
                  ][Math.floor(Math.random() * 6)],
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 1.5}s`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Birthday Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 animate-popOut px-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg p-4 rounded-xl backdrop-blur-sm bg-black bg-opacity-30">
              🎉 Happy Birthday! 🎂
            </h2>
            <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 text-pink-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-bounce">
              <FaBirthdayCake />
              <FaHeart />
              <GiPartyPopper />
            </div>
          </div>
          
          {/* Floating Balloons & Stars */}
          <div className="floating-icons">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="floating-icon"
                style={{
                  left: `${Math.random() * 90}%`,
                  animationDuration: `${6 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {i % 2 === 0 ? (
                  <GiBalloons className="text-red-300 text-2xl sm:text-3xl md:text-4xl" />
                ) : (
                  <FaStar className="text-yellow-300 text-xl sm:text-2xl md:text-3xl" />
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Button to open the box */}
      <button
        onClick={handleOpenBox}
        className={`mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base sm:text-lg shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out transform active:scale-95 border-2 border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50 z-30 ${
          isOpened ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        Open Me 🎁
      </button>

      <style jsx>{`
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* 3D Gift Box */
        .gift-box-wrapper {
          position: relative;
          width: 200px;
          height: 130px;
          transform-style: preserve-3d;
          transition: transform 1s ease-in-out;
          perspective: 1000px;
        }
        @media (min-width: 640px) {
          .gift-box-wrapper { width: 280px; height: 180px; }
        }
        @media (min-width: 1024px) {
          .gift-box-wrapper { width: 320px; height: 200px; }
        }

        .box-base, .box-lid {
          position: absolute;
          border-radius: 8px;
        }

        .box-base {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #FF66A3, #B84DFF);
          border: 2px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .box-lid {
          width: 110%;
          height: 70px;
          background: linear-gradient(135deg, #FF66A3, #B84DFF);
          border: 2px solid rgba(255, 255, 255, 0.4);
          top: -40px;
          left: -5%;
          transform-origin: bottom center;
          transition: transform 1.2s ease-in-out, top 1s ease-in-out;
          box-shadow: 0 5px 15px rgba(0,0,0,0.4);
        }

        .gift-box-wrapper.opened .box-lid {
          transform: rotateX(120deg) translate3d(0, -100px, 150px);
        }

        /* Ribbons */
        .box-ribbon-h, .box-ribbon-v {
          position: absolute;
          background: linear-gradient(to right, #ffffff, #f0f0f0);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          transition: transform 1.2s ease-in-out;
        }

        .box-ribbon-h {
          width: 100%;
          height: 15px;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .box-ribbon-v {
          width: 15px;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }

        .gift-box-wrapper.opened .box-ribbon-h {
          transform: translateY(-50%) translateZ(100px) rotateY(90deg) scaleX(0.5);
          opacity: 0;
        }

        .gift-box-wrapper.opened .box-ribbon-v {
          transform: translateX(-50%) translateZ(100px) rotateX(90deg) scaleY(0.5);
          opacity: 0;
        }

        /* Bow */
        .box-bow {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          transition: top 1.2s ease-in-out;
          z-index: 10;
        }
        .gift-box-wrapper.opened .box-bow {
          top: -150px;
          opacity: 0;
          transition: top 1.2s ease-in-out, opacity 0.5s ease-in-out;
        }

        .bow-knot {
          width: 20px;
          height: 20px;
          background: #f0f0f0;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        .bow-loop-left, .bow-loop-right {
          width: 35px;
          height: 35px;
          background: #fff;
          border-radius: 50% 50% 0 50%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }
        .bow-loop-left { left: -25px; }
        .bow-loop-right { right: -25px; transform: translateY(-50%) rotate(-45deg); }
        
        /* Pop Out Text */
        @keyframes popOut {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-popOut {
          animation: popOut 1s ease-out;
        }
        
        /* Confetti */
        .confetti-popup-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        .confetti-popup-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 0;
          animation: confetti-fall 2s forwards;
        }
        @keyframes confetti-fall {
          0% { transform: translateY(0) scale(0) rotate(0deg); opacity: 1; }
          20% { transform: translateY(-5vh) scale(1) rotate(180deg); }
          100% { transform: translateY(100vh) scale(1) rotate(720deg); opacity: 0.5; }
        }

        /* Floating icons */
        .floating-icons {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 15;
          overflow: hidden;
        }
        .floating-icon {
          position: absolute;
          animation: floatUp linear infinite;
        }
        @keyframes floatUp {
          0% { transform: translateY(100vh); opacity: 0; }
          20% { transform: translateY(80vh); opacity: 1; }
          100% { transform: translateY(-20vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default SurpriseBox;
