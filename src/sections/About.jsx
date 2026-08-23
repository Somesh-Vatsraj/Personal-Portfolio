import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Button } from "../components/Button";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">Get to know more about who I am and what I do</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {siteConfig.personal.aboutMe}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase">Location</span>
              <span className="text-base font-medium text-gray-900 dark:text-white">{siteConfig.personal.location}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-500 uppercase">Email</span>
              <span className="text-base font-medium text-gray-900 dark:text-white">{siteConfig.personal.email}</span>
            </div>
          </div>
          {siteConfig.personal.resumeUrl && (
            <div className="pt-4">
              <Button href={siteConfig.personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download Resume/CV
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
