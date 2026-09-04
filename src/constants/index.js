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
    twitter,
    express,
    nodejs
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
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    }
    ,
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Education",
        icon: bietlogo,
        iconBg: "#accbe1",
        date: "Aug 2023 - July 2027",
        points: [
            "Currently in my final year of B.Tech, majoring in Electronics and Communication Engineering.",
            "I’m studying at Bundelkhand Institute of Engineering and Technology (BIET), Jhansi.",
            "As an undergrad, I’m building a strong foundation in both core electronics and communication concepts, as well as software development and programming skills.",
        ],
    },
    {
        title: "Experience",
        icon: expp,
        iconBg: "#D3D3D3",
        date: "Jan 2023 - Present",
        points: [ "I have hands-on experience in fullstack development using the MERN Stack, with approximately 1.5 years of practical work.",
                  "I have experience in designing and implementing RESTful APIs using Node.js and Express.",
                  "I have a strong understanding of database design and management, particularly with MongoDB.",
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
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/sk_o2_',
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

export const projects = [
  {
    id: "stemedu",
    title: "STEM Edu",
    category: "EdTech & AI",
    subtitle: "Interactive STEM Learning Platform",
    description: "A comprehensive platform providing hands-on STEM project guides, interactive learning modules, and AI assistant integration to help students build real-world skills.",
    link: "https://stemedu-1.onrender.com/",
    tags: ["React.js", "Node.js", "Express", "Tailwind CSS", "AI Tools"],
    status: "Live Project",
    accent: "from-cyan-400 via-blue-500 to-indigo-500",
    border: "hover:border-cyan-500/50",
  },
  {
    id: "electrobay",
    title: "ElectroBay",
    category: "E-Commerce",
    subtitle: "Electronics Component Store",
    description: "An online store built for hardware enthusiasts and students to browse, search, and order electronic components, microcontrollers, sensors, and robotics gear.",
    link: "https://electrobay.shop/",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "REST APIs"],
    status: "Live Project",
    accent: "from-amber-400 via-orange-500 to-yellow-500",
    border: "hover:border-amber-500/50",
  },
  {
    id: "stackforge",
    title: "StackForge",
    category: "Full-Stack Agency",
    subtitle: "Web Development Agency & Marketplace",
    description: "A developer agency portal showcasing full-stack build services, prebuilt website templates, custom solution quotes, and payment gateway integration.",
    link: "https://stack-forge-omega.vercel.app/",
    tags: ["React.js", "Vite", "Tailwind CSS", "Razorpay", "MERN"],
    status: "Live Project",
    accent: "from-purple-500 via-fuchsia-500 to-pink-500",
    border: "hover:border-purple-500/50",
  },
];

export const eceProjects = [
  {
    id: "self-balancing-robot",
    title: "Self-Balancing Robot",
    icon: "🤖",
    accent: "from-blue-500 to-cyan-500",
    border: "hover:border-cyan-500/50",
    tech: ["Arduino", "MPU6050", "L298N", "DC Geared Motors", "PID Control"],
    points: [
      "Built a two-wheel self-balancing robot using an MPU6050 IMU to measure orientation and angular movement.",
      "Implemented sensor-feedback control and real-time motor adjustments to maintain balance and correct tilt.",
    ],
  },
  {
    id: "electrical-safety",
    title: "Electrical Safety Monitoring System",
    icon: "⚡",
    accent: "from-yellow-500 to-orange-500",
    border: "hover:border-yellow-500/50",
    tech: ["Arduino Uno", "ZMPT101B", "ACS712", "16x2 LCD", "Embedded C"],
    points: [
      "Designed an embedded system to measure voltage and current for real-time electrical safety monitoring.",
      "Interfaced sensing circuits with a microcontroller and processed electrical parameters for abnormal-condition analysis.",
    ],
  },
  {
    id: "esp32-webserver",
    title: "Webpage Server using ESP32",
    icon: "🌐",
    accent: "from-emerald-500 to-teal-500",
    border: "hover:border-emerald-500/50",
    tech: ["ESP32", "Wi-Fi", "HTTP", "Arduino IDE"],
    points: [
      "Developed an ESP32-based web server to host and serve a custom webpage over a local Wi-Fi network.",
      "Implemented HTTP communication to display real-time device or sensor data through a browser interface.",
    ],
  },
  {
    id: "rf-communication",
    title: "Wireless Communication System using RF Transceiver",
    icon: "📡",
    accent: "from-purple-500 to-indigo-500",
    border: "hover:border-purple-500/50",
    tech: ["Arduino", "433 MHz RF Transmitter/Receiver", "Wireless Communication"],
    points: [
      "Built a wireless RF communication system using Arduino and transmitter-receiver modules for embedded data transmission.",
      "Implemented transmitter-receiver logic to send, receive, and process data between embedded devices.",
    ],
  },
  {
    id: "obstacle-robot",
    title: "Obstacle Avoiding Robot",
    icon: "🚗",
    accent: "from-rose-500 to-pink-500",
    border: "hover:border-rose-500/50",
    tech: ["Arduino Uno", "HC-SR04", "L298N", "DC Motors", "PWM"],
    points: [
      "Built an autonomous robot using Arduino Uno and ultrasonic sensing for real-time obstacle detection.",
      "Implemented sensor-based decision logic and PWM motor control for autonomous navigation and obstacle avoidance.",
    ],
  },
];

export const eceSkills = [
  {
    category: "Programming",
    icon: "💻",
    skills: ["C", "C++", "Embedded C", "Python"],
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/30",
  },
  {
    category: "Microcontrollers",
    icon: "🎛️",
    skills: ["Arduino (Uno, Nano, Mega)", "ESP32", "ESP8266", "Raspberry Pi Pico"],
    color: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/30",
  },
  {
    category: "Embedded",
    icon: "⚙️",
    skills: ["GPIO", "PWM", "ADC", "Sensor Interfacing", "Motor Control", "Debugging"],
    color: "from-amber-500 to-orange-500",
    border: "border-amber-500/30",
  },
  {
    category: "Communication",
    icon: "📡",
    skills: ["UART", "I2C", "SPI", "Wi-Fi", "Bluetooth", "RF"],
    color: "from-purple-500 to-indigo-500",
    border: "border-purple-500/30",
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Arduino IDE", "Git", "GitHub", "VS Code"],
    color: "from-rose-500 to-pink-500",
    border: "border-rose-500/30",
  },
];