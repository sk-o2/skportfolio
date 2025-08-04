import { meta, ss, bietlogo, expp } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    react,
    tailwindcss,
    typescript,
    insta
} from "../assets/icons";

import aftereffects from "../assets/icons/aftereffects.svg";
import davinci from "../assets/icons/davinci.svg";
import figma from "../assets/icons/figma.svg";
import photoshop from "../assets/icons/photoshop.svg";
import premierepro from "../assets/icons/premierepro.svg";  

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Education",
        icon: bietlogo,
        iconBg: "#accbe1",
        date: "Aug 2023 - July 2027",
        points: [
            "I'm currently in my third year of B.Tech, majoring in Electronics and Communication Engineering.",
            "I’m studying at Bundelkhand Institute of Engineering and Technology (BIET), Jhansi.",
            "As an undergrad, I’m building a strong foundation in both core electronics and communication systems",
        ],
    },
    {
        title: "Experience",
        icon: expp,
        iconBg: "#D3D3D3",
        date: "Jan 2023 - Present",
        points: [ "I have hands-on experience in front-end development using the React.js framework, with approximately 6 months of practical work.",
                  "I possess 1.5 years of experience in video editing, primarily using Adobe Premiere Pro and After Effects.",
                  "I have been working with Figma for around 6 months, focusing on UI design and prototyping.",
                  "For more detailed insights into my work, you can explore the 'WebD' and 'Video Editing' sections linked above."
        ],
    },
    {
        title: "Soft skills & Hobbies",
        icon: ss,
        iconBg: "#b7e4c7",
        points: [
            "I'm good at communicating, staying polite, and handling situations with a strong, determined mindset.",

            "I enjoy building creative projects with electronics and love fixing things in my free time.",

            "Playing chess is one of my favorite hobbies—it helps me stay sharp and think strategically.",

            "Music is my go-to for relaxation and keeping the energy up while working or unwinding."
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sk-o2',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sk-thakur-26326229b',
    },
    {
        name: 'Insta',
        iconUrl: insta,
        link: 'https://www.instagram.com/tri_.netra/#',
    }
];

export const videoSkills = [
    {
        imageUrl: aftereffects,
        name: "After Effects",
        type: "Video Editing",
    },
    {
        imageUrl: premierepro,
        name: "Premiere Pro",
        type: "Video Editing",
    },
    {
        imageUrl: davinci,
        name: "DaVinci Resolve",
        type: "Video Editing",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Design",
    }
];

 export const videos = [
  {
    title: "Speed Ramp Effect",
    videoId: "Opr__1FC7hY",
  },
  {
    title: "Text Animation",
    videoId: "OCZ0sWOjeaY",
  },
  {
    title: "Flickering Effect",
    videoId: "PVm-e13-9eQ",
  },
  {
    title: "Paralax effect",
    videoId: "M7IVVenfDQw",
  }
];