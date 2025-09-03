// src/components/Home.js
import React, { useState, useEffect } from "react";
import { FaHeart, FaStar, FaBirthdayCake, FaGift } from "react-icons/fa";
import { GiButterfly, GiPartyPopper, GiStarSwirl } from "react-icons/gi";
import SurpriseBox from "./SurpriseBox";

const Home = () => {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isIntroAnimating, setIsIntroAnimating] = useState(true);

  const pages = [
    {
      // This is now the first content page, after the box animation
      bg: "bg-gradient-to-b from-purple-800 via-pink-600 to-indigo-900",
      title: "Light Up My Life",
      message: "You are my favorite person, and this journey is for you 💜",
      button: "Next Surprise 🎁",
      images: [
        { src: "/birtday-wish image.jpg", alt: "Birthday Wish" },
        { src: "/birth-2.jpg", alt: "Birthday Celebration" },
        { src: "/img-1.png", alt: "Image one" },
        { src: "/img-3.jpg", alt: "Image three" },

      ],
      stickers: [<FaStar key="star1" className="text-yellow-400 drop-shadow-lg" />],
    },
    {
      bg: "bg-gradient-to-b from-pink-600 via-rose-400 to-purple-500",
      title: "Happy Birthday, Ayesha 🎂",
      message:
        "On this special day, I celebrate not just your birthday, but the amazing person you are. You light up every room just like BTS lights up the stage ✨",
      button: "Next Surprise 🎁",
      images: [
        { src: "/birtday-wish image.jpg", alt: "Birthday Wish" },
        { src: "/img-3.jpg", alt: "Image three" },
        { src: "/img-4.jpg", alt: "Image four" },
        { src: "/kim image.jpg", alt: "Kim" },
      ],
      stickers: [
        <FaBirthdayCake key="cake1" className="text-pink-300 drop-shadow-lg" />,
        <GiPartyPopper key="popper1" className="text-purple-400 drop-shadow-lg" />,
        <FaGift key="gift1" className="text-red-400 drop-shadow-lg" />,
      ],
    },
    {
      bg: "bg-gradient-to-b from-indigo-700 via-purple-700 to-pink-700",
      title: "To My Best Friend",
      message:
        "Your kindness, laughter, and ARMY energy inspire everyone around you. May this year bring joy, success, and beautiful surprises 💜",
      button: "Continue 💐",
      images: [
        { src: "/birtday-wish image.jpg", alt: "Birthday Wish" },
        { src: "/birth-2.jpg", alt: "Birthday Celebration" },
        { src: "/img-1.png", alt: "Image one" },
        { src: "/img-3.jpg", alt: "Image three" },
        { src: "/img-4.jpg", alt: "Image four" },
        { src: "/kim image.jpg", alt: "Kim" },
      ],
      stickers: [
        <FaHeart key="heart1" className="text-red-400 drop-shadow-lg" />,
        <GiButterfly key="butterfly1" className="text-blue-300 drop-shadow-lg" />,
        <GiStarSwirl key="starSwirl1" className="text-yellow-200 drop-shadow-lg" />,
      ],
    },
    {
      bg: "bg-gradient-to-b from-rose-500 via-pink-400 to-fuchsia-500",
      title: "Special Wish",
      message:
        "Like BTS says, ‘Love Yourself’ — keep shining, dreaming, and being the incredible you. Happiest Birthday, Ayesha! 🎂💜",
      button: "Final Surprise 🎊",
      images: [
        { src: "/birtday-wish image.jpg", alt: "Birthday Wish" },
        { src: "/birth-2.jpg", alt: "Birthday Celebration" },
        { src: "/img-1.png", alt: "Image one" },
        { src: "/img-3.jpg", alt: "Image three" },
        { src: "/img-4.jpg", alt: "Image four" },
        { src: "/kim image.jpg", alt: "Kim" },
      ],
      stickers: [
        <FaStar key="star2" className="text-yellow-300 drop-shadow-lg" />,
        <FaHeart key="heart2" className="text-pink-400 drop-shadow-lg" />,
        <FaBirthdayCake key="cake2" className="text-orange-300 drop-shadow-lg" />,
      ],
    },
    {
      bg: "bg-gradient-to-b from-purple-900 via-indigo-800 to-black",
      title: "Thank You, Madam Ji!",
      message: (
        <>
          <p className="text-base md:text-lg mb-4 text-white/90">
            On this special day, I want to take a moment to celebrate not just your birthday,
            but the incredible person you are. Your presence lights up every room you enter,
            just like how you've lit up our lives.
          </p>
          <p className="text-base md:text-lg mb-4 text-white/90">
            Your kindness, wisdom, and beautiful spirit inspire everyone around you. You have
            this magical way of making ordinary moments feel extraordinary, and today is all
            about celebrating the magic that is uniquely you.
          </p>
          <p className="text-base md:text-lg mb-6 text-white/90">
            May this new year of your life be filled with endless joy, beautiful surprises, and
            all the happiness your heart can hold. You deserve nothing but the very best that
            life has to offer.
          </p>
          <p className="font-semibold text-xl md:text-2xl text-pink-300 animate-pulse-light">
            Wishing you the most wonderful birthday! 🎁🎂✨
          </p>
          <div className="mt-6 text-sm md:text-base text-white/70">
            <p>With love and warm wishes,</p>
            <p className="font-italic">Someone who cares about you ❤️</p>
          </div>
        </>
      ),
      button: "Restart ↩️",
      images: [
        { src: "/birtday-wish image.jpg", alt: "Birthday Wish" },
        { src: "/birth-2.jpg", alt: "Birthday Celebration" },
        { src: "/img-1.png", alt: "Image one" },
        { src: "/img-3.jpg", alt: "Image three" },
        { src: "/img-4.jpg", alt: "Image four" },
        { src: "/kim image.jpg", alt: "Kim" },
      ],
      stickers: [
        <GiPartyPopper key="popper2" className="text-green-300 drop-shadow-lg" />,
        <FaBirthdayCake key="cake3" className="text-white drop-shadow-lg" />,
        <FaHeart key="heart3" className="text-red-500 drop-shadow-lg" />,
        <FaGift key="gift2" className="text-yellow-200 drop-shadow-lg" />,
      ],
    },
  ];

  const page = pages[step - 1]; // Adjusted to handle the initial step 0

  useEffect(() => {
    // Show confetti only on the final page (the one with the final message)
    if (step === pages.length) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000); // Confetti for 8 seconds
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(false); // Hide confetti on all other pages
    }
  }, [step, pages.length]);

  const handleStartAnimation = () => {
    setIsIntroAnimating(false);
    setStep(1); // Move to the first content page after the intro
  };

  const handleNextStep = () => {
    setStep((prev) => (prev + 1) % (pages.length + 1)); // Total steps = pages.length + 1 (for the intro)
    if (step === pages.length) {
      setIsIntroAnimating(true); // Reset to show intro on restart
    }
  };

  if (isIntroAnimating) {
    return <SurpriseBox onAnimationComplete={handleStartAnimation} />;
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center text-center text-white p-4 sm:p-8 relative overflow-hidden transition-all duration-700 ${page.bg}`}
    >
      {showConfetti && <Confetti />}

      {/* Background Images - now with specific slots */}
      {page.images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`absolute opacity-20 object-cover rounded-lg shadow-xl ${index === 0
              ? "top-[5%] left-[5%] w-24 h-24 md:w-32 md:h-32 animate-float1"
              : index === 1
                ? "bottom-[5%] right-[5%] w-24 h-24 md:w-32 md:h-32 animate-float2"
                : index === 2
                  ? "top-[20%] right-[10%] w-20 h-20 md:w-28 md:h-28 animate-float3"
                  : index === 3
                    ? "bottom-[20%] left-[10%] w-20 h-20 md:w-28 md:h-28 animate-float4"
                    : index === 4
                      ? "top-[40%] left-[2%] w-16 h-16 md:w-24 md:h-24 animate-float5"
                      : index === 5
                        ? "bottom-[40%] right-[2%] w-16 h-16 md:w-24 md:h-24 animate-float6"
                        : ""
            }`}
          style={{
            animationDuration: `${5 + index * 1.5}s`,
            animationDelay: `${index * 0.7}s`,
          }}
        />
      ))}

      {/* Floating Birthday Stickers */}
      {page.stickers.map((sticker, index) => (
        <div
          key={index}
          className="absolute text-3xl md:text-5xl animate-stickerFloat drop-shadow-lg"
          style={{
            top: `${15 + index * 10}%`,
            left: `${10 + (index % 2 === 0 ? 0 : 70) + Math.random() * 10}%`,
            animationDuration: `${7 + index * 2}s`,
            animationDelay: `${index * 1.2}s`,
            opacity: 0.9,
            zIndex: 0,
            animationDirection: index % 2 === 0 ? "normal" : "reverse",
          }}
        >
          {sticker}
        </div>
      ))}

      <div className="relative z-10 max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-3xl border border-white/30 p-6 sm:p-10 animate-fadeIn transform hover:scale-102 transition-transform duration-300">
        <FaHeart className="absolute -top-6 left-1/2 -translate-x-1/2 text-red-500 text-7xl animate-pulse-strong drop-shadow-xl" />
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-wide text-shadow-lg">
          {page.title}
        </h1>
        <div className="text-lg md:text-xl mb-6 sm:mb-8 text-white/90 font-medium leading-relaxed">
          {page.message}
        </div>
        <button
          onClick={handleNextStep}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95 border-2 border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50"
        >
          {page.button}
        </button>
      </div>

      <style>{`
        /* ... existing styles ... */
      `}</style>
    </div>
  );
};

// Simple Confetti component, modified for swirling effect
const Confetti = () => {
  const colors = [
    "#ff7e5f", "#feb47b", "#ffc3a0", "#ff6b6b", "#ffa500", "#ff007f",
    "#8a2be2", "#00bcd4", "#ffeb3b", "#e91e63",
  ];
  return (
    <div className="confetti-container">
      {Array.from({ length: 70 }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}vw`,
            width: `${10 + Math.random() * 10}px`,
            height: `${10 + Math.random() * 10}px`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 3}s`,
            transform: `translateY(-10vh) rotate(${Math.random() * 360}deg)`,
            animationName: i % 2 === 0 ? 'swirlAndFall' : 'swirlAndFallReverse', // Alternate animation direction
          }}
        ></div>
      ))}
      <style>{`
        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 999;
        }
        .confetti-piece {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        @keyframes swirlAndFall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(40vh) translateX(20vw) rotate(360deg) scale(0.9);
            opacity: 1;
          }
          100% {
            transform: translateY(105vh) translateX(0) rotate(720deg) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes swirlAndFallReverse {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(40vh) translateX(-20vw) rotate(-360deg) scale(0.9);
            opacity: 1;
          }
          100% {
            transform: translateY(105vh) translateX(0) rotate(-720deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;