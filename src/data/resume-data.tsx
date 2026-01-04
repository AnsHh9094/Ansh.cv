import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ansh",
  initials: "A",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  about: "Freelance Full Stack Web Developer",
  summary: (
    <>
      Motivated BCA third-year student and Freelance Full Stack Web Developer with hands-on experience in designing and developing scalable, high-performance web applications. Proficient in modern JavaScript frameworks, backend systems, and Linux-based cloud environments. Experienced in delivering real-world projects through freelance work, college events, seminars, and client collaborations. Strong focus on clean code, performance optimization, and continuous learning.
    </>
  ),
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://ansh-resume-sable.vercel.app/",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AnsHh9094",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "Graphic Era (Deemed to be University)",
      degree: "Bachelor of Computer Applications (BCA)",
      start: "2023",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Freelance & Design Work",
      link: "",
      badges: ["Freelance", "Design", "Frontend"],
      title: "Freelance Full Stack Web Developer",
      start: "2023",
      end: "Present",
      description: (
        <>
          Delivered web design, UI illustrations, and frontend assets for freelance clients and college-related events.
          <ul className="list-inside list-disc">
            <li>
              Contributed to seminars and academic projects with real-world design and development requirements.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "NoSQL",
    "Linux",
    "AWS",
    "Oracle Cloud",
    "Figma",
    "Adobe XD",
    "Git",
  ],
  projects: [
    {
      title: "Mail Scraper",
      techStack: ["Web App", "Utility"],
      description: "Developed a utility-based web application for extracting email data efficiently.",
      link: {
        label: "github.com/AnsHh9094/mail-scraper",
        href: "https://github.com/AnsHh9094/mail-scraper",
      },
    },
    {
      title: "Portfolio Website (Folioss)",
      techStack: ["Web Design", "Responsive UI"],
      description: "Designed and developed a personal portfolio with responsive UI and modern layouts.",
      link: {
        label: "github.com/AnsHh9094/folioss",
        href: "https://github.com/AnsHh9094/folioss",
      },
    },
    {
      title: "Next.js E-Commerce Platform",
      techStack: ["Next.js", "Scalable Architecture"],
      description: "Built a scalable e-commerce application using Next.js with performance-focused architecture.",
      link: {
        label: "github.com/AnsHh9094/nextjs-commerce",
        href: "https://github.com/AnsHh9094/nextjs-commerce",
      },
    },
    {
      title: "AntiAFK Tool",
      techStack: ["Automation", "Tool"],
      description: "Created a background automation tool to prevent inactivity detection.",
      link: {
        label: "github.com/AnsHh9094/antiAFK",
        href: "https://github.com/AnsHh9094/antiAFK",
      },
    },
    {
      title: "IvaLocker",
      techStack: ["Security", "Process Management"],
      description: "Developed a utility-based application focusing on security and process management concepts.",
      link: {
        label: "github.com/AnsHh9094/Ivalocker",
        href: "https://github.com/AnsHh9094/Ivalocker",
      },
    },
  ],
} as const;
