import React from "react";
import { siteConfig } from "../config/siteConfig";

export const Experience = () => {
  if (!siteConfig.experience || siteConfig.experience.length === 0) {
    return null; // Automatically hidden if empty
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">My career journey so far</p>
        </div>

        <div className="space-y-6">
          {siteConfig.experience.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 w-fit">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm pt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
