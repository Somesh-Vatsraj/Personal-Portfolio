import React from "react";
import { siteConfig } from "../config/siteConfig";

export const Education = () => {
  if (!siteConfig.education || siteConfig.education.length === 0) return null;

  return (
    <section id="education" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
        <p className="text-gray-600 dark:text-gray-400">My academic background</p>
      </div>

      <div className="space-y-6">
        {siteConfig.education.map((edu, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-fit">
                {edu.year}
              </span>
            </div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{edu.institution}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm pt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
