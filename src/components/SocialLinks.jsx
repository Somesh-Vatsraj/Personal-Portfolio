import React from "react";
import { siteConfig } from "../config/siteConfig";

export const SocialLinks = () => {
  const socialEntries = Object.entries(siteConfig.social).filter(([_, url]) => url && url.trim() !== "");

  if (socialEntries.length === 0) return null;

  return (
    <div className="flex items-center gap-4">
      {socialEntries.map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg capitalize font-medium"
        >
          {platform}
        </a>
      ))}
    </div>
  );
};
