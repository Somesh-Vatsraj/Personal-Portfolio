export const siteConfig = {
  metadata: {
    title: "John Doe | Full Stack Developer & Tech Enthusiast",
    tagline: "Building modern, scalable web applications.",
    description: "Personal portfolio website of John Doe, showcasing projects, skills, education, and professional experience.",
    siteUrl: "https://johndoe.dev",
  },
  
  personal: {
    name: "John Doe",
    professionalTitle: "Full Stack Web Developer",
    shortIntro: "I build high-performance web applications with clean code and modern user interfaces.",
    aboutMe: "Hello! I'm John Doe, a passionate Full Stack Developer with over 3 years of experience building scalable web apps. I specialize in JavaScript technologies across the stack, including React, Node.js, and modern CSS frameworks. I love turning complex problems into simple, beautiful, and intuitive designs.",
    location: "San Francisco, CA, USA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    resumeUrl: "/resume.pdf",
    // Professional placeholder developer photo from Unsplash
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },

  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "", // Leave empty to automatically hide
    facebook: "",
    youtube: "",
    whatsapp: "https://wa.me/15551234567"
  },

  skills: {
    frontend: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React.js", icon: "⚛️" }
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "PHP", icon: "🐘" }
    ],
    programmingLanguages: [
      { name: "C", icon: "💻" },
      { name: "C++", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" }
    ],
    database: [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" }
    ],
    tools: [
      { name: "Git", icon: "🐙" },
      { name: "GitHub", icon: "🐈" },
      { name: "REST API", icon: "🔌" },
      { name: "JSON", icon: "📋" }
    ]
  },

  projects: [
    {
      name: "SaveKaro",
      description: "A modern web application for tracking finances and savings goals seamlessly.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "JavaScript", "REST API"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      category: "Web Development"
    },
    {
      name: "DevSphere",
      description: "A collaborative social platform for developers to share code snippets and articles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      category: "Full Stack"
    },
    {
      name: "WeatherPulse",
      description: "Real-time global weather forecasting app with interactive radar maps.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "API"],
      github: "https://github.com",
      live: "",
      featured: false,
      category: "Frontend"
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2019 - 2023",
      description: "Graduated with Honors. Focused on software engineering, data structures, and web technologies."
    }
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "TechCorp Solutions",
      duration: "2023 - Present",
      description: "Developing and maintaining responsive web interfaces using React.js, optimizing performance, and collaborating with UX designers."
    },
    {
      role: "Web Development Intern",
      company: "Innovate Labs",
      duration: "2022 - 2023",
      description: "Assisted in building REST APIs, updating legacy database structures, and writing automated tests."
    }
  ]
};
