import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "KARAN",
  initials: "K",
  location: "Dehradun, India",
  locationLink: "https://www.google.com/maps/place/Dehradun",
  about: "Freelance Full Stack Web Developer",
  summary: (
    <>
      Freelance Full Stack Web Developer with hands-on experience designing and developing scalable, high-performance web applications using modern technologies such as Node.js, Next.js, React, and TypeScript. Strong understanding of backend systems, databases, and Linux-based cloud environments (AWS, Oracle Cloud). Adept at building user-centric interfaces, optimizing performance, and deploying secure, reliable solutions. Passionate about clean code, continuous learning, and delivering real-world business impact.
    </>
  ),
  avatarUrl: "https://github.com/k4ran909.png",
  personalWebsiteUrl: "https://o3dn.online",
  contact: {
    email: "k4ran909@gmail.com",
    tel: "+919548585867",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/k4ran909",
        icon: "github",
      },
    ],
  },
  education: [
    {
      school: "Graphic Era (Deemed to be University)",
      degree: "Bachelor of Computer Applications in Computer Science Engineering",
      start: "2023",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Technoz Pvt. Ltd.",
      link: "",
      badges: ["Remote", "Node.js", "TypeScript", "GSAP"],
      title: "Freelance Full Stack Web Developer",
      start: "Dec 2023",
      end: "Jan 2024",
      description: (
        <>
          Developed a complete end-to-end website for a hosting company offering VPS and Minecraft server services.
          <ul className="list-inside list-disc">
            <li>
              Implemented backend functionality using Node.js and TypeScript, with interactive UI animations powered by GSAP.
            </li>
            <li>
              Integrated virtualization systems to enable dynamic server provisioning and real-time machine partitioning.
            </li>
            <li>
              Delivered a scalable and performance-optimized solution aligned with business requirements.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "SQL",
    "React",
    "Next.js",
    "React Native",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Express.js",
    "Node.js",
  ],
  projects: [
    {
      title: "Aelly",
      techStack: ["JavaScript", "HTML", "CSS"],
      description: "Aelly turns text into realistic handwritten pages with deep customization and easy exports.",
      link: {
        label: "k4ran.me/Aelly",
        href: "http://k4ran.me/Aelly/",
      },
    },
    {
      title: "Portfolio",
      techStack: [
        "React",
        "Redux",
        "CSS",
        "JavaScript",
        "HTML",
        "Parallax.js",
      ],
      description: "A React-based portfolio with designer/developer modes, interactive homepages, and cursor-responsive project cards.",
      link: {
        label: "o3dn.online",
        href: "https://o3dn.online",
      },
    },
    {
      title: "AellyX",
      techStack: ["Python", "Shell", "Batchfile"],
      description: "Python-based stress-testing toolkit to simulate multi-layer attacks and evaluate network resilience.",
      link: {
        label: "github.com/k4ran909/AellyX",
        href: "https://github.com/k4ran909/AellyX",
      },
    },
  ],
} as const;
