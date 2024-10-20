import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold  text-primary sm:text-5xl">
            AI Course Generator
            <strong className="font-extrabold text-black sm:block">
              {" "}
              Custom learning path powered by AI
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Unlock personalized courses with AI driven course creation Tailor
            your learning journey to fit your unique goal and pace
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
