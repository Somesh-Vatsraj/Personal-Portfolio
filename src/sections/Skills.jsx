import React from "react";
import { siteConfig } from "../config/siteConfig";

export const Skills = () => {
  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    programmingLanguages: "Programming Languages",
    database: "Database",
    tools: "Tools & Technologies"
  };

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
        <p className="text-gray-600 dark:text-gray-400">Technologies and tools I work with daily</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(siteConfig.skills).map(([key, items]) => {
          if (!items || items.length === 0) return null;
          return (
            <div key={key} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                {categoryLabels[key] || key}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
