import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Button } from "../components/Button";
import { SocialLinks } from "../components/SocialLinks";

export const Hero = () => {
  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">{siteConfig.personal.name}</span>
        </h1>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
          {siteConfig.personal.professionalTitle}
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          {siteConfig.personal.shortIntro}
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="outline">Contact Me</Button>
        </div>
        <div className="pt-4 flex justify-center md:justify-start">
          <SocialLinks />
        </div>
      </div>

      <div className="flex-shrink-0">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
          <img
            src={siteConfig.personal.profileImage}
            alt={siteConfig.personal.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
