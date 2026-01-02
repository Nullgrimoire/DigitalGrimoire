import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 bg-gray-900 text-white">
      <h1 className="text-3xl md:text-5xl mb-4">🧙‍♂️ Noah Weeks</h1>
      <p className="text-base md:text-lg text-purple-300">
        Dark Mage of Code | OSCP Seeker | Fantasy Dev
      </p>
      <p className="mt-6 text-sm text-gray-400 max-w-xl">
        <em>"Code is the spellbook. Terminal is the wand."</em>
      </p>
    </div>
  );
};

export default Hero;
